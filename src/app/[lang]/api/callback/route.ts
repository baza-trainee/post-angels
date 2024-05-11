import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const status = formData.get('transactionStatus');

    if (status === 'Approved') {
      const redirectUrl = new URL('http://localhost:3000/');

      return NextResponse.redirect(redirectUrl, 302);
    }
    if (status === 'Declined' || status === 'RefundInProcessing') {
      const referer = req.headers;
      const redirectUrl = new URL('http://localhost:3000/');

      return NextResponse.redirect(redirectUrl, 302);
    }
  } catch (error) {
    return NextResponse.error();
  }
}
