export interface NavLink {
    href: string
    label: string
}

export interface SiteConfig {
    name: string
    description: string
    url: string
}

export interface ServiceItem {
    icon: string
    title: string
    description: string
}

export interface Author {
    name: string
    picture: {
        url: string
    }
}

export interface Post {
    id: string
    title: string
    slug: string
    excerpt: string
    content: {
        html: string
    }
    date: string
    coverImage: {
        url: string
    }
    author: Author
    categories: {
        name: string
        slug: string
    }[]
}
