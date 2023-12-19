import { gql } from "graphql-request";
import { getClient } from "../lib/graphQLClient";

export const getAllPosts = async (host, first=10, endCursor, tags) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query allPosts($first: Int!, $host: String, $endCursor: String, $tags: [ObjectId!]) {
        publication(host: $host) {
          title
          posts(first: $first, after: $endCursor, filter:{tags: $tags}) {
            totalDocuments
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                author{
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
                replyCount
                reactionCount
                featuredAt
                featured
              }
            }
          }
        }
      }
    `,
    { 
      first: first,
      host: host,
      endCursor: endCursor,
      tags: tags,
     }
  );

  return data?.publication?.posts;
};

export const getPost = async (host, slug) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query postDetails($host: String, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author{
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content{
              html
            }
            tags {
              name
              slug
              id
            }
            coverImage {
              url
            }
            replyCount
            reactionCount
            featuredAt
            featured
          }
        }
      }
    `,
    { 
      host: host,
      slug: slug 
    }
  );
      
  return data?.publication?.post;
};

export const getPage = async (host, slug) => {
  const client = getClient();

  const page = await client.request(
    gql`
      query pageData($host: String, $slug: String!) {
        publication(host: $host) {
          staticPage(slug: $slug) {
            title
            content {
              html
            }
          }
          title
        }
      }
    `,
    { 
      host: host,
      slug: slug 
    }
  );

  return page?.publication?.staticPage;
};

export const getComments = async (host, slug, first=10, endCursor) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query allPosts($first: Int!, $host: String, $slug: String, $endCursor: String) {
        publication(host: $host) {
          post(slug: $slug) {
            comments(first: $first, after: $endCursor){
              pageInfo{
                hasNextPage
                endCursor
              }
              totalDocuments
              edges{
                node{
                  dateAdded
                  author {
                    name
                    profilePicture
                  }
                  content{
                    html
                  }
                  totalReactions
                  myTotalReactions
                  stamp
                }
              }
            }
                  
          }
        }
      }
    `,
    { 
      first: first,
      slug: slug,
      host: host,
      endCursor: endCursor
     }
  );

  return data?.publication?.posts?.comments;
};