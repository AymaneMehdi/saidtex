import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const partners = await Partner.find();
  
  // Create the response
  const response = NextResponse.json(partners);

  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
