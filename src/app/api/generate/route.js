import { NextResponse } from 'next/server';

export async function GET(request) {
  // Logic for handling GET requests
  const data = { message: "Hello from the API!" };
  return NextResponse.json(data); // Returns a JSON response with status 200
}

export async function POST(request) {
  // Logic for handling POST requests (e.g., saving to a database)
  const body = await request.json();
  return new Response(`Received POST data: ${body.name}`, { status: 200 });
}