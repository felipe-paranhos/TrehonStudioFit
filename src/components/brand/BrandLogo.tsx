type BrandLogoProps = {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/trehon-logo.jpg"
        alt="Trehon Studio Fit"
        className="size-11 rounded-xl object-cover ring-1 ring-white/10"
      />
      {!compact && (
        <div className="leading-tight">
          <p className="text-sm font-bold tracking-[0.16em] text-white">TREHON</p>
          <p className="text-[10px] font-medium tracking-[0.18em] text-zinc-500">STUDIO FIT</p>
        </div>
      )}
    </div>
  )
}
