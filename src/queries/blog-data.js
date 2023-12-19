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