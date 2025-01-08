import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const widthWrapperVariants = cva(
  'mx-auto w-full max-w-[1440px] px-3 md:px-12 ',
  {
    variants: {
      margin: {
        default: 'py-12 md:py-24',
        none: 'py-0',
      },
    },
    defaultVariants: {
      margin: 'default',
    },
  },
)

type WidthWrapperProps = {
  children: React.ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof widthWrapperVariants>

export function WidthWrapper({
  children,
  className,
  margin,
}: WidthWrapperProps) {
  return (
    <div className={widthWrapperVariants({ className, margin })}>
      {children}
    </div>
  )
}
