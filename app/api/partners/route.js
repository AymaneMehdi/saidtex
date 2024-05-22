import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const partners = await Partner.find();
  
    // Create the response
    const response = NextResponse.json(partners);

    // Add CORS headers
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    // Ensure no caching
    response.headers.set("Cache-Control", "no-store");

    return response;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return NextResponse.error(new Error("Failed to fetch partners"), { status: 500 });
  }
}
