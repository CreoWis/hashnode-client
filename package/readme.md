# hashnode-client

`hashnode-client` is a community-driven Open Source Project provides APIs to interact with the `Headless Hashnode` from any `ReactJS` based applications. It means, you can use the APIs from ReactJS, Next.js, Gatsby, and with many more libraries and frameworks to build your blog front-end.

## Installation Instructions

You can download the package using
`npm i hashnode-client`
or
`yarn hashnode-client`

## How to use

To use the library, you need to import it into your project.

`import { ... } from  "hashnode-client"`

Note: If you are using NextJS please use this library in client component only as it uses useEffect and useState behind the scenes.

## hashnode-client API documentation

These Library provides for hooks at the moment:
`useHashnodePosts,
useHashnodePostDetails,
useHashnodePage,
useHashnodeComments`

Which you can import using :
`
import { useHashnodePosts, useHashnodePostDetails} from  "hashnode-client"`
`
Lets Talk about each one in details:

#### 1. useHashnodePosts

This is use to fetch all the published post from the your hashnode profile.
You can call it using:

`const { loading, error, pageInfo, totalDocs, posts, loadMorePost} = useHashnodePosts({host, first, endCursor, tags});`

Inputs Taken:

1. host (compulsory): Here you need to provide the hashnode url of your blog. For example `https://blog.greenroots.info/`;
2. first (optional) : Here you need to write the number of post you want to fetch at a time. (Hashnode at the moment only allows 20 post at max.)
3. endCursor (optional) : This signifies the position of the last post that you have fetch till. It is provided by hashnode.
4. tags : This is the tag id that you want to fetch the post regarding.

Output Given:

1. loading: Indicates whether the data fetching is ongoing or completed
2. error: Provides info about an error occurred while fetching data.
3. pageInfo: Provides an object with keys: hasNextPage (tells whether more posts are available) and endCursor (the position of latest post).
4. totalDocs: Gives the total number of post in the hashnode publication
5. posts: An array of nodes that contain summary information about each post fetched.
6. loadMorePost: A function load more posts from the hashnode publication.

#### 2. useHashnodeDetails

This is use to fetch all the details of a particular post.
You can call it using:

`const { post, error, loading } =  useHashnodePostDetails({host: host, slug: slug});`

Inputs Taken:

1. host (compulsory): Here you need to provide the hashnode url of your blog. For example `https://blog.greenroots.info/`;
2. slug (compulsory): Here you need to provide the post id whose data you want to fetch.

Output Given:

1. loading: Indicates whether the data fetching is ongoing or completed
2. error: Provides info about an error occurred while fetching data.
3. post: An object that has complete details of your post that you have fetched.

## hashnode-client playground(demo)

We have build a demo project called hashnode-diaries that uses the two hooks that we have mentioned above. Its a simple project that will take the url of your publication and fetch data from hashnode and demo ur project. You can run it locally and get an feel of how to use the package in a way that is beneficial to your project.

## How to build the hashnode-client package?

You can build the project using yarn build.
`yarn build`
or
`npm run build`

## How to test the hashnode-client package locally?

You can do
`yarn build`
`yarn create-tar

`<TO CREATE THE TAR DIRECTORY AND HOW HOW TO BUILD THE TAR AND HOW CAN USE IN THE HASNODE DIARIES OR ANY OTHER REACT PROJECT>`

## How to contribute to the hashnode-client project?

`<LEAVE THIS FOR ME>`
