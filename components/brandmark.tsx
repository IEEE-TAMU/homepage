import Image from 'next/image';
import Link from 'next/link';

interface BrandMarkProps {
  /** Size variant for different use cases */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to include the text label */
  showText?: boolean;
  /** Whether the component should be a link to home */
  linkToHome?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function BrandMark({
  size = 'md',
  showText = true,
  linkToHome = true,
  className = '',
}: BrandMarkProps) {
  // Responsive sizing based on variant
  const sizeClasses = {
    sm: {
      logo: 'h-6 w-6 sm:h-8 sm:w-8',
      text: 'text-sm sm:text-base',
      spacing: 'space-x-1.5 sm:space-x-2',
    },
    md: {
      logo: 'h-8 w-8 sm:h-10 sm:w-10',
      text: 'text-base sm:text-xl',
      spacing: 'space-x-2 sm:space-x-2.5',
    },
    lg: {
      logo: 'h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14',
      text: 'text-xl sm:text-2xl md:text-3xl',
      spacing: 'space-x-2 sm:space-x-3',
    },
  };

  const { logo, text, spacing } = sizeClasses[size];

  const content = (
    <div className={`flex items-center ${spacing} ${className}`}>
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/icon.svg"
          alt="IEEE Logo"
          width={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
          height={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
          className={`${logo} text-primary-foreground`}
          priority={linkToHome} // Prioritize loading for navbar
        />
      </div>
      {showText && (
        <span className={`${text} font-bold whitespace-nowrap`}>IEEE TAMU</span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        className="inline-flex hover:opacity-80 transition-opacity"
        aria-label="IEEE TAMU Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
