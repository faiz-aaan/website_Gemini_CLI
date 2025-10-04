# Changelog

This document outlines the significant changes and updates made to the Carpenter.ai website codebase.

## 2025-10-03

### Features & Enhancements

*   **Dynamic Background Integration:**
    *   Added and integrated the `Orb` dynamic 3D background component to the main landing page.
    *   Configured `Orb` with custom properties (`hoverIntensity`, `rotateOnHover`, `hue`, `forceHoverState`).
    *   Implemented a two-column layout on the landing page, positioning the `Orb` on the right side and the main content on the left.
    *   Adjusted `Orb` sizing to be 30% smaller than its container, ensuring it's prominent but not overpowering.
    *   Ensured vertical alignment of the `Orb` and main content with the center of the page.
    *   Increased the main landing page height to `h-screen` to cover the full viewport.
*   **Contact Section UI/UX Improvements:**
    *   Rectified alignment of Instagram and Email buttons in the "Contact Us" section, ensuring logos are on the left and content on the right.

### Bug Fixes

*   **"use client" Directive Errors:**
    *   Resolved Next.js App Router errors by adding the `"use client";` directive to `Aurora.tsx`, `Plasma.tsx`, and `Orb.tsx` components, enabling the use of client-side React hooks.
*   **Contact Section Parsing Error:**
    *   Fixed a persistent parsing error in `contact-section.tsx` caused by incorrect JSX structure (unclosed `Link` tag and misplaced `GradientButton`).
    *   Corrected nested `section`/`div` structure in `contact-section.tsx` and `page.tsx` to resolve parsing issues.

### Refactoring & Setup

*   **Initial Project Setup:**
    *   Installed project dependencies (`npm install`).
    *   Initialized a Git repository and performed an initial commit of the entire codebase.
*   **Background Component Management:**
    *   Managed the lifecycle of dynamic background components, including adding `Aurora`, replacing it with `Plasma`, and finally integrating `Orb`.
    *   Cleaned up unused `Aurora.tsx` and `Plasma.tsx` files after replacement.
*   **Version Control:**
    *   Configured and pushed the entire codebase to a new GitHub repository (`https://github.com/faiz-aaan/website_Gemini_CLI.git`).
