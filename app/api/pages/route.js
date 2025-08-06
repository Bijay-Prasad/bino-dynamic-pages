import { NextResponse } from 'next/server';
import { createPage } from '@/lib/pages';

export const dynamic = 'force-dynamic'; // Ensure dynamic routing

export async function POST(request) {
  try {
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

    const result = createPage(slug, components);
    // window.open(`/${slug}`, '_blank');
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

// import { NextResponse } from 'next/server';
// import { createPage } from '@/lib/pages';

// export const dynamic = 'force-dynamic';

// export async function POST(request) {
//   try {
//     const { slug, components } = await request.json();
    
//     // Validate input
//     if (!slug || typeof slug !== 'string') {
//       return NextResponse.json(
//         { error: 'Invalid or missing slug' },
//         { status: 400 }
//       );
//     }

//     const result = createPage(slug, components);
    
//     // Create HTML response with JavaScript to open new tab
//     const html = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>Page Created</title>
//           <script>
//             window.open('/${slug}', '_blank');
//             window.close();
//           </script>
//         </head>
//         <body>
//           <p>Page created successfully. If not redirected automatically, <a href="/${slug}" target="_blank">click here</a>.</p>
//         </body>
//       </html>
//     `;

//     return new NextResponse(html, {
//       status: 200,
//       headers: {
//         'Content-Type': 'text/html',
//       },
//     });
    
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }