import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Hero() {
    return (
        <section className="bg-gradient-to-b from-primary-50 to-white py-20 md:py-32">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 mb-6">
                        🚀 Bem-vindo à nossa plataforma
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Soluções inteligentes para o seu{' '}
                        <span className="text-primary-600">negócio</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Oferecemos serviços personalizados para ajudar sua empresa a crescer com tecnologia e inovação. Transformamos ideias em resultados reais.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                        <Button size="lg">
                            Começar agora
                            <ArrowRight size={18} className="ml-2" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Saiba mais
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
