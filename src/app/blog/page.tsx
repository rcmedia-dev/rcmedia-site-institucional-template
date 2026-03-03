import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { hygraph, GET_ALL_POSTS } from '@/lib/hygraph'
import { Post } from '@/types'

export const revalidate = 3600 // revalidate every hour

export default async function BlogPage() {
    const { posts } = await hygraph.request<{ posts: Post[] }>(GET_ALL_POSTS)

    return (
        <div className="py-16 md:py-24">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Nosso Blog
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Acompanhe as últimas notícias, dicas e novidades sobre tecnologia e negócios.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start">
                            <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-2xl bg-gray-100">
                                <Image
                                    src={post.coverImage.url}
                                    alt={post.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
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
                                {post.categories.map((cat) => (
                                    <span
                                        key={cat.slug}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                                    >
                                        {cat.name}
                                    </span>
                                ))}
                            </div>
                            <div className="group relative">
                                <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-primary-600">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <Image
                                    src={post.author.picture.url}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full bg-gray-100"
                                />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <span className="absolute inset-0" />
                                        {post.author.name}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </div>
    )
}
