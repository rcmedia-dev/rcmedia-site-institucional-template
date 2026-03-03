import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { navLinks, siteConfig, socialLinks } from '@/lib/constants'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const socialIcons = [
    { href: socialLinks.facebook, Icon: Facebook, label: 'Facebook' },
    { href: socialLinks.twitter, Icon: Twitter, label: 'Twitter' },
    { href: socialLinks.instagram, Icon: Instagram, label: 'Instagram' },
    { href: socialLinks.linkedin, Icon: Linkedin, label: 'LinkedIn' },
]

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <Container>
                <div className="py-12 grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{siteConfig.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{siteConfig.description}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Navegação</h4>
                        <ul className="mt-4 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Contato</h4>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>contato@minhaempresa.com</li>
                            <li>(11) 99999-9999</li>
                            <li>São Paulo, SP</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Redes Sociais</h4>
                        <div className="mt-4 flex space-x-4">
                            {socialIcons.map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t py-6 text-center text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
                </div>
            </Container>
        </footer>
    )
}
