# hashnode-client

`hashnode-client` is a community-driven Open Source Project provides APIs to interact with the `Headless Hashnode` from any `ReactJS` based applications. It means, you can use the APIs from ReactJS, Next.js, Gatsby, and with many more libraries and frameworks to build your blog front-end.

## 🏗️ Installation

Use the follwong command to download and install the package as a dependency of your project.

> Please note: You must have Node.js v18.0.0 or higher installed.

```bash
# With NPM
npm install hashnode-client

# With Yarn
yarn add hashnode-client

# With PNPM
pnpm install hashnode-client
```

## 📒 API documentation

The following API methods are available in the package:

| API Method           | Description                                               | Input Parameters                                          | Response                                          |
| -------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| `useHashnodePosts`   | Fetch all the published posts from your Hashnode publication. | - `host` (mandatory): Hashnode publication URL of your blog            | - `loading`: Indicates ongoing or completed data fetching    |
|                      |                                                           | - `first` (optional): Number of posts to fetch at a time. The default value is 10.    | - `error`: Info about any error during data fetching         |
|                      |                                                           | - `endCursor` (optional): Position of the last fetched post | - `pageInfo`: Object with hasNextPage and endCursor information          |
|                      |                                                           | - `tags` (optional): Tag IDs for fetching posts                         | - `totalDocs`: Total number of posts in the Hashnode publication |
|                      |                                                           |                                                           | - `posts`: Array of nodes with post summary information      |
|                      |                                                           |                                                           | - `loadMorePost`: A Function to load more posts in a paginated fashion.               |
| `useHashnodeDetails` | Fetch all the details of a particular post from a publication.               | - `host` (mandatory): Hashnode Publication URL of your blog            | - `loading`: Indicates ongoing or completed data fetching    |
|                      |                                                           | - `slug` (mandatory): Hashnode Post slug                     | - `error`: Info about any error during data fetching         |
|                      |                                                           |                                                           | - `post`: Object with complete details of the fetched post   |
| `useHashnodePage` | Fetch the content of a static page from a publication.               | - `host` (mandatory): Hashnode Publication URL of your blog            | - `loading`: Indicates ongoing or completed data fetching    |
|                      |                                                           | - `slug` (mandatory): Hashnode page slug                     | - `error`: Info about any error during data fetching         |
|                      |                                                           |                                                           | - `page`: The page content in the HTML format   |


## 🔥 How to use

To use the library, you need to import the API methods into your project.

For example, here we are importing a couple of API methods from the library:

```bash
import { useHashnodePosts, useHashnodePostDetails} from  "hashnode-client"
```

> Note: If you are using NextJS please use this library in client component only as it uses useEffect and useState behind the scenes.

## 🤾‍♀️ hashnode-client playground(demo)

We have built a demo project called `hashnode-diaries` that uses the hooks that we have mentioned above. Its a simple project that will take the url of your publication and fetch data from hashnode and demo ur project. You can run it locally and get an feel of how to use the package in a way that is beneficial to your project.



## 🛠️ How to build the hashnode-client package?

You can build the project using the following command.

```bash
## With NPM
npm run build

## With YARN
yarn build

```

You can build the project using the following command.

```bash
## With NPM
npm run build:dev

## With YARN
yarn build:dev

```

## 🎢 How to test the hashnode-client package locally?

Once you have built the project using the above command, you need to create a package locally to start testing.

To create the package locally,

- Create a directory called `tar` at the root of the `package` folder.
- Execute the following command to create the tar package.

```bash
## With NPM
npm run create-tar

## With YARN
yarn create-tar

```

- The above command will create a tar package inside the `tar` folder.
- You can install the tar package into your project using the follwing command:

```bash
## With NPM
npm install file:<PATH-TO-THE-TAR-FILE>

## With YARN
yarn file:<PATH-TO-THE-TAR-FILE>

```

## 💁 How to contribute to the hashnode-client project?

`<LEAVE THIS FOR ME>`
