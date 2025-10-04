# Project Overview & Changelog

This document provides a comprehensive overview of the Carpenter.ai website project, detailing its core features, technologies, and significant updates.

## Project Description

The Carpenter.ai website is a modern, responsive web application built with Next.js, designed to showcase a company focused on AI-powered solutions. It aims to provide an engaging user experience through dynamic visual elements and interactive AI tools. The site features a clear structure, intuitive navigation, and a focus on demonstrating the company's expertise in artificial intelligence.

## Core Technologies

*   **Frontend Framework:** Next.js (React, TypeScript) for server-side rendering, static site generation, and API routes.
*   **UI Components:** shadcn/ui (built with Radix UI and Tailwind CSS) for a consistent, accessible, and responsive design system.
*   **Styling:** Tailwind CSS for utility-first CSS, enabling rapid UI development and customization.
*   **AI Integration:** Genkit AI framework for building and orchestrating AI-powered features.
*   **3D Graphics:** OGL library for rendering dynamic 3D backgrounds.
*   **Version Control:** Git and GitHub for collaborative development and code management.

## Key Features of the Website

*   **Responsive Design:** Fully adaptive layout ensuring optimal viewing across various devices and screen sizes.
*   **Dynamic 3D Background (Orb):**
    *   Interactive and visually engaging background on the landing page.
    *   Customizable properties including `hoverIntensity`, `rotateOnHover`, `hue`, and `forceHoverState`.
    *   Implemented with `OGL` for high-performance 3D rendering.
*   **AI Idea Validator:**
    *   An interactive tool powered by the Genkit AI framework.
    *   Designed to provide instant feedback, insights, and validation on user-submitted business ideas.
    *   Demonstrates Carpenter.ai's capability in leveraging AI for practical business applications.
*   **Structured Content Sections:**
    *   **Home:** Engaging hero section with a typing animation for the company name and the dynamic Orb background.
    *   **What We Do:** Details the services and offerings.
    *   **Who We Are:** Information about the company's mission and team.
    *   **AI Tools:** Houses the AI Idea Validator and other potential AI features.
    *   **Contact:** A dedicated section with a contact form and social/email links.
*   **Modern UI/UX:** Clean, intuitive, and aesthetically pleasing user interface with smooth animations and transitions.

## Changelog

### 2025-10-03

*   **Features & Enhancements:**
    *   **Dynamic Background Integration:**
        *   Added and integrated the `Orb` dynamic 3D background component to the main landing page.
        *   Configured `Orb` with custom properties (`hoverIntensity`, `rotateOnHover`, `hue`, `forceHoverState`).
        *   Implemented a two-column layout on the landing page, positioning the `Orb` on the right side and the main content on the left.
        *   Adjusted `Orb` sizing to be 30% smaller than its container, ensuring it's prominent but not overpowering.
        *   Ensured vertical alignment of the `Orb` and main content with the center of the page.
        *   Increased the main landing page height to `h-screen` to cover the full viewport.
    *   **Contact Section UI/UX Improvements:**
        *   Rectified alignment of Instagram and Email buttons in the "Contact Us" section, ensuring logos are on the left and content on the right.

*   **Bug Fixes:**
    *   **"use client" Directive Errors:**
        *   Resolved Next.js App Router errors by adding the `"use client";` directive to `Aurora.tsx`, `Plasma.tsx`, and `Orb.tsx` components, enabling the use of client-side React hooks.
    *   **Contact Section Parsing Error:**
        *   Fixed a persistent parsing error in `contact-section.tsx` caused by incorrect JSX structure (unclosed `Link` tag and misplaced `GradientButton`).
        *   Corrected nested `section`/`div` structure in `contact-section.tsx` and `page.tsx` to resolve parsing issues.

*   **Refactoring & Setup:**
    *   **Initial Project Setup:**
        *   Installed project dependencies (`npm install`).
        *   Initialized a Git repository and performed an initial commit of the entire codebase.
    *   **Background Component Management:**
        *   Managed the lifecycle of dynamic background components, including adding `Aurora`, replacing it with `Plasma`, and finally integrating `Orb`.
        *   Cleaned up unused `Aurora.tsx` and `Plasma.tsx` files after replacement.
    *   **Version Control:**
        *   Configured and pushed the entire codebase to a new GitHub repository (`https://github.com/faiz-aaan/website_Gemini_CLI.git`).