import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const partners = await Partner.find();

  return new Response(JSON.stringify(partners), {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Vercel-CDN-Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
