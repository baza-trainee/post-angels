import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const status = formData.get('transactionStatus');

    if (status === 'Approved') {
      const redirectUrl = new URL('http://localhost:3000');

      // change tickets status to PAYED
      return NextResponse.redirect(redirectUrl, 302);
    }
    if (status === 'Declined' || status === 'RefundInProcessing') {
      const referer = req.headers.get('referer');
    }
  } catch (error) {
    return NextResponse.error();
  }
}
