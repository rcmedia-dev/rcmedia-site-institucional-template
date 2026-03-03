import { CheckCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const highlights = [
    'Mais de 10 anos de experiência no mercado',
    'Equipe de especialistas dedicados',
    'Soluções personalizadas para cada cliente',
    'Suporte contínuo e parceria a longo prazo',
]

export function About() {
    return (
        <section id="sobre" className="py-16 md:py-24 bg-white">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                            Sobre nós
                        </span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Transformamos ideias em realidade
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Somos uma empresa dedicada a transformar ideias em realidade. Com anos de experiência no mercado, entregamos soluções de alta qualidade que atendem às necessidades específicas de cada cliente.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Nossa equipe é formada por profissionais apaixonados pelo que fazem, sempre em busca da excelência e inovação.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <div className="text-center p-8">
                            <div className="text-6xl font-bold text-primary-600">10+</div>
                            <div className="text-xl font-semibold text-primary-800 mt-2">Anos de experiência</div>
                            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-primary-700">200+</div>
                                    <div className="text-sm text-primary-600">Clientes satisfeitos</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary-700">500+</div>
                                    <div className="text-sm text-primary-600">Projetos entregues</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
