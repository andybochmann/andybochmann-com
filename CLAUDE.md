# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Andy Bochmann hosted at andybochmann.com. The site features an interactive 3D wireframe sphere visualization built with Three.js r128.

## Architecture

### Core Structure

The project uses a simple static site architecture with no build system or bundler:

- **[index.html](index.html)**: Main HTML entry point with profile information and social links
- **[sphere.js](sphere.js)**: `WireframeSphere` class that manages all Three.js rendering and animations
- **[styles.css](styles.css)**: All styling including responsive design, glassmorphism card effects, and blue-tinted dark theme

### Three.js Visualization Architecture

The `WireframeSphere` class (sphere.js:2-278) manages two separate Three.js scenes:

1. **Main Sphere Scene** (foreground): Interactive sphere rendered in the right-side container
   - Three concentric layers: outer wireframe (1.2 radius), middle wireframe (1.0 radius), inner wireframe (0.7 radius)
   - Points at vertices of outer and middle layers
   - Mouse-reactive rotation with smooth interpolation
   - Hover effect that increases rotation speed from 1x to 3x

2. **Background Scene** (fullscreen): Ambient animated environment behind the card
   - 500 floating particles distributed in 3D space
   - Large wireframe sphere (4.5 radius) with vertex points
   - Continuous slow rotation with subtle mouse influence
   - Parallax effect creates depth

### Key Design Patterns

- **Animation Loop**: Single `requestAnimationFrame` loop (sphere.js:229-272) renders both scenes
- **Smooth Transitions**: All rotations use lerp interpolation (factor 0.05) for fluid motion
- **Responsive Canvas**: Both renderers resize dynamically on window resize (sphere.js:212-227)
- **Mouse Interaction**: Normalized mouse coordinates (-1 to 1) drive sphere rotation (sphere.js:195-198)

## Deployment

This is a static GitHub Pages site. The CNAME file contains the custom domain configuration.

To deploy changes:
```bash
git add .
git commit -m "Your commit message"
git push origin master
```

Changes will be live on andybochmann.com after GitHub Pages rebuilds (typically 1-2 minutes).

## Local Development

Since this is a static site with no build process, simply open [index.html](index.html) in a browser. However, for proper testing with external resources (Three.js CDN):

```bash
# Use any local web server, e.g.:
python -m http.server 8000
# or
npx serve
```

Then navigate to `http://localhost:8000`

## Styling Notes

The design uses a glassmorphism aesthetic with:
- Background: Multi-layer radial gradients creating blue-tinted depth (#080a12 base)
- Card: Semi-transparent (55% opacity) with blur(12px) backdrop filter
- Border glow: Subtle blue tint using rgba values for depth
- All sphere colors use blue-grey palette (0x4a5568, 0x5a6577, etc.)

Responsive breakpoints:
- Desktop: Full horizontal layout (info left, sphere right)
- 900px: Stacks vertically, sphere scales down to 320px
- 480px: Further reduced padding and sphere to 260px
