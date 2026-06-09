/**
 * Generation manifest (commit ALL axes — Phase Gate verifies completeness):
 *   archetype: G              style: S9                 color_variant: deep-navy
 *   voice_family: V6          card_variant: CV6         cta_variant: CTA1
 *   header_variant: split-edges    footer_variant: FT3
 *   hero_overlay: HO3         hero_text: H1             hero_entrance: E2
 *   scene_variant: SC3        motion_variant: M3
 *   g_render_mode: scrub-cinematic   (archetype === G)
 *   services_variant: SV3     showcase_variant: PV2
 *   hero_composition: HC5     manifesto_variant: MV3
 *   value_prop_variant: VV3   process_variant: PRV2
 *   loading_variant: L2
 *   booking_pattern: n/a      hero_treatment: scrubbed-frames
 *   glass_material: frosted-hairline   motion_vocabulary: frame-scrub
 *   background_treatment: layered-photography-parallax
 *   card_material_variant: image-reveal-mask
 *   motion_bg_pattern: none   motion_bg_density: none
 *   narrative_shape: place-portrait    camera_vocabulary: forward-dolly
 *   composition_pattern: lower-third   subject_position: mid
 *   lighting_temperature: blue-hour    industry_video_tone: fallback-warm-slow
 *   bookingVariant: n/a   cartVariant: n/a   industry: null (sports media)
 *   auth_strategy: none   customer_management_enabled: false
 *   subscribers_enabled: true
 *
 * PRE-LOCKED (operator intake — verbatim, not re-rolled):
 *   archetype = G + g_render_mode = scrub-cinematic
 *   heroStyle = Scroll-paced video
 *   colorPalette = Deep Navy & Cream (deep-navy): #FAF6EE,#E8DFCF,#1F3252,#0E1C33
 *   typographyPair = Archivo Black + Inter (archivo-inter)
 */

export const siteConfig = {
  company: {
    name: "GoalCast",
    tagline: "Every match. Rated, predicted, decided.",
    description:
      "GoalCast is the live companion for the 2026 World Cup across the USA, Canada and Mexico — real-time scores, player ratings, data-backed predictions and a standings room that updates with every whistle.",
    email: "hello@goalcast.app",
    phone: "+1 (555) 014-2026",
    location: "Live from USA · Canada · Mexico",
  },

  brand: {
    primary: "#FAF6EE",
    accent: "#E8DFCF",
    bg: "#0E1C33",
  },

  typography: {
    display: "Archivo Black",
    body: "Inter",
    mono: "ui-monospace",
  },

  seo: {
    siteUrl: "https://goalcast.app",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "GoalCast — Every match. Rated, predicted, decided.",
    defaultDescription:
      "Live 2026 World Cup scores, player ratings, data-backed predictions and real-time standings for USA, Canada and Mexico.",
    ogImageSlot: "og-image",
    twitterHandle: "@goalcast",
  },

  socials: {
    instagram: "https://instagram.com/goalcast",
    twitter: "https://twitter.com/goalcast",
    youtube: "https://youtube.com/@goalcast",
    tiktok: "https://tiktok.com/@goalcast",
  },

  // Header / Footer pickers read these.
  headerVariant: "split-edges",
  footerVariant: "FT3",

  // -- Hero scroll chapters (scrub-cinematic) --------------------
  heroChapters: [
    {
      at: 0,
      eyebrow: "2026 · USA · CANADA · MEXICO",
      headlineLines: ["The whole", "tournament,", "one feed."],
      subline:
        "From the opening whistle to the final, GoalCast turns every match into live data you can feel.",
    },
    {
      at: 0.4,
      eyebrow: "Live ratings",
      headlineLines: ["Every touch", "scored", "in real time."],
      subline:
        "Player ratings update minute by minute — see who's carrying the side before the pundits do.",
    },
    {
      at: 0.75,
      eyebrow: "Predictions",
      headlineLines: ["Call it", "before", "kickoff."],
      subline:
        "Model-backed win probabilities and your own predictions, settled the moment the whistle blows.",
      cta: { label: "Get early access", href: "#signup" },
    },
  ] as Array<{
    at: number;
    eyebrow?: string;
    headlineLines: string[];
    subline?: string;
    cta?: { label: string; href: string };
  }>,

  // -- Value prop (VV3) ------------------------------------------
  valueProp: {
    eyebrow: "Why GoalCast",
    heading: "The match, decoded while it happens.",
    body: "Scores tell you what. GoalCast tells you why — live ratings, momentum and probabilities that move with the game, not the morning-after headlines.",
  },

  // -- Services / features (SV3 + CV6) ---------------------------
  servicesHeading: "Four ways to watch smarter",
  services: [
    {
      name: "Live Matches",
      slug: "live",
      description:
        "Every fixture, every group, in one live feed — lineups, momentum, key events and shot maps the instant they happen.",
      imageSlot: "service-live",
      highlights: ["Minute-by-minute timeline", "xG + shot maps", "Push alerts for goals"],
    },
    {
      name: "Player Ratings",
      slug: "ratings",
      description:
        "Performance scores that update live, blending on-ball actions, defensive work and impact into a single number you can trust.",
      imageSlot: "service-ratings",
      highlights: ["Live 0–10 ratings", "Heat + touch maps", "Man-of-the-match tracker"],
    },
    {
      name: "Predictions",
      slug: "predictions",
      description:
        "Model-backed win probabilities for every match, plus your own picks settled automatically against the result.",
      imageSlot: "service-predictions",
      highlights: ["Pre-match probabilities", "In-play odds shift", "Your prediction streak"],
    },
    {
      name: "Standings Room",
      slug: "standings",
      description:
        "Groups, brackets and tiebreakers that recalculate the second a result lands — knockout scenarios mapped in real time.",
      imageSlot: "service-standings",
      highlights: ["Live group tables", "Knockout bracket", "Qualification scenarios"],
    },
  ] as Array<{
    name: string;
    slug: string;
    description: string;
    imageSlot: string;
    highlights?: string[];
  }>,

  // -- Showcase mosaic (PV2) -------------------------------------
  showcaseHeading: "Built for the moments that matter",
  showcase: [
    { slot: "section-showcase-1", caption: "Match action, tracked live" },
    { slot: "section-showcase-2", caption: "Every fan, every result" },
    { slot: "section-showcase-3", caption: "The pitch, from above" },
    { slot: "section-showcase-4", caption: "The decisive moment" },
  ] as Array<{ slot: string; caption: string }>,

  // -- Stats (NumberCounter) -------------------------------------
  stats: [
    { value: 104, suffix: "", label: "Matches tracked live" },
    { value: 48, suffix: "", label: "Nations, one feed" },
    { value: 16, suffix: "", label: "Host cities covered" },
    { value: 90, suffix: "s", label: "Ratings refresh cadence" },
  ] as Array<{ value: number; suffix?: string; label: string }>,

  // -- Process (PRV2) --------------------------------------------
  processHeading: "From kickoff to full time",
  process: [
    { step: 1, title: "Follow", description: "Pick your teams and the matches you care about — your feed builds itself around them." },
    { step: 2, title: "Watch", description: "Live ratings, momentum and events stream in as the game unfolds, second screen ready." },
    { step: 3, title: "Predict", description: "Lock your call before kickoff and watch the probabilities move with every chance." },
    { step: 4, title: "Settle", description: "The whistle blows, ratings finalize, standings recalculate and your streak updates instantly." },
  ] as Array<{ step: number; title: string; description: string }>,

  // -- Manifesto (MV3) -------------------------------------------
  manifesto:
    "Football is decided in moments most feeds miss. GoalCast exists to catch them all — to turn 90 minutes of chaos into a story you can read while it's still being written.",

  // -- CTA / signup ----------------------------------------------
  ctaBlock: {
    heading: "Be ready for the first whistle.",
    description:
      "Join the early-access list and we'll bring you into GoalCast before the 2026 group stage kicks off.",
    placeholder: "you@email.com",
    button: "Get early access",
    note: "No spam — just one email when your access is live.",
  },

  scrollHero: {
    archetype: "G",
    styleId: "S9",
    gRenderMode: "scrub-cinematic",
    assetMode: "live-generate",
    scrollDistance: 4,
    loadingVariant: "L2",
    loadingLabel: "GoalCast",
  },

  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "medium",
  },
} as const;

export type SiteConfig = typeof siteConfig;
