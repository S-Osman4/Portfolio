/**
 * Utility for merging Tailwind class names conditionally.
 * Keeps className props clean across components.
 *
 * Usage: cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}