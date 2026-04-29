/**
 * Tag.tsx
 * Small monospaced label used for tech stack tags on project cards.
 * Kept as a component so tag styling is consistent everywhere
 * and only needs updating in one place.
 *
 * Usage:
 * <Tag label="TypeScript" />
 */

interface TagProps {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="font-mono text-[10px] tracking-wide px-2 py-1 bg-[#f0ece4] rounded-sm text-[#8a7d6e]">
      {label}
    </span>
  )
}