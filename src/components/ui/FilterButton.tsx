/**
 * FilterButton.tsx
 * Toggle button used in the Projects section to filter by domain.
 * Active state is controlled by the parent — this component is stateless.
 *
 * Usage:
 * <FilterButton label="Frontend" active={active === 'frontend'} onClick={() => setActive('frontend')} />
 */

import { cn } from '../../utils/cn'

interface FilterButtonProps {
  label: string
  active: boolean
  onClick: () => void
}

export default function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'font-mono text-[11px] tracking-[0.08em] uppercase px-4 py-2 rounded-sm border transition-all duration-200',
        active
          ? 'bg-[#1a1612] text-[#f7f4ef] border-[#1a1612]'
          : 'bg-transparent text-[#8a7d6e] border-black/10 hover:border-black/30 hover:text-[#1a1612]'
      )}
    >
      {label}
    </button>
  )
}