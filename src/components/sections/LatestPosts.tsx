import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { hygraph, GET_LATEST_POSTS } from '@/lib/hygraph'
import { Post } from '@/types'

export async function LatestPosts() {
    const { posts } = await hygraph.request<{ posts: Post[] }>(GET_LATEST_POSTS)

    if (!posts || posts.length === 0) return null

    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                            Blog
                        </span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Últimas do nosso blog
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Fique por dentro das novidades, tendências e dicas de especialistas.
                        </p>
                    </div>
                    <Button variant="outline" className="mt-6 md:mt-0" asChild>
                        <Link href="/blog">
                            Ver todos os posts
                            <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="group relative flex flex-col items-start">
                            <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-2xl bg-gray-100">
                                <Image
                                    src={post.coverImage.url}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex items-center gap-x-4 text-xs mb-4">
                                <time dateTime={post.date} className="text-gray-500">
                                    {new Date(post.date).toLocaleDateString('pt-BR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </time>
                            </div>
                            <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-primary-600 transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
                                {post.excerpt}
                            </p>
                            <div className="mt-6 flex items-center gap-x-3 text-sm leading-6 text-gray-900 border-t pt-4 w-full">
                                <Image
                                    src={post.author.picture.url}
                                    alt={post.author.name}
                                    width={24}
                                    height={24}
                                    className="rounded-full bg-gray-100"
                                />
                                <span className="font-semibold">{post.author.name}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    )
}
