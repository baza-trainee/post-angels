import { fetchModalDonateData } from '@/api/fetchModalDonateData';
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

      const redirectUrl = new URL('http://localhost:3000/');
      return NextResponse.redirect(redirectUrl, 302);
    }
  } catch (error) {
    console.error('Error handling the request:', error);
    return NextResponse.error();
  }
}
