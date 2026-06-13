type FishBackgroundVariant = 'solid' | 'outline'
type FishBackgroundPlacement = 'text-left' | 'text-right' | 'ambient'

type FishBackgroundProps = {
  variant?: FishBackgroundVariant
  placement?: FishBackgroundPlacement
}

export default function SubtleFishBackground({
  variant = 'solid',
  placement = 'ambient',
}: FishBackgroundProps) {
  const rightFish = [
    { className: 'fish-route-a top-[12%] left-[46%] w-16' },
    { className: 'fish-route-b top-[27%] left-[68%] w-10' },
    { className: 'fish-route-c top-[49%] left-[52%] w-12' },
    { className: 'fish-route-d top-[70%] left-[75%] w-14' },
    { className: 'fish-route-e top-[36%] left-[38%] w-9' },
  ]

  const leftFish = [
    { className: 'fish-route-f top-[18%] left-[12%] w-11' },
    { className: 'fish-route-g top-[46%] left-[34%] w-14' },
    { className: 'fish-route-h top-[68%] left-[6%] w-9' },
  ]

  const innerLeftFish = [
    { className: 'fish-route-a top-[12%] left-[18%] w-14' },
    { className: 'fish-route-c top-[36%] left-[34%] w-11' },
    { className: 'fish-route-e top-[62%] left-[24%] w-16' },
  ]

  const fishColor = variant === 'outline' ? 'text-water-muted' : 'text-water-deep'
  const fishVariantClass = variant === 'outline' ? 'fish-outline' : ''

  const renderFish = (items: typeof rightFish) =>
    items.map((item, index) => (
      <svg
        key={index}
        viewBox="0 0 120 54"
        className={`fish-drift ${fishVariantClass} absolute h-auto ${fishColor} ${item.className}`}
        fill="none"
      >
        {variant === 'outline' ? (
          <>
            <path
              d="M37 27C48 10 76 8 101 27C76 46 48 44 37 27Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4.5"
            />
            <path
              d="M37 27L14 12C18 23 18 31 14 42L37 27Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4.5"
            />
            <circle cx="88" cy="23" r="2.5" fill="currentColor" opacity="0.35" />
          </>
        ) : (
          <>
            <path
              d="M37 27C48 10 76 8 101 27C76 46 48 44 37 27Z"
              fill="currentColor"
            />
            <path
              d="M37 27L14 12C18 23 18 31 14 42L37 27Z"
              fill="currentColor"
            />
            <circle cx="88" cy="23" r="2.5" fill="white" opacity="0.55" />
          </>
        )}
      </svg>
    ))

  return (
    <>
      {placement === 'text-left' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 left-1/2 z-0 hidden overflow-hidden md:block"
        >
          {renderFish(rightFish)}
        </div>
      )}
      {placement === 'text-right' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 right-[42%] z-0 hidden overflow-hidden md:block"
        >
          {renderFish(innerLeftFish)}
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 right-[calc(50%+36rem)] z-0 hidden overflow-hidden xl:block"
      >
        {renderFish(leftFish)}
      </div>
      {placement === 'ambient' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 left-[calc(50%+36rem)] z-0 hidden overflow-hidden xl:block"
        >
          {renderFish(rightFish)}
        </div>
      )}
    </>
  )
}
