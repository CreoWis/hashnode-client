import { gql } from "graphql-request";
import { getClient } from "../lib/graphQLClient";

export const publishPost = async (
  input,
  first = 10,
  endCursor = null,
  personalAccessToken
) => {
  const client = getClient(personalAccessToken);

  const data = await client.request(
    gql`
      mutation PublishPost(
        $input: PublishPostInput!
        $first: Int!
        $after: String
      ) {
        publishPost(input: $input) {
          post {
            id
            slug
            title
            subtitle
            author {
              name
              profilePicture
            }
            coAuthors {
              name
              profilePicture
            }
            tags {
              id
              name
              slug
            }
            url
            canonicalUrl
            publication {
              id
              title
              displayTitle
              descriptionSEO
            }
            cuid
            coverImage {
              url
              isPortrait
              attribution
              photographer
              isAttributionHidden
            }
            brief
            readTimeInMinutes
            views
            series {
              id
              name
              createdAt
            }
            reactionCount
            replyCount
            responseCount
            featured
            contributors {
              name
              profilePicture
            }
            commenters(first: $first, after: $after) {
              edges {
                node {
                  id
                  name
                  username
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
              totalDocuments
            }
            comments(first: $first, after: $after) {
              edges {
                node {
                  id
                  totalReactions
                  content {
                    markdown
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
              totalDocuments
            }
            bookmarked
            content {
              text
            }
            likedBy(first: $first, after: $after) {
              totalDocuments
            }
            featuredAt
            publishedAt
            updatedAt
            preferences {
              pinnedToBlog
            }
            audioUrls {
              male
            }
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
            hasLatexInPost
            isFollowed
            isAutoPublishedFromRSS
            features {
              tableOfContents {
                isEnabled
              }
            }
          }
        }
      }
    `,
    {
      first: first,
      after: endCursor,
      input: input,
    }
  );

  return data?.publishPost?.post;
};
