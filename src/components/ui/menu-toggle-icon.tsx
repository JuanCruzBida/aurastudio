import { cn } from "@/lib/utils"

export function MenuToggleIcon({
  open,
  className,
  duration = 300,
}: {
  open: boolean
  className?: string
  duration?: number
}) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div
        className={cn(
          "absolute h-0.5 w-full bg-current transition-all",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1/3 -translate-y-1/2"
        )}
        style={{ transitionDuration: `${duration}ms` }}
      />
      <div
        className={cn(
          "absolute h-0.5 w-full bg-current transition-all",
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1/3 translate-y-1/2"
        )}
        style={{ transitionDuration: `${duration}ms` }}
      />
    </div>
  )
}