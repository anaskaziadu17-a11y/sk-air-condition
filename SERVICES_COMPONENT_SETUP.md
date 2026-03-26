# Services Component Setup Guide

## 📁 File Structure

Your new Services component has been created at:
```
src/components/Services.tsx
```

## 🚀 Integration Steps

### Step 1: Import Component in App.tsx

Open `src/App.tsx` and add:

```tsx
import Services from './components/Services';

// In your JSX:
<Services />
```

### Step 2: Create Images Directory

Create a folder for your images:
```
public/images/
```

### Step 3: Add Service Images

Place these images in `public/images/`:
- `ac-filter-cleaning.jpg` (600x400px recommended)
- `ac-deep-cleaning.jpg` (600x400px recommended)

### Step 4: (Optional) Use Placeholder Images

If you don't have images yet, you can use temporary placeholders:

**Option A: Using Placeholder Service**
Replace the image URLs in the component with:
```
image: "https://via.placeholder.com/600x400?text=AC+Filter+Cleaning"
```

**Option B: Create Placeholder Files**
Create simple placeholder images using an online tool:
- https://placeholder.com/
- https://placehold.co/

---

## 📸 Image Optimization Tips

### Image Size Recommendations:
```
Width:  600px minimum (1200px for high-DPI displays)
Height: 400px minimum
Format: JPEG (best for photos) or WebP
Size:   50-100KB per image
```

### How to Optimize Your Images:

**Using TinyPNG (Free)**
1. Go to: https://tinypng.com/
2. Upload your images
3. Download optimized versions
4. Save to `public/images/`

**Using ImageOptim (Free, macOS)**
- Simply drag and drop images
- Works offline

**Using Online Tools:**
- https://imagecompressor.com/
- https://squoosh.app/

---

## 🎨 Component Features

### ✅ What's Included:

1. **Responsive Layout**
   - 2 columns on desktop (1200px+)
   - 1 column on mobile/tablet
   - Automatic spacing adjustments

2. **Hover Effects**
   - Image zoom: 1.05x scale
   - Shadow enhancement
   - Overlay fade effect
   - Button elevation

3. **Image Optimization**
   - Lazy loading (`loading="lazy"`)
   - Proper dimensions for performance
   - Fallback gradient if image fails
   - Alt text for SEO

4. **Animations**
   - Staggered entrance animations
   - Smooth transitions
   - Motion effects on hover
   - Intersection Observer (enter when visible)

5. **Accessibility (A11y)**
   - Semantic HTML (`<article>`, `<section>`)
   - Proper heading hierarchy
   - `aria-labelledby` for section linking
   - Alt text for all images

6. **SEO-Optimized**
   - Proper heading structure (H2 → H3)
   - Descriptive alt text with keywords
   - Schema-friendly markup
   - Fast loading = better ranking

---

## 🔧 Customization Guide

### Change Service Titles/Descriptions

Edit the `services` array in `Services.tsx`:

```tsx
const services: ServiceCard[] = [
  {
    id: 1,
    title: "Your Service Name",
    description: "Your service description...",
    image: "/images/your-image.jpg",
    altText: "Your alt text for SEO"
  },
  // Add more services...
];
```

### Change Colors

Replace Tailwind classes:
- `bg-blue-600` → Your brand color
- `text-gray-900` → Your text color
- `hover:bg-blue-700` → Your hover color

### Change Section Spacing

Adjust these classes:
- `py-16` → Vertical padding
- `px-4` → Horizontal padding
- `gap-8 lg:gap-12` → Grid gap

### Change Animation Speed

Edit motion parameters:
```tsx
transition={{ duration: 0.6, ease: "easeOut" }}
// 0.6 = duration in seconds, higher = slower
```

---

## 📱 Responsive Breakpoints

The component uses Tailwind's responsive prefixes:

```
Mobile:   < 640px   (full width, 1 column)
Tablet:   641px-1024px (1 column)
Desktop:  1025px+   (2 columns)
```

All is automatic with the classes!

---

## ✨ Advanced Customization

### Add More Services

Simply add new items to the `services` array:

```tsx
{
  id: 3,
  title: "AC Installation",
  description: "Professional installation...",
  image: "/images/ac-installation.jpg",
  altText: "AC installation service..."
}
```

The grid automatically adjusts!

### Change Image Aspect Ratio

Modify the image container height:
```tsx
className="h-64 sm:h-80 md:h-72 lg:h-80"
// h-64 = 256px, h-80 = 320px, etc.
```

### Add Icon Above Image

Add this before the image:
```tsx
<div className="absolute top-4 right-4 bg-white/90 rounded-full p-3 z-20">
  <span className="text-2xl">🔧</span>
</div>
```

### Add Price Badge

Add this inside the image container:
```tsx
<div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
  ₹999
</div>
```

---

## 🚀 Performance Tips

### 1. Image Lazy Loading
✅ Already implemented with `loading="lazy"`
- Images load only when visible
- Improves initial page speed
- Better Core Web Vitals score

### 2. Next.js Image Optimization
If you switch to Next.js, replace `<img>` with `<Image>`:
```tsx
import Image from 'next/image';

<Image
  src={service.image}
  alt={service.altText}
  width={600}
  height={400}
  priority={false}
/>
```

### 3. WebP Format
For even better compression:
- Save images as `.webp` format
- Browsers render 25-35% faster
- Use online converter: https://cloudconvert.com/

---

## 📊 SEO Benefits

This component is optimized for:

✅ **On-Page SEO:**
- Descriptive alt text (for image search)
- Proper heading structure (H2, H3)
- Semantic HTML tags
- Fast loading time (images are lazy-loaded)

✅ **Local SEO:**
- Service descriptions with keywords
- Location-specific alt text
- Clean, organized content

✅ **Core Web Vitals:**
- Lazy loading = better LCP
- Responsive design = mobile-friendly
- Smooth animations = better CLS

---

## 🐛 Troubleshooting

### Images Not Showing?

**Check 1: File Path**
```
❌ Wrong: src="/public/images/ac-filter-cleaning.jpg"
✅ Correct: src="/images/ac-filter-cleaning.jpg"
```
(The `/public` folder is automatically served in Vite)

**Check 2: File Names Match**
- Component expects: `/images/ac-filter-cleaning.jpg`
- Your file should be exactly that name (case-sensitive on Linux)

**Check 3: Image File Exists**
```
public/
  └── images/
      ├── ac-filter-cleaning.jpg
      └── ac-deep-cleaning.jpg
```

**Check 4: Vite Dev Server Restarted**
After adding files to `/public`:
- Restart your dev server: `npm run dev`

### Hover Effects Not Working?

Make sure you're using Tailwind CSS:
- Check `tailwindcss` is in `vite.config.ts`
- Check `tailwind.config.js` exists
- CSS file has Tailwind directives

### Motion Animations Not Working?

Ensure motion package is installed:
```bash
npm install motion
# or if you use React 19:
npm install react@latest motion@latest
```

---

## 📝 Example: Full Integration

```tsx
// src/App.tsx
import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';    // ← Add this
import Contact from './components/Contact';

export default function App() {
  return (
    <main>
      <Hero />
      <Services />    {/* ← Add this */}
      <Contact />
    </main>
  );
}
```

---

## 🎯 Next Steps

### Immediate:
1. ✅ Create `public/images/` folder
2. ✅ Add your service images (or use placeholders)
3. ✅ Import component in App.tsx
4. ✅ Test responsiveness on mobile

### This Week:
1. Replace placeholder images with real photos
2. Optimize image sizes
3. Update service descriptions with your actual services
4. Customize colors to match your brand

### This Month:
1. Add more services to the grid
2. Create gallery with before/after photos
3. Add customer testimonials
4. Update SEO descriptions

---

## 📞 Quick Reference

**Component File:**
```
src/components/Services.tsx
```

**Images Location:**
```
public/images/
```

**Integration Point:**
```
src/App.tsx (import and add <Services />)
```

**Tailwind Utilities Used:**
- `grid` - Responsive grid layout
- `gap-*` - Spacing between items
- `hover:` - Hover state styling
- `transition-*` - Smooth animations
- `rounded-*` - Border radius
- `shadow-*` - Drop shadows

---

**Ready to go! Your professional services section is live! 🚀**
