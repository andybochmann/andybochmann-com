# Project Overview

This is a static portfolio website for Andy Bochmann, hosted at [andybochmann.com](https://andybochmann.com/). The site showcases professional experience, skills, and projects, featuring an interactive 3D wireframe sphere visualization built with Three.js.

## Tech Stack

*   **HTML5:** Semantic markup for structure.
*   **CSS3:** Custom styling with glassmorphism effects, responsive design, and animations.
*   **JavaScript (ES6+):** Interactive logic and 3D rendering.
*   **Three.js (r128):** 3D graphics library used for the sphere visualization and background effects.

## Architecture

The project follows a simple static site structure with no build process or bundler required.

### Key Files

*   **`index.html`**: The main entry point. Contains the document structure, metadata, content (profile, projects, certifications), and imports the scripts and styles.
*   **`sphere.js`**: Contains the `WireframeSphere` class which manages the Three.js scenes. It handles initialization, the animation loop, mouse interactions, and responsive resizing.
*   **`styles.css`**: Contains all global styles, including the dark theme, glassmorphism card effects, responsive layouts, and utility classes.
*   **`CNAME`**: Configuration file for the custom domain on GitHub Pages.

### Three.js Visualization (`sphere.js`)

The visualization consists of two distinct scenes managed by the `WireframeSphere` class:

1.  **Main Interactive Sphere:**
    *   Rendered in the `#sphere-container` element.
    *   Composed of three concentric rotating layers (wireframes and points).
    *   Interactive: Rotates based on mouse position and speeds up on hover.

2.  **Background Environment:**
    *   Rendered in the `#background-canvas` element (fullscreen).
    *   Features floating particles and a large, slow-rotating background wireframe sphere.
    *   Provides a depth effect with parallax-like movement.

## Development

Since this is a static site, you can run it using any simple HTTP server.

### Running Locally

1.  **Python:**
    ```bash
    python -m http.server 8000
    ```

2.  **Node.js (serve):**
    ```bash
    npx serve
    ```

After starting the server, navigate to `http://localhost:8000` (or the port specified by your server).

### Styling Guidelines

*   **Theme:** Dark blue-grey palette (`#080a12` background).
*   **Glassmorphism:** Elements use semi-transparent backgrounds with `backdrop-filter: blur()`, gradients, and subtle borders to create depth.
*   **Responsiveness:**
    *   **Desktop:** Horizontal layout (Info left, Sphere right).
    *   **Tablet (<900px):** Vertical stack, sphere scales down.
    *   **Mobile (<480px):** Adjusted padding and font sizes for smaller screens.

## Deployment

The site is hosted on **GitHub Pages**.

To deploy updates:
1.  Stage your changes: `git add .`
2.  Commit your changes: `git commit -m "Description of changes"`
3.  Push to the `master` branch: `git push origin master`

The site will automatically rebuild and update on `andybochmann.com`.
