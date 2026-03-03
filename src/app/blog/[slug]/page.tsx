import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { hygraph, GET_POST_BY_SLUG } from '@/lib/hygraph'
import { Post } from '@/types'

interface PostPageProps {
    params: {
        slug: string
    }
}

export const revalidate = 3600

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { post } = await hygraph.request<{ post: Post }>(GET_POST_BY_SLUG, {
        slug: params.slug,
    })

    if (!post) return {}

    return {
        title: post.title,
        description: post.excerpt,
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const { post } = await hygraph.request<{ post: Post }>(GET_POST_BY_SLUG, {
        slug: params.slug,
    })

    if (!post) notFound()

    return (
        <article className="py-16 md:py-24">
            <Container className="max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 mb-8 transition-colors"
                >
                    <ChevronLeft size={16} className="mr-1" />
                    Voltar para o blog
                </Link>

                <header className="mb-12">
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
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-8 italic">
                        {post.excerpt}
                    </p>

                    <div className="mt-8 flex items-center gap-x-4">
                        <Image
                            src={post.author.picture.url}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="rounded-full bg-gray-100"
                        />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">{post.author.name}</p>
                            <p className="text-gray-500 text-xs">Autor</p>
                        </div>
                    </div>
                </header>

                <div className="relative aspect-[16/9] w-full mb-12 overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div
                    className="prose prose-lg prose-primary max-w-none prose-headings:font-bold prose-a:text-primary-600 hover:prose-a:text-primary-700"
                    dangerouslySetInnerHTML={{ __html: post.content.html }}
                />
            </Container>
        </article>
    )
}
