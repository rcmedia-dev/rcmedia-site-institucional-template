import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles =
            'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

        const variants = {
            primary:
                'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
            secondary:
                'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500',
            outline:
                'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
            ghost: 'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500',
        }

        const sizes = {
            sm: 'h-8 px-3 text-sm rounded',
            md: 'h-10 px-4 py-2 rounded-md',
            lg: 'h-12 px-6 rounded-lg text-lg',
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button }
