import { NextResponse } from 'next/server';
import { createPage } from '@/lib/pages';

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb+srv://bijaylife2001:bijay%40mongodb2025@cluster0.gty5vld.mongodb.net/test";
// console.log('MONGODB_URI:', MONGODB_URI);
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic'; // Ensure dynamic routing

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const { slug, components } = await request.json();

    // Validate input
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { error: 'Invalid or missing slug' },
        { status: 400 }
      );
    }

    if (!Array.isArray(components) || components.length === 0) {
      return NextResponse.json(
        { error: 'Components must be a non-empty array' },
        { status: 400 }
      );
    }

    const result = await createPage(slug, components);
    return NextResponse.json({
      ...result,
      url: `/${slug}`,
      message: "Page created successfully. Visit the URL to view your new page."
    });

  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}