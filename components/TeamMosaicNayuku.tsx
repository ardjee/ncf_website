"use client";

import Image from 'next/image';

type Person = {
  id: string;
  role: string;
  seed: number;
};

const team: Person[] = [
  { id: "1", role: "Country Director", seed: 11 },
  { id: "2", role: "Operations", seed: 22 },
  { id: "3", role: "CFO", seed: 33 },
  { id: "4", role: "Asset Management", seed: 44 },
  { id: "5", role: "CEO", seed: 55 },
  { id: "6", role: "Head of Operation", seed: 66 },
  { id: "7", role: "Hatchery", seed: 77 },
  { id: "8", role: "Teamlead Cage Feeding", seed: 88 },
  { id: "9", role: "Sales", seed: 99 },
  { id: "10", role: "Financial Oversight", seed: 101 },
  { id: "11", role: "Team Leader Production", seed: 111 },
  { id: "12", role: "Feed", seed: 121 },
  { id: "13", role: "Nutrition", seed: 131 },
  { id: "14", role: "Branding", seed: 141 },
  { id: "15", role: "Strategic Partnerships", seed: 151 },
  { id: "16", role: "Investor", seed: 161 },
  { id: "17", role: "Community Manager", seed: 171 },
  { id: "18", role: "Sustainability", seed: 181 },
  { id: "19", role: "Head of Security", seed: 191 },
  { id: "20", role: "Investor", seed: 201 },
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
    <section className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-medium tracking-tight">Our People</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            The people that power our operation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((p) => {
            const muted = svgToDataUrl(silhouetteSvg(p.seed));
            const color = svgToDataUrl(corporateColorSvg(p.seed));
            const isJustine = p.id === "1"; // Country Director role
            const isIvan = p.id === "3"; // CFO role
            const isDavid = p.id === "6"; // Head of Operation role
            const isJulius = p.id === "11"; // Team Leader Production role
            const isRJ = p.id === "5"; // CEO role
            const isBonn = p.id === "9"; // Sales role
            const isHarry = p.id === "2"; // Operations role
            const isBob = p.id === "4"; // Asset Management role
            const isKlaas = p.id === "7"; // Hatchery role
            const isBenja = p.id === "8"; // Teamlead Cage Feeding role
            const isKees = p.id === "12"; // Feed role
            const isHenri = p.id === "10"; // Financial Oversight role
            const isWilco = p.id === "13"; // Nutrition role
            const isKrijn = p.id === "14"; // Branding role
            const isRolf = p.id === "15"; // Strategic Partnerships role
            const isMarton = p.id === "16"; // Investor role
            const isChairman = p.id === "17"; // Community Manager role
            const isHilbrandt = p.id === "18"; // Sustainability role
            const isMuku = p.id === "19"; // Head of Security role
            const isMichel = p.id === "20"; // Investor role

            return (
              <div
                key={p.id}
                className={[
                  "group relative overflow-hidden rounded-2xl",
                  "bg-zinc-100 ring-1 ring-inset ring-black/5",
                  "aspect-[4/5]",
                ].join(" ")}
              >
                {isJustine ? (
                  <>
                    <Image
                      src="/images/justine.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isIvan ? (
                  <>
                    <Image
                      src="/images/ivan_ncf.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isDavid ? (
                  <>
                    <Image
                      src="/images/david.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isJulius ? (
                  <>
                    <Image
                      src="/images/julius.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isRJ ? (
                  <>
                    <Image
                      src="/images/rj.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isBonn ? (
                  <>
                    <Image
                      src="/images/bonnfish.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isHarry ? (
                  <>
                    <Image
                      src="/images/harry.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isBob ? (
                  <>
                    <Image
                      src="/images/bob.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isKlaas ? (
                  <>
                    <Image
                      src="/images/klaas.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isBenja ? (
                  <>
                    <Image
                      src="/images/benja.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isKees ? (
                  <>
                    <Image
                      src="/images/kees.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isHenri ? (
                  <>
                    <Image
                      src="/images/henri.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isWilco ? (
                  <>
                    <Image
                      src="/images/wilco.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isKrijn ? (
                  <>
                    <Image
                      src="/images/krijn.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isRolf ? (
                  <>
                    <Image
                      src="/images/rolf.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isMarton ? (
                  <>
                    <Image
                      src="/images/marton.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isChairman ? (
                  <>
                    <Image
                      src="/images/chairman.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isHilbrandt ? (
                  <>
                    <Image
                      src="/images/hilbrandt.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isMuku ? (
                  <>
                    <Image
                      src="/images/muku.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : isMichel ? (
                  <>
                    <Image
                      src="/images/michel.png"
                      alt={`${p.role} team member`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={muted}
                      alt={`${p.role} team member silhouette`}
                      fill
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:opacity-0 motion-reduce:transition-none"
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
                  </>
                )}

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
