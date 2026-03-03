import { Code2, Lightbulb, BarChart3, HeadphonesIcon, Shield, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const services = [
    {
        Icon: Code2,
        title: 'Desenvolvimento Web',
        description: 'Criamos aplicações web modernas e performáticas com as melhores tecnologias do mercado.',
    },
    {
        Icon: Lightbulb,
        title: 'Consultoria Estratégica',
        description: 'Ajudamos a definir a melhor estratégia digital para o crescimento do seu negócio.',
    },
    {
        Icon: BarChart3,
        title: 'Análise de Dados',
        description: 'Transformamos dados em insights valiosos para tomada de decisão mais assertiva.',
    },
    {
        Icon: HeadphonesIcon,
        title: 'Suporte Técnico',
        description: 'Oferecemos suporte especializado 24/7 para garantir a continuidade do seu negócio.',
    },
    {
        Icon: Shield,
        title: 'Segurança Digital',
        description: 'Protegemos seus dados e sistemas com as melhores práticas de segurança da informação.',
    },
    {
        Icon: Zap,
        title: 'Automação de Processos',
        description: 'Automatizamos processos repetitivos para aumentar a produtividade da sua equipe.',
    },
]

export function Services() {
    return (
        <section id="servicos" className="py-16 md:py-24 bg-gray-50">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                        Nossos serviços
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Tudo que você precisa em um só lugar
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Oferecemos uma gama completa de serviços para impulsionar o crescimento do seu negócio.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ Icon, title, description }) => (
                        <div
                            key={title}
                            className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                                <Icon size={24} className="text-primary-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                            <p className="mt-2 text-gray-600">{description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
