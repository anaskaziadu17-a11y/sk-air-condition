# 📸 Quick Placeholder Images Guide

## 🚀 Get Placeholder Images (Fast)

If you don't have real photos yet, use these free online tools:

### Option 1: placeholder.com (Instant)
```
URL Format: https://via.placeholder.com/{width}x{height}?text={text}

Example for AC Filter Cleaning:
https://via.placeholder.com/600x400?text=AC+Filter+Cleaning

Example for AC Deep Cleaning:
https://via.placeholder.com/600x400?text=AC+Deep+Cleaning+Service
```

**How to use:**
1. Copy placeholder URL
2. Paste into component image path
3. See instant preview

### Option 2: placehold.co (Professional)
```
URL Format: https://placehold.co/{width}x{height}

Example:
https://placehold.co/600x400
```

### Option 3: Create Real Placeholder Images (5 min)

**Using Canva (Free Version):**
1. Go to: https://www.canva.com/
2. Click "Create a design"
3. Select "600 x 400" custom size
4. Search for "AC repair" or "air conditioning" images
5. Add text (service name)
6. Download as JPG
7. Save to `public/images/`

**Using Figma (Free):**
1. Go to: https://www.figma.com/
2. Create new file
3. Frame: 600x400px
4. Add text and shapes
5. Export as PNG
6. Save to `public/images/`

---

## 📁 File Setup (Quick Version)

### Step 1: Create Images Folder
```
Your Project/
├── public/
│   └── images/          ← CREATE THIS FOLDER
│       ├── ac-filter-cleaning.jpg
│       └── ac-deep-cleaning.jpg
```

### Step 2: Add Images to Folder
```bash
# Using command line:
mkdir public/images
cd public/images

# Then copy your images here, or:
# Use Windows Explorer / Finder to drag-drop images
```

### Step 3: Update Component
```tsx
// In Services.tsx, replace image paths:
image: "/images/ac-filter-cleaning.jpg"  // ← path from public folder
```

---

## 📸 Download Free Stock Images

### Best Free Stock Photo Sites (AC/Repair Images):

**Unsplash (100% Free)**
- https://unsplash.com/
- Search: "AC repair", "HVAC", "air conditioning"
- Download directly (no account needed)

**Pexels (100% Free)**
- https://www.pexels.com/
- Search: "HVAC service", "cleaning service"
- HD quality

**Pixabay (100% Free)**
- https://pixabay.com/
- Search: "air conditioning repair"
- CC0 License

**Freepik (Free + Paid)**
- https://www.freepik.com/
- Free images with account
- Business/service themed

**Pixelbay (Free)**
- https://pixelbay.com/
- Professional service photos

---

## 🎨 Quick Templated Approach

### Using These Exact URLs (Test Now)

Add these to your component for testing:

```tsx
const services: ServiceCard[] = [
  {
    id: 1,
    title: "AC Filter Cleaning",
    description: "Professional filter cleaning...",
    image: "https://via.placeholder.com/600x400?text=AC+Filter+Cleaning",
    altText: "AC filter cleaning service"
  },
  {
    id: 2,
    title: "AC Deep Cleaning Service",
    description: "Complete deep cleaning...",
    image: "https://via.placeholder.com/600x400?text=AC+Deep+Cleaning",
    altText: "AC deep cleaning service"
  }
];
```

✅ This will show placeholders IMMEDIATELY while you get real photos!

---

## 🔄 Transition from Placeholder to Real Images

### Timeline:
```
Today: ✅ Deploy with placeholder images
Week 1: Get real photos from work (or hire photographer)
Week 2: Replace placeholder URLs with real images
Week 3: Optimize and compress images
```

**The transition is simple:**
1. Take real photo (or hire photographer)
2. Optimize it (TinyPNG)
3. Save to `public/images/`
4. Update component image URL
5. Done! Site updates automatically

---

## 📸 Photo Tips

### For Professional Look:
- ✅ Good lighting (natural sunlight best)
- ✅ Clean background (white or blurred)
- ✅ Show actual work (before/after if possible)
- ✅ Include technician (shows professionalism)
- ✅ Use 3-4 photos (not just 1-2)
- ✅ Consistent style across photos

### What to Photograph:
1. **Filter Cleaning**: Before/after filter
2. **Deep Cleaning**: Technician cleaning AC unit
3. **Installation**: Technician installing new AC
4. **Tools Setup**: Professional tools and equipment
5. **Team Photo**: Your team in uniform

---

## 🚀 Production-Ready Setup

Once you have real images:

### Step 1: Optimize
```bash
# Using TinyPNG CLI (optional):
npm install -g tinypng-cli

# Compress your images
tinypng public/images/*.jpg
```

### Step 2: Convert to WebP (Advanced)
```bash
# Very fast loading, 25-35% smaller
# Use online converter: https://cloudconvert.com/
# Or use ffmpeg:
ffmpeg -i input.jpg -f image2 -c:v libwebp output.webp
```

### Step 3: Update Component
```tsx
image: "/images/ac-filter-cleaning.webp"  // Using WebP
```

### Step 4: Test
```bash
npm run dev
# Check images load
# Test on mobile
# Check lighthouse score
```

---

## ✅ Placeholder Images Quick Start

**Start using placeholders RIGHT NOW:**

Copy-paste into `Services.tsx`:

```tsx
const services: ServiceCard[] = [
  {
    id: 1,
    title: "AC Filter Cleaning",
    description: "Professional filter cleaning ensures optimal air flow and maintains your AC's efficiency. We use advanced cleaning techniques to remove dust and allergens.",
    image: "https://via.placeholder.com/600x400?text=AC+Filter+Cleaning&bgColor=%234A90E2&textColor=FFFFFF",
    altText: "Professional AC filter cleaning service in Ahmedabad by SK Air Condition"
  },
  {
    id: 2,
    title: "AC Deep Cleaning Service",
    description: "Complete AC deep cleaning including coils, fins, and internal components. Our thorough service keeps your AC running smoothly and extends its lifespan.",
    image: "https://via.placeholder.com/600x400?text=AC+Deep+Cleaning&bgColor=%234A90E2&textColor=FFFFFF",
    altText: "AC deep cleaning and maintenance service by SK Air Condition in Ahmedabad"
  }
];
```

**This shows professional-looking blue placeholders with text!**

---

## 📋 Checklist

- [ ] Created `public/images/` folder
- [ ] Added placeholder or real images
- [ ] Updated component image paths
- [ ] Component renders correctly
- [ ] Hover effects work
- [ ] Responsive on mobile
- [ ] Ready to deploy!

---

**Your services section is ready to go! Deploy now, add real images later! 🚀**
