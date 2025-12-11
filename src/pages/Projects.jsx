import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsGrid.json";

const Projects = () => {
  const { intro, blocks } = projectsData;

  const heroBlocks = blocks.filter((b) => b.type === "image-wide");
  const mainBlocks = blocks.filter((b) => b.type !== "image-wide");

  const videoRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (!(el instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  // group main blocks into rows of 2
  const rows = [];
  for (let i = 0; i < mainBlocks.length; i += 2) {
    rows.push(mainBlocks.slice(i, i + 2));
  }

  const wrapIfLink = (projectId, children) =>
    projectId ? (
      <Link to={`/projects/${projectId}`} className="block group">
        {children}
      </Link>
    ) : (
      children
    );

  const renderBlock = (block, alignRightOnDesktop) => {
    if (!block) return null;

    const colClass = alignRightOnDesktop ? "md:col-start-2" : "";

    // IMAGE
    if (
      block.type === "image-vertical" ||
      block.type === "image-horizontal"
    ) {
      const ratioClass =
        block.type === "image-vertical" ? "aspect-[3/4]" : "aspect-[4/3]";

      return wrapIfLink(
        block.projectId,
        <figure className={`border border-sa_line/60 bg-white ${colClass}`}>
          <div className={ratioClass}>
            <img
              src={block.src}
              alt={block.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </figure>
      );
    }

    // STORY
    if (block.type === "story") {
      return wrapIfLink(
        block.projectId,
        <article
          className={`border border-sa_line/70 bg-white px-7 py-8 flex flex-col justify-between h-full ${colClass}`}
        >
          {block.eyebrow && (
            <p className="uppercase tracking-[0.22em] text-[11px] text-sa_muted mb-3">
              {block.eyebrow}
            </p>
          )}
          {block.heading && (
            <h2 className="font-display text-2xl mb-3">
              {block.heading}
            </h2>
          )}
          <p className="text-sm md:text-base text-sa_muted leading-relaxed mb-5">
            {block.body}
          </p>
          {block.tags && block.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-3 border-t border-sa_line/60">
              {block.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center border border-sa_line/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-sa_muted bg-sa_bg/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      );
    }

    // VIDEO
    if (block.type === "video") {
      return wrapIfLink(
        block.projectId,
        <div
          className={`relative border border-sa_line/70 bg-black ${colClass}`}
        >
          <button className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-white/95 text-[10px] uppercase tracking-[0.16em] text-sa_ink">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            {block.label || "Video"}
          </button>
          <div className="aspect-[9/16] md:aspect-[16/9]">
            <video
              ref={(el) => {
                if (el) videoRefs.current[block.id] = el;
              }}
              src={block.src}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          {block.caption && (
            <p className="px-4 py-3 text-xs text-sa_muted bg-black">
              {block.caption}
            </p>
          )}
        </div>
      );
    }

    // QUOTE / TESTIMONIAL
    if (block.type === "testimonial" || block.type === "hero-quote") {
      return (
        <figure
          className={`border border-sa_line/70 bg-white px-8 py-9 flex flex-col justify-between h-full ${colClass}`}
        >
          <div>
            <p className="text-4xl text-sa_line mb-2 leading-none">“</p>
            <blockquote className="text-sm md:text-base text-sa_ink leading-relaxed">
              {block.quote}
            </blockquote>
          </div>
          <figcaption className="mt-5 text-xs text-sa_muted">
            <span className="block font-medium text-sa_ink">
              {block.name}
            </span>
            {block.role && (
              <span className="block mt-0.5">{block.role}</span>
            )}
          </figcaption>
        </figure>
      );
    }

    return null;
  };

  return (
    <main className="section-padding">
      <div className="container-custom max-w-6xl">
        {/* Intro */}
        <section className="mb-14 text-center">
          <p className="uppercase tracking-[0.25em] text-[11px] text-sa_muted mb-3">
            Our latest in
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            {intro?.title || "Designing Homes That Hold Stories"}
          </h1>
          <p className="body-large text-sa_muted max-w-2xl mx-auto">
            {intro?.subtitle}
          </p>
        </section>

        {/* Hero */}
        {heroBlocks.map((block) => (
          <figure
            key={block.id}
            className="mb-16 border border-sa_line/70 bg-white"
          >
            <div className="aspect-[21/9] w-full">
              <img
                src={block.src}
                alt={block.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </figure>
        ))}

        {/* Alternating rows, non 50/50 */}
        <section className="space-y-12">
          {rows.map((row, rowIndex) => {
            const [first, second] = row;
            const isEven = rowIndex % 2 === 0;

            return (
              <div
                key={rowIndex}
                className="grid md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] gap-6 md:gap-10 items-stretch"
              >
                {isEven ? (
                  <>
                    {renderBlock(first, false)}
                    {renderBlock(second, true)}
                  </>
                ) : (
                  <>
                    {renderBlock(second, false)}
                    {renderBlock(first, true)}
                  </>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Projects;
