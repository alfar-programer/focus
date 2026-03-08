# Website Component Map

## Home Page (/)
**HomePage.jsx**
- HeroSection.jsx
  - Animated canvas with frame sequence
  - Client logos (DOP, Microsoft, Amazon, Google, HP)
  - Main headline and subtitle
- Section2.jsx
  - Interactive card animations with flip effects
  - Three service cards with numbers and icons
  - Sticky header with title
- Section3.jsx
  - Marquee text animation
  - Card stacking effect with scroll-triggered animations
  - Three content cards with images and descriptions
- Section5.jsx
- Section6.jsx
- Section7.jsx

## About Pages (/about)
**AboutUs.jsx** (redirects to /about/who-we-are)

### Who We Are (/about/who-we-are)
**WhoWeAre.jsx**
- Section1.jsx (main content)

### Our Story (/about/our-story)
**OurStory.jsx**
- Section5.jsx
- Section2.jsx
- Section3.jsx

### Our Partners (/about/our-partners)
**OurPartners.jsx**
- PartnersGrid.jsx
- Section4.jsx

## Services Page (/services)
**ServicesPage.jsx**
- ServicesHero.jsx
  - Breadcrumb navigation
  - Service title and description
  - Technical specification chips
  - CTA buttons
  - Mini statistics
  - SVG technical diagram
  - Floating data card
- ServicesOverview.jsx
- WhyFocus.jsx
- WorkflowSection.jsx

## Projects Page (/projects)
**ProjectsPage.jsx**
- HeroSection.jsx
  - Badge with icon
  - Main title and subtitle
  - Primary and secondary CTA buttons
- IntroSection.jsx
- ProjectsGrid.jsx
- CTASection.jsx

## Contact Page (/contact)
**ContactUs.jsx**
- Hero section with badge and title
- Channels section with contact cards
  - Phone numbers (Saudi Arabia, Egypt)
  - Email contact
  - Other contact methods
- Contact form panel
  - Full name input
  - Company input
  - Email input
  - Service selection dropdown
  - Message textarea
  - Submit button
- Interactive map with office locations
  - Saudi Arabia office
  - Egypt office
- CTA section with buttons

## Global Components
**Navbar.jsx**
- Logo with theme switching
- Navigation links (Home, About, Services, Projects, Contact)
- About dropdown with sub-pages
- Language switcher (EN/AR)
- Theme toggle (dark/light)
- Social media links (LinkedIn, Facebook, Instagram, Twitter)
- Mobile hamburger menu

**Footer.jsx**
- Company metadata
  - Headquarters locations
  - Coordinates
  - Business hours
- Navigation groups
  - Company links
  - Services links
  - Contact information
- Social media links
- Company stamp and copyright

**LoadingScreen.jsx**
- Progress bar animation
- Resource loading tracking

## i18n System
**I18nProvider.jsx**
- Language context provider
- RTL/LTR direction switching
- Translation functions

## Features
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Animations**: GSAP scroll-triggered animations throughout
- **Theme System**: Dark/light mode toggle
- **Internationalization**: English/Arabic language support
- **Interactive Elements**: Canvas animations, card flips, marquees
- **Contact Functionality**: EmailJS integration, interactive maps
- **Social Integration**: LinkedIn, Facebook, Instagram, Twitter links
