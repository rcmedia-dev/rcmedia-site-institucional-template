import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const contactInfo = [
    {
        Icon: Mail,
        label: 'E-mail',
        value: 'contato@minhaempresa.com',
    },
    {
        Icon: Phone,
        label: 'Telefone',
        value: '(11) 99999-9999',
    },
    {
        Icon: MapPin,
        label: 'Endereço',
        value: 'São Paulo, SP - Brasil',
    },
]

export function Contact() {
    return (
        <section id="contato" className="py-16 md:py-24 bg-white">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                            Contato
                        </span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Vamos conversar?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Entre em contato conosco e descubra como podemos ajudar o seu negócio a crescer.
                        </p>

                        <ul className="mt-8 space-y-6">
                            {contactInfo.map(({ Icon, label, value }) => (
                                <li key={label} className="flex items-start gap-4">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 flex-shrink-0">
                                        <Icon size={20} className="text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">{label}</p>
                                        <p className="text-gray-900 font-medium">{value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Seu nome"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="seu@email.com"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Como podemos ajudar?"
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Descreva seu projeto ou dúvida..."
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Enviar mensagem
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}
