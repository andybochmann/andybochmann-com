# Website Improvement Ideas

A prioritized list of ideas to enhance andybochmann.com.

---

## High Priority

### Content & Features

- [ ] **Enable Projects Section** - The projects section exists but is commented out. Consider enabling it to showcase professional work and provide social proof.

- [ ] **Add Contact Method** - Add a contact form or email link so potential employers/clients can reach out easily.

- [ ] **Add Resume/CV Download** - Provide a downloadable PDF resume for recruiters and hiring managers.

- [ ] **Add OG Image** - Create a custom Open Graph image for better social media sharing previews. Currently only text meta tags exist.

### Technical

- [x] **Add robots.txt** - Include a robots.txt file for better SEO and crawler control.

- [x] **Add sitemap.xml** - Create a sitemap to improve search engine indexing.

- [x] **Canonical URL** - Add canonical link tag to prevent duplicate content issues.

---

## Medium Priority

### Content & Features

- [ ] **Work Experience Timeline** - Add a visual timeline showing career progression and key roles.

- [ ] **Blog/Articles Section** - Consider adding a blog to share technical insights and improve SEO with fresh content.

- [ ] **Testimonials/Recommendations** - Add quotes from colleagues or clients to build credibility.

- [ ] **GitHub Activity Integration** - Pull in recent GitHub activity or contribution stats to show active development work.

### UX/Visual

- [ ] **Theme Toggle** - Add a light/dark mode toggle for user preference (current design is dark-only).

- [ ] **Page Transitions** - Add smooth transitions between sections using CSS or JS animations.

- [ ] **Scroll Progress Indicator** - Show reading/scroll progress in the navigation bar.

- [ ] **Back to Top Button** - Add a floating button to return to the top of the page on longer scrolls.

### Technical

- [ ] **Update Three.js** - Current version is r128. Consider upgrading to a newer version for performance improvements and bug fixes.

- [ ] **Add Service Worker** - Implement PWA features for offline capability and faster repeat visits.

- [ ] **Performance Audit** - Run Lighthouse audit and optimize for Core Web Vitals.

- [ ] **Error Tracking** - Add error monitoring for the 3D visualization to catch client-side issues.

---

## Lower Priority

### Content & Features

- [ ] **Speaking/Presentations** - Add a section for conference talks or presentations if applicable.

- [ ] **Open Source Contributions** - Highlight notable open source work or contributions.

- [ ] **Tech Stack Deep Dives** - Add hover tooltips or expandable sections with more details about each skill.

### UX/Visual

- [ ] **Keyboard Navigation for 3D Sphere** - Allow keyboard controls (arrow keys) to rotate the sphere for accessibility.

- [ ] **Additional 3D Interactions** - Add click/touch interactions to the sphere (e.g., click to randomize colors, zoom in/out).

- [ ] **Particle Trail Effects** - Add mouse trail effects in the background for more visual interest.

- [ ] **Loading Animation Variety** - Consider a more engaging loading animation that relates to the 3D visualization.

- [ ] **Micro-interactions** - Add subtle animations to skill tags on hover (beyond current transform).

- [ ] **Favicon Animation** - Create an animated favicon that matches the sphere aesthetic.

### Technical

- [ ] **Code Splitting** - Split Three.js loading to improve initial page load time.

- [ ] **Image Optimization** - If images are added, implement lazy loading and modern formats (WebP, AVIF).

- [ ] **Font Loading Strategy** - Optimize web font loading with font-display and preconnect hints.

- [ ] **CSP Headers** - Implement Content Security Policy headers for improved security (via GitHub Pages _headers or meta tags).

---

## Accessibility Improvements

- [ ] **Skip Link** - Add "Skip to main content" link for keyboard/screen reader users.

- [ ] **Reduced Motion Support** - Respect `prefers-reduced-motion` for users who prefer less animation (partially implemented for particles, could expand).

- [ ] **Focus Indicators** - Ensure all interactive elements have visible focus states (partially done, could be more prominent).

- [ ] **ARIA Live Regions** - Add announcements for dynamic content changes.

- [ ] **Color Contrast** - Audit and improve contrast ratios for text elements (some grey text on dark backgrounds may not meet WCAG AA).

---

## SEO & Analytics

- [ ] **Structured Data Expansion** - Add more JSON-LD types (e.g., WebSite, BreadcrumbList for multi-section pages).

- [ ] **Analytics Integration** - Add privacy-respecting analytics (Plausible, Fathom, or simple analytics).

- [ ] **Performance Monitoring** - Track Core Web Vitals in production.

- [ ] **Search Console Setup** - Verify site with Google Search Console for search insights.

---

## Ideas for Future Consideration

- [ ] **Interactive Project Showcases** - Add interactive demos or embedded code playgrounds for select projects.

- [ ] **AI Chat Widget** - Add a conversational AI assistant to answer questions about experience/skills.

- [ ] **Internationalization** - Add language toggle if targeting international opportunities.

- [ ] **RSS Feed** - If blog is added, include RSS for subscribers.

- [ ] **Newsletter Signup** - Collect emails for updates (only if blog/regular content is planned).

---

## Notes

- The current site has a strong visual identity with the glassmorphism + 3D sphere aesthetic. Any additions should maintain this cohesive design language.
- The responsive design is well-implemented. New features should be mobile-first or at least mobile-friendly.
- Performance is important given the Three.js visualization. New features should be mindful of bundle size and load times.
