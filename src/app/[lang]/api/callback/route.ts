import { fetchModalDonateData } from '@/api/fetchModalDonateData';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

async function initBazaPayment(bazaAmount: number, bazaCurrency: string) {
  const secretKey = process.env.NEXT_PUBLIC_BAZA_WAYFORPAY_SECRET_KEY;
  const unixTimeInSeconds = Math.floor(Date.now() / 1000);
  const merchantAccount = process.env.NEXT_PUBLIC_BAZA_WAYFORPAY_MERCHANT_ACCOUNT;
  const merchantDomainName = process.env.NEXT_PUBLIC_API_BASE_URL;
  const orderReference = `baza-${unixTimeInSeconds}`;
  const orderDate = unixTimeInSeconds;
  const amount = bazaAmount;
  const currency = bazaCurrency;
  const productName = 'Baza Support';
  const productCount = '1';
  const productPrice = bazaAmount;

  const merchant: { [key: string]: string | number } = {
    merchantAccount: merchantAccount || '',
    merchantDomainName: merchantDomainName || '',
    orderReference: orderReference,
    orderDate: orderDate,
    amount: amount,
    currency: currency,
    productName: productName,
    productCount: productCount,
    productPrice: productPrice,
  };

  const orderKeys = Object.keys(merchant);
  const signatureRow = orderKeys.map(el => merchant[el]).join(';');
  const signature = crypto.createHmac('md5', secretKey || '');
  signature.update(signatureRow);
  const hexSignature = signature.digest('hex');

  try {
    const response = await fetch(`https://secure.wayforpay.com/pay?behavior=offline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merchantTransactionSecureType: 'AUTO',
        merchantSignature: hexSignature,
        merchantAccount: merchantAccount,
        merchantDomainName: merchantDomainName,
        orderReference: orderReference,
        orderDate: orderDate,
        amount: amount,
        currency: currency,
        productName: [productName],
        productCount: [productCount],
        productPrice: [productPrice],
        //! returnUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/callback`,
        returnUrl: `http://localhost:3000/uk/api/callback`,
      }),
    });

    const redirectURL = await response.json();

    if (redirectURL.url) {
      return redirectURL.url;
    } else {
      throw new Error('Failed to generate developer payment URL');
    }
  } catch (error) {
    //@ts-ignore
    console.log('err', error.message);
    return NextResponse.json({ status: '400', error: error });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const status = formData.get('transactionStatus');
    const currency = formData.get('currency') as string;
    // const reqBody = await req.json();
    // const { bazaAmount } = reqBody;
    const bazaAmount = '100';

    if (status === 'Approved') {
      const redirectUrl = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
      return NextResponse.redirect(redirectUrl, 302);
    }

    if (status === 'Declined' || status === 'RefundInProcessing') {
      const referer = req.headers;

      try {
        fetchModalDonateData({
          name: 'Anonymous',
          currency: formData.get('currency') || '',
          sum: Number(formData.get('amount')) || 0,
          date: new Date().toISOString(),
        });
      } catch (error) {
        console.error('Failed to send form data to backend:', error);
        return NextResponse.error();
      }

      if (bazaAmount && parseInt(bazaAmount) !== 0) {
        const bazaPaymentUrl = await initBazaPayment(parseInt(bazaAmount), currency);
        return NextResponse.redirect(bazaPaymentUrl, 302);
      }

      //! const redirectUrl = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
      const redirectUrl = new URL('http://localhost:3000/uk');
      return NextResponse.redirect(redirectUrl, 302);
    }
  } catch (error) {
    console.error('Error handling the request:', error);
    return NextResponse.error();
  }
}
