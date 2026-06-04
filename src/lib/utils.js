// Minimal classlist joiner (replaces shadcn's cn from @/lib/utils).
// Accepts strings/falsey values and joins the truthy ones with a space.
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
