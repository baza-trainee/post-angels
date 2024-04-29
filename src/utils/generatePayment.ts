import axios from 'axios';
import { md5 } from 'js-md5';
import { NextResponse } from 'next/server';

interface OrderBody {
  [key: string]: any;
}

export async function POST(req: OrderBody) {
  const rawBody = await req;

  const merchantAccount = process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT;
  const merchantKey = process.env.NEXT_PUBLIC_MERCHANT_SECRET_KEY;
  const messageToHash = `${merchantAccount};${rawBody.merchantDomainName};${rawBody.orderReference};${rawBody.orderDate};${rawBody.amount};${rawBody.currency};${rawBody.productName};${rawBody.productCount};${rawBody.productPrice}`;
  const merchantSignature = md5.hmac.hex(`${merchantKey}`, `${messageToHash}`);

  const order_body: OrderBody = {
    merchantAccount: merchantAccount,
    merchantSignature: merchantSignature,
    merchantAuthType: rawBody.merchantAuthType,
    merchantDomainName: rawBody.merchantDomainName,
    orderReference: rawBody.orderReference,
    orderDate: rawBody.orderDate,
    amount: rawBody.amount,
    currency: rawBody.currency,
    orderTimeout: rawBody.orderTimeout,
    productName: rawBody.productName,
    productPrice: rawBody.productPrice,
    productCount: rawBody.productCount,
    clientFirstName: rawBody.clientFirstName,
    clientLastName: rawBody.clientLastName,
    clientAddress: rawBody.clientAddress,
    clientCity: rawBody.clientCity,
    clientEmail: rawBody.clientEmail,
    defaultPaymentSystem: rawBody.defaultPaymentSystem,
    language: rawBody.language,
  };

  try {
    const response = await axios.post(
      'https://secure.wayforpay.com/pay',
      {
        request: {
          merchantAccount: order_body.merchantAccount,
          merchantSignature: order_body.merchantSignature,
          merchantAuthType: order_body.merchantAuthType,
          merchantDomainName: order_body.merchantDomainName,
          orderReference: order_body.orderReference,
          orderDate: order_body.orderDate,
          amount: order_body.amount,
          currency: order_body.currency,
          orderTimeout: order_body.orderTimeout,
          productName: order_body.productName,
          productPrice: order_body.productPrice,
          productCount: order_body.productCount,
          clientFirstName: order_body.clientFirstName,
          clientLastName: order_body.clientLastName,
          clientAddress: order_body.clientAddress,
          clientCity: order_body.clientCity,
          clientEmail: order_body.clientEmail,
          defaultPaymentSystem: order_body.defaultPaymentSystem,
          language: order_body.language,
        },
      },
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
        },
      }
    );
    if (response) {
      return NextResponse.json({
        status: 'super',
        response: response.data.response,
      });
    }
  } catch (error) {
    //@ts-ignore
    return NextResponse.json({ message: error.message, status: '400' });
  }
}

//   {
//     merchantAccount: order_body.merchantAccount,
//     merchantSignature: order_body.merchantSignature,
//     merchantAuthType: order_body.merchantAuthType,
//     merchantDomainName: 'https://post-angels.vercel.app',
//     orderReference: 'DH1714297496',
//     orderDate: Math.floor(Date.now() / 1000),
//     amount: 100,
//     currency: 'UAH',
//     orderTimeout: 49000,
//     productName: 'Donate',
//     productPrice: 100,
//     productCount: 1,
//     clientFirstName: 'Vasia',
//     clientLastName: 'Pupkin',
//     clientAddress: 'Gagarina st. 12',
//     clientCity: 'Dnipro',
//     clientEmail: 'some@mail.com',
//     defaultPaymentSystem: 'card',
//     language: 'en',
//   },
