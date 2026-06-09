"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroScrollText from "@/components/motion/HeroScrollText";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import NumberCounter from "@/components/motion/NumberCounter";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig } from "@/content/site-config";
import { frames, videoSlot, imageSlot } from "@/lib/assets";
import { resolveImage } from "@/lib/image-fallback";

const brandColor = siteConfig.brand.bg;

function slotImage(slot: string, keyword: string) {
  return resolveImage({ src: imageSlot(slot), keyword, brandColor });
}

export default function HomeExperience() {
  const [progress, setProgress] = useState(0);

  return (
    <main className="bg-bg text-primary">
      {/* ── Hero: scroll-scrubbed cinematic frames ───────────────── */}
      <ScrollCanvas
        frameCount={frames.frameCount || 192}
        pattern={frames.frameUrlTemplate}
        padLength={4}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        loadingVariant="L2"
        loadingLabel={siteConfig.scrollHero.loadingLabel}
        videoSrc={videoSlot("scene-1")}
        onProgress={setProgress}
      >
        <HeroScrollText
          progress={progress}
          chapters={siteConfig.heroChapters}
          position="bottom-left"
          textColor="var(--color-cream)"
          accentColor="var(--color-sand)"
          accentTextColor="var(--color-deep-navy)"
        />
      </ScrollCanvas>

      {/* ── Value prop ───────────────────────────────────────────── */}
      <section className="section-pad border-t border-white/10 bg-deep-navy">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent/80">
              {siteConfig.valueProp.eyebrow}
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl"
          >
            {siteConfig.valueProp.heading}
          </TextReveal>
          <FadeUp delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary/70 md:text-xl">
              {siteConfig.valueProp.body}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Services / features ──────────────────────────────────── */}
      <section id="live" className="section-pad bg-bg">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {siteConfig.services.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.08}>
                <CardTiltLayer className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-contrast/40">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slotImage(s.imageSlot, s.name)}
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl tracking-tight">{s.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary/65">
                      {s.description}
                    </p>
                    {s.highlights && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.highlights.map((h) => (
                          <li
                            key={h}
                            className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent/90"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardTiltLayer>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showcase mosaic ──────────────────────────────────────── */}
      <section id="showcase" className="section-pad border-t border-white/10 bg-deep-navy">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              {siteConfig.showcaseHeading}
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
            {siteConfig.showcase.map((item, i) => (
              <FadeUp
                key={item.slot}
                delay={i * 0.07}
                className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <figure className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slotImage(item.slot, item.caption)}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 p-5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/90">
                    {item.caption}
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section id="ratings" className="section-pad bg-bg">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {siteConfig.stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.08} className="text-center">
                <div className="font-display text-5xl tracking-tight text-cream md:text-7xl">
                  <NumberCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/55">
                  {stat.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="section-pad border-t border-white/10 bg-deep-navy">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              {siteConfig.processHeading}
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {siteConfig.process.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.08}>
                <div className="flex h-full flex-col border-t border-accent/30 pt-5">
                  <span className="font-mono text-sm text-accent/80">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary/65">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────────── */}
      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-4xl px-6">
          <TextReveal
            as="p"
            className="font-display text-2xl leading-[1.3] tracking-tight text-cream md:text-4xl"
          >
            {siteConfig.manifesto}
          </TextReveal>
        </div>
      </section>

      {/* ── Signup CTA ───────────────────────────────────────────── */}
      <section
        id="signup"
        className="section-pad relative overflow-hidden border-t border-white/10"
      >
        <img
          // eslint-disable-next-line @next/next/no-img-element
          src={slotImage("section-cta", "soccer stadium night floodlights")}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl">
              {siteConfig.ctaBlock.heading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/75">
              {siteConfig.ctaBlock.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="signup-email" className="sr-only">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                required
                placeholder={siteConfig.ctaBlock.placeholder}
                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
              />
              <MagneticButton
                as="button"
                ariaLabel={siteConfig.ctaBlock.button}
                className="shrink-0 rounded-full bg-cream px-7 py-3 font-display text-sm uppercase tracking-[0.12em] text-deep-navy transition-opacity hover:opacity-90"
              >
                {siteConfig.ctaBlock.button}
              </MagneticButton>
            </form>
          </FadeUp>
          <FadeUp delay={0.28}>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/45">
              {siteConfig.ctaBlock.note}
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
