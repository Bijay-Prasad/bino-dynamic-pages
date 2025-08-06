# Dynamic Page Builder for bino.bot

A modern [Next.js](https://nextjs.org/) app that allows you to create brand-new pages on demand via a POST API. Instantly serve dynamic pages at custom routes, powered by reusable React components.

---

## 🚀 Live Demo

- **App:** [https://your-vercel-app-url.vercel.app](https://your-vercel-app-url.vercel.app)
- **API Endpoint:** [https://your-vercel-app-url.vercel.app/api/pages](https://your-vercel-app-url.vercel.app/api/pages)
- **Example Pages:**
  - [Example 1](https://your-vercel-app-url.vercel.app/example-1)
  - [Example 2](https://your-vercel-app-url.vercel.app/example-2)

---

## ✨ Features

- **Create pages on demand** via a simple POST API
- **5 reusable components**:  
  - `Card`
  - `ImageBlock` (shows an image)
  - `TextSection`
  - `StatsBox`
  - `CTA`
- **Instantly view new pages** at `/your-slug`
- **Pre-created demo pages** to showcase functionality
- **Modern UI** with Tailwind CSS and Radix UI
- **Deployable** on Vercel, Render, or any public host

---

## 🛠️ Tech Stack

- [Next.js (latest stable)](https://nextjs.org/)
- React 19
- Tailwind CSS
- Radix UI
- Deployed on Vercel

---

## 📦 Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

---

## 📚 API Usage

### **Endpoint**

```
POST /api/pages
Content-Type: application/json
```

### **Request Body**

```json
{
  "slug": "my-new-page",
  "components": [
    { "type": "TextSection", "props": { "title": "Hello", "content": "World", "align": "center" } },
    { "type": "ImageBlock", "props": { "src": "/placeholder.jpg", "alt": "Demo", "width": 800, "height": 400 } },
    { "type": "Card", "props": { "title": "Card Title", "description": "Card description", "icon": "🌟" } },
    { "type": "StatsBox", "props": { "stats": [ { "value": "100+", "label": "Users" } ] } },
    { "type": "CTA", "props": { "text": "Get Started", "href": "#", "variant": "default" } }
  ]
}
```

### **Sample cURL**

```bash
curl -X POST https://your-vercel-app-url.vercel.app/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "my-new-page",
    "components": [
      { "type": "TextSection", "props": { "title": "Hello", "content": "World", "align": "center" } },
      { "type": "ImageBlock", "props": { "src": "/placeholder.jpg", "alt": "Demo", "width": 800, "height": 400 } }
    ]
  }'
```

### **Response**

```json
{
  "success": true,
  "slug": "my-new-page",
  "url": "/my-new-page",
  "message": "Page created successfully. Visit the URL to view your new page."
}
```

---

## 🖼️ Example Pages

- [Example 1](https://your-vercel-app-url.vercel.app/example-1)
- [Example 2](https://your-vercel-app-url.vercel.app/example-2)

---

## 🧩 Reusable Components

- **Card**: Title, description, and icon
- **ImageBlock**: Displays an image (fulfills the image requirement)
- **TextSection**: Title, content, and alignment
- **StatsBox**: List of stats (value + label)
- **CTA**: Call-to-action button

---

## 📝 Assignment Checklist

- [x] Next.js app (latest stable)
- [x] 5 reusable components (including one with an image)
- [x] POST `/api/pages` endpoint for dynamic page creation
- [x] Demo pages pre-created via the API
- [x] Deployed and public URL provided
- [x] README with API usage and sample cURL

---

## 📤 Deployment

This app is ready to deploy on [Vercel](https://vercel.com/), [Render](https://render.com/), or any public host.

---

## 📄 License

MIT

---

**Questions?**  
Open an issue or contact [your-email@example.com].