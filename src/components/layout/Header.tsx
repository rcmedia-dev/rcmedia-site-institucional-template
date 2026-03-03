'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { navLinks, siteConfig } from '@/lib/constants'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                        {siteConfig.name}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:items-center md:gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button size="sm">Fale Conosco</Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="border-t py-4 md:hidden">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button size="sm" className="w-full">
                                Fale Conosco
                            </Button>
                        </div>
                    </nav>
                )}
            </Container>
        </header>
    )
}
