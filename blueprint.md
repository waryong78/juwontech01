# Blueprint for Juwon Tech Website

## Overview
This blueprint outlines the structure, design, and features of the Juwon Tech website, a specialist in streetlight pole manufacturing. The site is designed to be modern, responsive, and user-friendly, showcasing product offerings, technical documentation, and contact information.

## Project Details

### Initial Version (prior to modifications)
The initial website structure included:
- **HTML (index.html):** Main structure with navigation, hero section, product highlights, drawings, and contact form.
- **CSS (style.css):** Basic styling.
- **JavaScript (main.js):** (Implied, but no explicit content provided in initial context)
- **Firebase Studio Environment:** Indicated by `.idx/dev.nix` and `mcp.json`.

Key sections included:
- Top bar with contact info and certification.
- Navigation bar with logo "가로등테크" and menu items: 회사소개, 제품소개, 도면자료실, 온라인문의.
- Hero section with a background image and a call to action.
- Products section (`id="products"`) detailing different types of streetlight poles.
- Drawings section (`id="drawings"`) with a table for downloading specifications.
- Contact section (`id="contact"`) with a form and company contact details.
- Footer with company name "STREETLIGHT TECH" and copyright information.

### Implemented Features and Design (Current State)

#### Company Name Change (가로등테크 to 주원테크)
- **`index.html`:**
    - Replaced "가로등테크" with "주원테크" in the main navigation logo.
    - Updated the `<title>` tag from "Streetlight Tech | 가로등주 전문 제작 기업" to "Juwon Tech | 주원테크 가로등주 전문 제작 기업".
    - Changed the contact email address from `info@streetlight-tech.co.kr` to `info@juwon-tech.co.kr`.
    - Replaced "STREETLIGHT TECH" with "JUWON TECH" in the footer's main title.
    - Replaced "Streetlight Tech" with "Juwon Tech" in the copyright notice.

#### About Us Section
- **`index.html`:**
    - Added a new `<section id="about">` block after the hero section and before the products section.
    - The section includes:
        - A main heading "회사소개".
        - An image related to the company.
        - Two paragraphs introducing "주원테크", its history, commitment to quality, and customized solutions.
        - Two feature highlights: "품질 최우선" (Quality First) and "기술 혁신" (Technological Innovation) with corresponding icons and descriptions.

#### Product Image Insertion
- **`index.html`:**
    - Replaced the Font Awesome icon (`<i class="fas fa-sun">`) for "스마트 태양광 LED 가로등" (Solar Smart Type) product with an `<img>` tag.
    - The image source is `./Solar_Street_Light.jpeg` with appropriate `alt` text and styling (`max-h-full max-w-full object-cover`).
    - Increased the height of the image container `div` from `h-80` to `h-96` to provide more space for the image.

#### View Detailed Specifications Modal
- **`index.html`:**
    - Added a hidden modal structure (`#spec-modal`) to the end of the `body` tag, styled with Tailwind CSS.
    - Modified all "상세 규격서 보기" buttons to include `data-product` attributes (e.g., `data-product="standard"`), linking them to specific product types.
- **`main.js`:**
    - Stores detailed specification content for "standard", "double-arm", and "solar-smart" product types.
    - Displays the modal, populates it with relevant content and title based on the clicked button's `data-product` attribute.
    - Hides the modal when the close button or the overlay is clicked.
    - (Refactored: Moved modal management from `index.html` script block to `main.js` for better organization.)

#### Placeholder DWG/PDF for Drawings
- **Created Files:**
    - `콘크리트_기초_및_앵커볼트_상세_구조도.dwg` (placeholder DWG file)
    - `콘크리트_기초_및_앵커볼트_상세_구조도.pdf` (placeholder PDF file)
- **`index.html`:**
    - Updated the `<a>` tags in the "도면 및 설계 자료실" table for the "기초 및 앵커" row to link to the new `.dwg` and `.pdf` files. Added `download` attribute to enable direct download.

#### Dark Mode Implementation
- **`index.html`:**
    - Added a theme toggle button to the navigation bar with moon/sun icons.
    - Added `data-theme="light"` attribute to the `<html>` tag.
- **`style.css`:**
    - Implemented a comprehensive dark theme using CSS variables (`:root` and `html[data-theme="dark"]`).
    - Applied variables to background colors, text colors, border colors, and component styles.
    - Added smooth transitions for theme changes.
- **`main.js`:**
    - Implemented logic to detect system preference (`prefers-color-scheme: dark`) and load/save theme preference from `localStorage`.
    - Added event listener to the toggle button to switch themes and update icons.
- **`.idx/mcp.json`:**
    - Configured Firebase server for MCP.

## Future Plans

### Enhancements
- Implement a more robust contact form validation and submission logic.
- Add an image gallery for completed projects.
- Optimize images for faster loading.
- Add more technical drawings and specifications to the drawings library.
