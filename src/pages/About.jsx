import React from "react";
import Team from "../components/about/Team";

const About = () => {
  return (
    <main>
      {/* About Hero */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-[1.4fr,1fr] gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-sa_muted mb-4">
              About Studio Strait Arc
            </p>
            <h1 className="heading-1 mb-6">
              Spaces that feel composed, calm, and deeply personal.
            </h1>
            <p className="body-large text-sa_muted mb-4">
              Studio Strait Arc is an interior and architecture practice
              focused on refined details, quiet luxury, and spaces that
              age gracefully.
            </p>
            <p className="text-sm text-sa_muted">
              From intimate residences to crafted hospitality environments,
              every project is treated as a narrative—rooted in your lifestyle,
              enriched with thoughtful geometry, and finished with tactile warmth.
            </p>
          </div>

          <div className="border border-sa_line/70 rounded-xl p-6 bg-white/60">
            <p className="text-xs uppercase tracking-[0.25em] text-sa_muted mb-4">
              Studio Snapshot
            </p>
            <ul className="space-y-3 text-sm text-sa_muted">
              <li>• Interior-led architecture studio based in Bangalore</li>
              <li>• Residential, hospitality, and boutique commercial projects</li>
              <li>• Detail-first, client-centric, story-driven design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-sa_line/70 bg-sa_bg">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="md:w-1/3">
              <h2 className="heading-2 mb-3">Values</h2>
              <p className="text-sm text-sa_muted">
                A framework that quietly guides every drawing, decision, and detail.
              </p>
            </div>
            <div className="md:w-2/3 grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-sa_muted mb-2">
                  Clarity
                </p>
                <p className="text-sm text-sa_ink">
                  Honest plans, clear proportions, and layouts that simply feel right.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-sa_muted mb-2">
                  Warmth
                </p>
                <p className="text-sm text-sa_ink">
                  Material palettes that are tactile, calm, and quietly expressive.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-sa_muted mb-2">
                  Longevity
                </p>
                <p className="text-sm text-sa_ink">
                  Choices that prioritize durability, maintenance, and timelessness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-white border-y border-sa_line/70">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="md:w-1/3">
              <h2 className="heading-2 mb-3">Clients</h2>
              <p className="text-sm text-sa_muted">
                Working with homeowners, founders, and boutique brands who value craft.
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8 text-sm text-sa_muted">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs mb-3 text-sa_muted">
                  Residential
                </p>
                <ul className="space-y-1">
                  <li>Private Homes</li>
                  <li>City Apartments</li>
                  <li>Retreat Villas</li>
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs mb-3 text-sa_muted">
                  Hospitality & Brands
                </p>
                <ul className="space-y-1">
                  <li>Cafés & Boutique F&amp;B</li>
                  <li>Experience-driven Studios</li>
                  <li>Concept Retail Corners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team (your centered Sachitra section) */}
      <Team />
    </main>
  );
};

export default About;
