"use client";

import Image from 'next/image';

type Person = {
  id: string;
  role: string;
  seed: number;
};

const team: Person[] = [
  { id: "1", role: "Leadership", seed: 11 },
  { id: "2", role: "Operations", seed: 22 },
  { id: "3", role: "Hatchery", seed: 33 },
  { id: "4", role: "Farm", seed: 44 },
  { id: "5", role: "Quality", seed: 55 },
  { id: "6", role: "Logistics", seed: 66 },
  { id: "7", role: "Sales", seed: 77 },
  { id: "8", role: "Admin", seed: 88 },
  { id: "9", role: "Finance", seed: 99 },
  { id: "10", role: "Maintenance", seed: 101 },
  { id: "11", role: "Security", seed: 111 },
  { id: "12", role: "Feed", seed: 121 },
  { id: "13", role: "Procurement", seed: 131 },
  { id: "14", role: "Community", seed: 141 },
  { id: "15", role: "HR", seed: 151 },
  { id: "16", role: "Sustainability", seed: 161 },
  { id: "17", role: "Training", seed: 171 },
  { id: "18", role: "Compliance", seed: 181 },
  { id: "19", role: "Drivers", seed: 191 },
  { id: "20", role: "Support", seed: 201 },
];

function svgToDataUrl(svg: string) {
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function silhouetteSvg(seed: number) {
  const bg = "#f4f4f5";      // zinc-100-ish
  const shape = "#a1a1aa";   // zinc-400-ish
  const shadow = "#71717a";  // zinc-500-ish
  const r = mulberry32(seed);
  const grain = Math.floor(r() * 10) + 6;

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 ${grain / 100} 0"/>
    </filter>
    <radialGradient id="v" cx="50%" cy="35%" r="85%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.10"/>
    </radialGradient>
  </defs>

  <rect width="800" height="1000" fill="${bg}"/>
  <circle cx="400" cy="340" r="150" fill="${shadow}" opacity="0.12"/>
  <path d="M170 930c22-170 130-290 230-290s208 120 230 290H170z" fill="${shadow}" opacity="0.12"/>

  <circle cx="400" cy="330" r="150" fill="${shape}"/>
  <path d="M170 930c22-170 130-290 230-290s208 120 230 290H170z" fill="${shape}"/>

  <rect width="800" height="1000" fill="url(#v)"/>
  <rect width="800" height="1000" filter="url(#grain)" opacity="0.35"/>
</svg>`;
}

function corporateColorSvg(seed: number) {
  const r = mulberry32(seed);
  const hue = 200 + Math.floor(r() * 25); // blue/teal band (corporate)
  const accent = `hsl(${hue} 28% 55%)`;
  const accent2 = `hsl(${hue + 18} 24% 62%)`;

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${accent2}" stop-opacity="0.70"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.07 0"/>
    </filter>
    <mask id="m">
      <rect width="800" height="1000" fill="black"/>
      <circle cx="400" cy="330" r="150" fill="white"/>
      <path d="M170 930c22-170 130-290 230-290s208 120 230 290H170z" fill="white"/>
    </mask>
  </defs>

  <rect width="800" height="1000" fill="#0b0f14"/> <!-- deep navy-charcoal -->
  <path d="M-50 250 C 180 120, 350 470, 560 320 C 690 225, 780 120, 900 160 L 900 -50 L -50 -50 Z"
        fill="url(#g)" opacity="0.95"/>
  <path d="M-70 740 C 150 560, 380 850, 580 700 C 700 590, 820 540, 920 610 L 920 1100 L -70 1100 Z"
        fill="url(#g)" opacity="0.55"/>

  <!-- apply color only to portrait silhouette -->
  <rect width="800" height="1000" fill="url(#g)" mask="url(#m)" opacity="0.95"/>

  <!-- matte overlay -->
  <rect width="800" height="1000" fill="#000" opacity="0.20"/>
  <rect width="800" height="1000" filter="url(#grain)" opacity="0.9"/>
</svg>`;
}

export default function TeamMosaicNayuku() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-medium tracking-tight">Our People</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            Placeholder silhouettes for now — hover to preview the future portrait style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((p) => {
            const muted = svgToDataUrl(silhouetteSvg(p.seed));
            const color = svgToDataUrl(corporateColorSvg(p.seed));

            return (
              <div
                key={p.id}
                className={[
                  "group relative overflow-hidden rounded-2xl",
                  "bg-zinc-100 ring-1 ring-inset ring-black/5",
                  "aspect-[4/5]",
                ].join(" ")}
              >
                <Image
                  src={muted}
                  alt={`${p.role} team member silhouette`}
                  fill
                  className="object-cover transition-opacity duration-[900ms] ease-out group-hover:opacity-0 motion-reduce:transition-none"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <Image
                  src={color}
                  alt={`${p.role} team member portrait`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-[900ms] ease-out group-hover:opacity-100 motion-reduce:transition-none"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* label appears only on hover (cleaner) */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition duration-[900ms] ease-out group-hover:opacity-100 motion-reduce:transition-none">
                  <div className="rounded-xl bg-white/8 p-3 backdrop-blur-[2px]">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/75">
                      {p.role}
                    </p>
                  </div>
                </div>

                {/* subtle border cue */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

