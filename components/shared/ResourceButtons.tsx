'use client'

interface ResourceButtonProps {
  label: string
  variant?: 'accent' | 'primary'
}

export function ResourceButton({ label, variant = 'accent' }: ResourceButtonProps) {
  const handleClick = () => {
    // Placeholder for download/request action
  }

  return (
    <button
      onClick={handleClick}
      className={`text-sm font-sans font-semibold transition-colors ${
        variant === 'accent' 
          ? 'text-accent hover:text-accent/80' 
          : 'text-primary hover:text-secondary'
      }`}
    >
      {label}
    </button>
  )
}
