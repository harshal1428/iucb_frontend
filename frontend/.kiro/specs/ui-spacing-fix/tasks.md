# Implementation Plan

- [ ] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Container Width and Padding Classes
  - **CRITICAL**: This test MUST FAIL on unfixed code — failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior — it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the oversized spacing values exist in source
  - **Scoped PBT Approach**: Scope the property to the concrete failing cases — read the CSS and TSX source files and assert the new (correct) values are present
  - Test that `src/styles.css` `container-x` has `max-width: 1440px` (will FAIL on unfixed code — confirms `1200px` bug)
  - Test that `src/styles.css` `container-x` has `padding-inline: 1rem` (will FAIL on unfixed code — confirms `1.5rem` bug)
  - Test that `src/components/page-hero.tsx` inner div does NOT contain class `py-20` (will FAIL on unfixed code — confirms hero padding bug)
  - Test that `src/components/site-footer.tsx` grid container does NOT contain class `py-16` (will FAIL on unfixed code — confirms footer padding bug)
  - Test that `src/routes/about.tsx` mission section does NOT contain class `py-20` (will FAIL on unfixed code)
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests FAIL (this is correct — it proves the bug exists)
  - Document counterexamples found (e.g., "`container-x` has `max-width: 1200px` instead of `1440px`")
  - Mark task complete when tests are written, run, and failures are documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Non-Affected Layout and Behavior
  - **IMPORTANT**: Follow observation-first methodology
  - Observe: `container-x` has `width: 100%` and `margin-inline: auto` on unfixed code — record these values
  - Observe: elements using `p-4`, `p-5`, `p-6` (not `p-8`/`p-10`) in affected files on unfixed code — record which elements should NOT change
  - Observe: responsive classes (`sm:`, `md:`, `lg:`) on affected sections on unfixed code — record they must remain intact after fix
  - Write property-based test: for all affected section elements, after substituting section padding, the `md:` responsive variant is still present (e.g., `md:py-16` present when `py-12` is added)
  - Write property-based test: for all affected card elements, padding exactly equals `p-6` (not higher, not lower than targeted cards)
  - Write test: `container-x` CSS still contains `width: 100%` and `margin-inline: auto` after fix
  - Write test: elements with `p-4`, `p-5`, `p-6` that are NOT in the bug-affected list retain their original classes
  - Verify all these tests PASS on UNFIXED code (they test that good things stay good)
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 3. Fix for excessive horizontal whitespace and oversized section/card padding

  - [ ] 3.1 Fix `src/styles.css` — update `container-x` utility
    - Change `max-width: 1200px` → `max-width: 1440px`
    - Change `padding-inline: 1.5rem` → `padding-inline: 1rem`
    - Do NOT change `width: 100%` or `margin-inline: auto`
    - _Bug_Condition: isBugCondition where viewportWidth > 1200 AND element uses container-x_
    - _Expected_Behavior: content fills up to 1440px width with 1rem side padding_
    - _Preservation: width: 100% and margin-inline: auto remain unchanged_
    - _Requirements: 2.1, 2.2, 2.3, 3.5_

  - [ ] 3.2 Fix `src/components/page-hero.tsx` — reduce hero vertical padding
    - Change `py-20 md:py-28` → `py-12 md:py-16` on the `container-x` inner div
    - Do NOT change any other classes, props, or logic in this component
    - _Bug_Condition: isBugCondition where elementClass is "py-20 md:py-28"_
    - _Expected_Behavior: hero uses py-12 md:py-16_
    - _Preservation: eyebrow, h1, description, children slots unchanged_
    - _Requirements: 2.4, 3.1, 3.4_

  - [ ] 3.3 Fix `src/routes/about.tsx` — reduce section and card padding
    - Stats bar section: change `py-16` → `py-10`
    - Mission/Vision/Values section: change `py-20 md:py-24` → `py-12 md:py-16`
    - Timeline section: change `py-20 md:py-24` → `py-12 md:py-16`
    - HQ section: change `py-20 md:py-24` → `py-12 md:py-16`
    - Mission/Vision/Values cards: change `p-8` → `p-6` on the three `<div>` cards in the grid
    - HQ info panel: change `p-10` → `p-6` on the `rounded-2xl bg-primary` div
    - Do NOT change routing, icons, grid structure, colors, or component logic
    - _Bug_Condition: isBugCondition where elementClass IN ["py-16", "py-20 md:py-24", "p-8", "p-10"] in about.tsx_
    - _Expected_Behavior: sections use py-10 or py-12 md:py-16; cards use p-6_
    - _Preservation: all grid layouts, Link components, and Stat sub-component unchanged_
    - _Requirements: 2.5, 2.6, 3.1, 3.4_

  - [ ] 3.4 Fix `src/routes/contact.tsx` — reduce section and form card padding
    - Contact section: change `py-16 md:py-20` → `py-12 md:py-16`
    - Form card: change `p-8` → `p-6` on the `rounded-2xl border border-border` div
    - Do NOT change form logic, `useState`, routing, or `ContactCard` components
    - _Bug_Condition: isBugCondition where elementClass IN ["py-16 md:py-20", "p-8"] in contact.tsx_
    - _Expected_Behavior: section uses py-12 md:py-16; form card uses p-6_
    - _Preservation: form submit handler, Input component, ContactCard components unchanged_
    - _Requirements: 2.5, 2.6, 3.1, 3.3, 3.4_

  - [ ] 3.5 Fix `src/routes/directory.tsx` — reduce card padding
    - Verification form card: change `md:p-8` → `md:p-6` on the `rounded-2xl border border-border bg-card` form container
    - Result detail panel: change `md:p-8` → `md:p-6` on the `bg-white p-6 md:p-8 grid` div
    - Result footer panel: change `md:px-8` → `md:px-6` on the `bg-soft-gray border-t border-border p-5 md:px-8` div
    - Do NOT change certificate lookup logic, `useState`, `downloadCertificatePdf`, or the directory listing cards (those use `p-6` already)
    - _Bug_Condition: isBugCondition where elementClass contains "md:p-8" or "md:px-8" in directory.tsx_
    - _Expected_Behavior: card responsive padding reduced to md:p-6 / md:px-6_
    - _Preservation: form submit, download button, directory listing cards, Field component unchanged_
    - _Requirements: 2.6, 3.1, 3.3, 3.4_

  - [ ] 3.6 Fix `src/routes/services.tsx` — reduce hero and CTA sidebar padding
    - Services hero section: change `py-16 md:py-20` → `py-12 md:py-16` on the `container-x` div inside the hero section
    - CTA sidebar card: change `p-8` → `p-6` on the sticky `rounded-2xl bg-primary` aside card
    - Do NOT change tab logic, `useState`, `content`/`ctaContent` data, table structure, or Link components
    - _Bug_Condition: isBugCondition where elementClass IN ["py-16 md:py-20", "p-8"] in services.tsx_
    - _Expected_Behavior: hero uses py-12 md:py-16; sidebar card uses p-6_
    - _Preservation: tab switching, service content display, table, Link buttons unchanged_
    - _Requirements: 2.4, 2.6, 3.1, 3.3, 3.4_

  - [ ] 3.7 Fix `src/routes/index.tsx` — reduce section padding across all home page sections
    - `InstitutionalOverview` section: change `py-20 md:py-24` → `py-12 md:py-16`
    - `AudiencePaths` section: change `py-20 md:py-24` → `py-12 md:py-16`
    - `ProblemSolution` section: change `py-20 md:py-24` → `py-12 md:py-16`
    - `WhatWeOffer` section: change `py-20 md:py-24` → `py-12 md:py-16`
    - Check and update any remaining sections (`TrustPillars`, `IndustriesRow`) with `py-20 md:py-24` → `py-12 md:py-16`
    - Do NOT change `HeroCarousel` padding (uses custom `pt-14 pb-20 md:pt-20 md:pb-28` — leave as-is unless specifically listed), `KpiStrip` (uses `py-10` — already correct), or any component logic, state, or routing
    - _Bug_Condition: isBugCondition where elementClass is "py-20 md:py-24" in index.tsx sections_
    - _Expected_Behavior: all affected home sections use py-12 md:py-16_
    - _Preservation: HeroCarousel, KpiStrip, carousel logic, slide data, and all interactive elements unchanged_
    - _Requirements: 2.5, 3.1, 3.3, 3.4_

  - [ ] 3.8 Fix `src/components/site-footer.tsx` — reduce footer padding
    - Change `py-16` → `py-10` on the `container-x` grid div inside `<footer>`
    - Do NOT change footer link structure, `cols` data, social links, or bottom bar
    - _Bug_Condition: isBugCondition where elementClass is "py-16" in site-footer.tsx_
    - _Expected_Behavior: footer main grid uses py-10_
    - _Preservation: footer link columns, contact info, social icons, bottom copyright bar unchanged_
    - _Requirements: 2.7, 3.1, 3.4_

  - [ ] 3.9 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Container Width and Padding Classes
    - **IMPORTANT**: Re-run the SAME tests from task 1 — do NOT write new tests
    - The tests from task 1 encode the expected (correct) values
    - When these tests pass, it confirms the spacing fix is fully applied
    - Run all bug condition exploration tests from step 1
    - **EXPECTED OUTCOME**: All tests PASS (confirms bug is fixed)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [ ] 3.10 Verify preservation tests still pass
    - **Property 2: Preservation** - Non-Affected Layout and Behavior
    - **IMPORTANT**: Re-run the SAME tests from task 2 — do NOT write new tests
    - Run all preservation property tests from step 2
    - **EXPECTED OUTCOME**: All tests PASS (confirms no regressions)
    - Confirm `container-x` still has `width: 100%` and `margin-inline: auto`
    - Confirm non-targeted `p-4`, `p-5`, `p-6` elements are unchanged
    - Confirm responsive `md:` variants are still present on all updated sections

- [ ] 4. Checkpoint — Ensure all tests pass
  - Run the full test suite to confirm all tests pass
  - Visually verify at 1440px and 1920px that content fills the screen proportionately with no horizontal scroll
  - Visually verify at 375px (mobile) and 768px (tablet) that responsive layout is unchanged
  - Ensure all tests pass; ask the user if any questions arise
