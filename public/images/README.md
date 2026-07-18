# Image Replacement Guide

This folder structure is designed to let you easily replace placeholder images with your own high-quality photography later.

## Required Resolutions & Guidelines

### 1. Brand (Logo)
- **Folder:** `/public/images/brand/`
- **Filename:** `logo.svg` or `logo.png`
- **Resolution:** Vector (SVG) highly recommended. If PNG, at least 500x500px with a transparent background.

### 2. Hero Section
- **Folder:** `/public/images/hero/`
- **Filename:** `hero-main.jpg`, `hero-video.mp4`
- **Resolution:** 1920x1080px (16:9) or larger. Keep file sizes under 500KB for images.

### 3. Services (Massage, Spa, Facial, Hair, Nails, Wellness)
- **Folders:** `/public/images/massage/`, `/public/images/spa/`, etc.
- **Filenames:** `signature-massage.jpg`, `facelift.jpg`, etc.
- **Resolution:** 800x1200px (Portrait/Editorial style, 2:3 ratio) or 1080x1080px (Square). Consistency is key.

### 4. Gallery
- **Folder:** `/public/images/gallery/`
- **Filenames:** `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Resolution:** Mix of portrait (800x1200px) and landscape (1200x800px) for an editorial grid.

### 5. Backgrounds
- **Folder:** `/public/images/backgrounds/`
- **Filenames:** `texture.jpg`, `pattern.png`
- **Resolution:** 1920x1080px (or seamless repeating textures).

### 6. Team
- **Folder:** `/public/images/team/`
- **Filenames:** `member-1.jpg`, etc.
- **Resolution:** 800x1000px (Portrait).

## How to Replace
1. Drop your new image into the appropriate folder.
2. Name it exactly as listed in the `src/constants/images.ts` file.
3. The website will automatically update without any code changes!
