import crypto from 'crypto';
import { NextResponse } from 'next/server';

interface MerchantBody {
  [key: string]: string | number;
}

export async function POST(req: Request) {
  const date = new Date();
  const nextYearDate = new Date(
    date.getFullYear() + 1,
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ).toLocaleDateString('uk-UA');

  const reqBody = await req.json();

  const secretKey = process.env.NEXT_PUBLIC_WAYFORPAY_SECRET_KEY;
  const unixTimeInSeconds = Math.floor(date.getTime() / 1000);
  const merchantAccount = process.env.NEXT_PUBLIC_WAYFORPAY_MERCHANT_ACCOUNT;
  const merchantDomainName = process.env.NEXT_PUBLIC_API_BASE_URL;
  const orderReference = reqBody.order_id;
  const orderDate = unixTimeInSeconds;
  const regularMode = reqBody.regularMode;
  const amount =
    regularMode === 'once'
      ? parseInt(reqBody.amount)
      : parseInt(reqBody.amount) + parseInt(reqBody.regularAmount);
  const currency = reqBody.currency;
  const productName = reqBody.order_desc;
  const productCount = '1';
  const productPrice = parseInt(reqBody.amount);
  const regularAmount = regularMode === 'once' ? 0 : parseInt(reqBody.regularAmount);
  const dateEnd = regularMode === 'once' ? null : nextYearDate;

  const merchant: MerchantBody = {
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

  const order_keys = Object.keys(merchant);
  const signature_row = order_keys.map(el => merchant[el]).join(';');
  const signature = crypto.createHmac('md5', secretKey || '');
  signature.update(signature_row);
  const hexsignature = signature.digest('hex');

  try {
    const response = await fetch(`https://secure.wayforpay.com/pay?behavior=offline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json acceptCharset="utf-8"',
      },
      body: JSON.stringify({
        merchantTransactionSecureType: 'AUTO',
        merchantSignature: hexsignature,
        merchantAccount: merchantAccount,
        merchantDomainName: merchantDomainName,
        orderReference: orderReference,
        orderDate: orderDate,
        amount: amount,
        currency: currency,
        productName: [productName],
        regularMode: regularMode,
        regularAmount: regularAmount,
        productCount: [productCount],
        productPrice: [productPrice],
        regularOn: regularMode === 'once' ? 0 : 1,
        dateEnd: dateEnd,
        merchantAuthType: 'SimpleSignature',
        returnUrl: `http://localhost:3000/uk/api/callback`, //! returnUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/callback`,
      }),
    });

    const redirectURL = await response.json();

    if (redirectURL.url) {
      return NextResponse.json({
        status: 'Ok',
        response: redirectURL.url,
      });
    } else {
      return NextResponse.json({
        status: 'error',
      });
    }
  } catch (error) {
    //@ts-ignore
    console.log('err', error.message);
    return NextResponse.json({ status: '400', error: error });
  }
}
