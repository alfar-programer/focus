# CODEX TASK — Focus Website Data Replacement

Objective:
Replace all mock/demo data in the Focus website with real company data.

Primary Source of Truth:
ai-context/MASTER_COMPANY_INTELLIGENCE.md

Instructions:

1. Identify all sections containing placeholder or demo content:
   - About section
   - Services
   - Business lines
   - Hero text
   - Statistics
   - Contact information
   - Certifications
   - Company description

2. Replace mock data ONLY with verified data from the Master Intelligence file.

3. Do NOT invent:
   - project names
   - certifications
   - statistics
   - international offices

4. Maintain the current UI structure and animations.

5. Only update:
   - text content
   - statistics
   - service descriptions
   - company information

6. Ensure tone matches:
   - engineering-driven
   - industrial
   - professional

7. If a section requires data that is missing:
   leave the existing content unchanged and mark it with:

   // TODO: DATA NOT FOUND IN MASTER FILE

Files that likely require updates:
- HeroSection.jsx
- AboutSection.jsx
- ServicesPage.jsx
- StatsSection.jsx
- ContactSection.jsx
- Footer.jsx