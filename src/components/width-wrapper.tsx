export function WidthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 md:px-12">
      {children}
    </div>
  )
}
