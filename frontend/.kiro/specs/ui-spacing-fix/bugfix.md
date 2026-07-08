# Bugfix Requirements Document

## Introduction

The IUCB frontend website uses only ~75–80% of available screen width on every page. Large empty horizontal margins appear on both sides of all content on widescreen monitors (1440px, 1920px+). The root cause is `max-width: 1200px` on the `container-x` utility class in `src/styles.css`, which is too restrictive for modern displays. Additionally, multiple page sections use excessive vertical and horizontal padding values that compress the visual density unnecessarily. This fix adjusts spacing values only — no routing, logic, API calls, state, hooks, colors, typography, or functionality will be changed.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN the viewport width exceeds 1200px THEN the system constrains all page content to a 1200px-wide column, leaving large empty horizontal margins on both sides.

1.2 WHEN a user views any page on a 1440px or wider display THEN the system renders content occupying only ~75–80% of the available screen width due to the `max-width: 1200px` constraint in `container-x`.

1.3 WHEN a user views the `container-x` horizontal padding THEN the system applies `padding-inline: 1.5rem`, adding unnecessary side spacing inside the already-constrained container.

1.4 WHEN a user views a page hero section (rendered by `PageHero` or the services hero) THEN the system applies `py-20 md:py-28` vertical padding, creating excessive top and bottom space in the hero.

1.5 WHEN a user views any content section (About, Index `InstitutionalOverview`, `AudiencePaths`, `ProblemSolution`, `WhatWeOffer`, `TrustPillars`) THEN the system applies `py-20 md:py-24` vertical padding, creating excessive vertical spacing between sections.

1.6 WHEN a user views card components (`p-8` or `p-10`) in the About, Contact, Directory, or Services pages THEN the system applies oversized internal card padding.

1.7 WHEN a user views the site footer THEN the system applies `py-16` vertical padding, making the footer taller than necessary.

### Expected Behavior (Correct)

2.1 WHEN the viewport width exceeds 1440px THEN the system SHALL allow page content to expand up to 1440px in width, reducing empty horizontal margins on widescreen displays.

2.2 WHEN a user views any page on a 1440px or wider display THEN the system SHALL render content occupying a visually proportionate share of the screen width as a result of `max-width: 1440px` in `container-x`.

2.3 WHEN a user views the `container-x` horizontal padding THEN the system SHALL apply `padding-inline: 1rem`, reducing the internal side spacing.

2.4 WHEN a user views a page hero section THEN the system SHALL apply `py-12 md:py-16` vertical padding, reducing hero height while preserving responsive behavior.

2.5 WHEN a user views any content section that previously used `py-20 md:py-24` THEN the system SHALL apply `py-12 md:py-16` vertical padding, reducing inter-section spacing while preserving responsive behavior.

2.6 WHEN a user views card components that previously used `p-8` or `p-10` THEN the system SHALL apply `p-6` internal padding across all affected cards.

2.7 WHEN a user views the site footer THEN the system SHALL apply `py-10` vertical padding, reducing footer height.

### Unchanged Behavior (Regression Prevention)

3.1 WHEN a user views any page on a mobile or tablet viewport THEN the system SHALL CONTINUE TO apply the same responsive layout and spacing behavior as before the fix.

3.2 WHEN a user interacts with any routing, navigation links, or page transitions THEN the system SHALL CONTINUE TO function identically to the pre-fix behavior.

3.3 WHEN a user interacts with any API calls, form submissions, state changes, or hooks THEN the system SHALL CONTINUE TO function identically to the pre-fix behavior.

3.4 WHEN a user views any typography, colors, icons, border radii, or component structure THEN the system SHALL CONTINUE TO render identically to the pre-fix appearance.

3.5 WHEN a user views the `container-x` class on viewports narrower than 1440px THEN the system SHALL CONTINUE TO center content with `margin-inline: auto` and `width: 100%` as before.

3.6 WHEN a user views any `p-6` cards that were not part of this fix (e.g., cards already using `p-5`, `p-4`, `p-6`) THEN the system SHALL CONTINUE TO render with their original padding unchanged.
