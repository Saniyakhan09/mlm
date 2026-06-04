// Adapted from the shadcn-style "gradient-backgrounds" snippet (TSX → JSX).
// Renders an absolutely-positioned amber-glow gradient background layer.
// Place it as the first child of a `relative` container, with your content
// wrapped in a `relative z-10` element above it.

const GLOW_STYLE = `
  @keyframes amber-pan { 0%,100% { background-position: 50% 0% } 50% { background-position: 50% 32% } }
  .amber-glow-anim { background-size: 140% 170%; animation: amber-pan 14s ease-in-out infinite; }
  @media (prefers-reduced-motion: reduce) { .amber-glow-anim { animation: none } }
`

export function AmberGlow({ animated = false, dark = false, className = '' }) {
  return (
    <>
      {animated && <style>{GLOW_STYLE}</style>}
      <div
        className={`absolute inset-0 z-0 ${animated ? 'amber-glow-anim' : ''} ${className}`}
        style={{
          backgroundImage: dark
            ? 'radial-gradient(125% 125% at 50% 10%, #0b0a12 38%, #b45309 80%, #f59e0b 100%)'
            : 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)',
        }}
      />
    </>
  )
}
