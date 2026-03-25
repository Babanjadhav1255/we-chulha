

# 3D Animated WE Chulha Website

## Overview
Transform the current flat single-page site into a highly professional, 3D animated website using **React Three Fiber** (@react-three/fiber v8 + @react-three/drei v9) combined with scroll-driven animations via Framer Motion. The site will feature a 3D interactive hero with a rotating placeholder stove model, particle effects, and smooth scroll-triggered section transitions — all while keeping the same content and branding.

## Technical Approach

### New Dependencies
- `@react-three/fiber@^8.18` — React renderer for Three.js
- `@react-three/drei@^9.122.0` — Helpers (OrbitControls, Float, Text3D, Environment, etc.)
- `three@^0.160` — Three.js core

### Architecture

**1. 3D Hero Section**
- Full-viewport Three.js canvas as the hero background
- A rotating 3D geometric stove placeholder (built from basic Three.js primitives — cylinder, box, torus) that the user can later replace with a real GLTF model of WE Chulha
- Floating fire/ember particle system using instanced meshes
- Soft environment lighting with warm orange/amber tones matching the brand
- Scroll-linked camera movement — as user scrolls, camera slowly pulls back

**2. Scroll-Driven Animations (Framer Motion)**
- Each section animates in with parallax depth layers
- Stats counter animation on scroll into view
- Cards flip/rotate in with 3D perspective transforms via CSS `perspective` + Framer Motion
- Staggered entrance animations with spring physics

**3. Section Redesign**
- **Hero**: Full-screen 3D canvas with floating text overlay, glass-morphism CTA buttons
- **Starter Package**: Card with subtle 3D tilt effect on hover (using CSS transforms, no heavy Three.js)
- **Why WE Chulha**: Feature cards with 3D flip-in animations and glowing icon backgrounds
- **Pellet Guide**: Animated circular progress indicators with 3D depth
- **Contact**: Parallax background with floating 3D elements

**4. Placeholder Images**
- Will add clearly labeled placeholder image slots (`/public/images/stove-hero.png`, `/public/images/stove-detail.png`, etc.) that the user can replace with real product photos
- Placeholders will use gradient-filled boxes with labels like "Replace with stove image"

### File Changes

| File | Action |
|------|--------|
| `package.json` | Add three, @react-three/fiber, @react-three/drei |
| `src/components/Hero3D.tsx` | **New** — Three.js canvas with 3D stove model + particles |
| `src/components/FloatingParticles.tsx` | **New** — Ember/fire particle system |
| `src/components/StoveModel.tsx` | **New** — Placeholder 3D stove from primitives |
| `src/components/TiltCard.tsx` | **New** — Reusable 3D tilt-on-hover card |
| `src/components/ScrollSection.tsx` | **New** — Scroll-triggered animated section wrapper |
| `src/pages/Index.tsx` | **Rewrite** — Compose all 3D sections, keep same content/data |
| `src/index.css` | Add glassmorphism utilities, smooth scroll |
| `tailwind.config.ts` | Add perspective utilities, new keyframes |

### Visual Design Direction
- Warm dark background (deep charcoal `#1a1a1a`) with orange/amber accents
- Glass-morphism panels over 3D scenes
- Floating ember particles throughout
- Smooth scroll behavior with parallax depth
- Professional typography preserved (Space Grotesk + DM Sans)

