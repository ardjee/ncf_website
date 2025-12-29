import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  /**
   * Width of the logo in pixels
   * @default 180
   */
  width?: number
  /**
   * Height of the logo in pixels
   * @default 180
   */
  height?: number
  /**
   * Whether the logo should be a link to home
   * @default true
   */
  linkToHome?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Whether to show text alongside the logo
   * @default false
   */
  showText?: boolean
  /**
   * Text size variant
   * @default "default"
   */
  textSize?: 'small' | 'default' | 'large'
}

export default function Logo({
  width = 180,
  height = 180,
  linkToHome = true,
  className = '',
  showText = false,
  textSize = 'default',
}: LogoProps) {
  const textSizeClasses = {
    small: 'text-sm',
    default: 'text-base',
    large: 'text-lg',
  }

  const logoImage = (
    <Image
      src="/images/cropped-logo_ncf-1-180x180.png"
      alt="Nayuku Cage Fishing Logo"
      width={width}
      height={height}
      className={showText ? '' : className}
      priority={linkToHome} // Priority for header logo
    />
  )

  if (showText) {
    const content = (
      <div className={`flex items-center gap-3 ${className}`}>
        {logoImage}
        <span className={`font-semibold text-charcoal ${textSizeClasses[textSize]}`}>
          Nayuku Cage Fishing
        </span>
      </div>
    )
    
    if (linkToHome) {
      return (
        <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
          {content}
        </Link>
      )
    }
    return content
  }

  // showText is false
  if (linkToHome) {
    return (
      <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
        {logoImage}
      </Link>
    )
  }

  return logoImage
}

