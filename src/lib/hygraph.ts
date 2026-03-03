import { GraphQLClient, gql } from 'graphql-request'
import { Post } from '@/types'

const endpoint = process.env.HYGRAPH_ENDPOINT || ''
const token = process.env.HYGRAPH_TOKEN || ''

export const hygraph = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(orderBy: date_DESC) {
      id
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      categories {
        name
        slug
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      content {
        html
      }
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      categories {
        name
        slug
      }
    }
  }
`

export const GET_LATEST_POSTS = gql`
  query GetLatestPosts {
    posts(first: 3, orderBy: date_DESC) {
      id
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
`
