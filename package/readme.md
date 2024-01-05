# hashnode-client

`hashnode-client` is a community-driven Open Source Project that provides APIs to interact with the `Headless Hashnode` from any `ReactJS` based applications. It means you can use the APIs from ReactJS, Next.js, Gatsby, and many more libraries and frameworks to build your blog front end.

## 🏗️ Installation

Use the following command to download and install the package as a dependency of your project.

> Please note: You must have Node.js v18.0.0 or higher installed.

```bash
# With NPM
npm install hashnode-client@latest

# With Yarn
yarn add hashnode-client@latest

# With PNPM
pnpm install hashnode-client@latest
```

## 📒 API documentation

The following API methods are available in the package:

| API Method            | Description                                                     | Input Parameters                                                                   | Response                                                                       |
| --------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `useHashnodePosts`    | Fetch all the published posts from your Hashnode publication.   | - `host` (mandatory): Hashnode publication URL of your blog                        | - `loading`: Indicates ongoing or completed data fetching                      |
|                       |                                                                 | - `first` (optional): Number of posts to fetch at a time. The default value is 10. | - `error`: Info about any error during data fetching                           |
|                       |                                                                 | - `endCursor` (optional): Position of the last fetched post                        | - `pageInfo`: Object with hasNextPage and endCursor information                |
|                       |                                                                 | - `tags` (optional): Tag IDs for fetching posts                                    | - `totalDocs`: Total number of posts in the Hashnode publication               |
|                       |                                                                 |                                                                                    | - `posts`: Array of nodes with post summary information                        |
|                       |                                                                 |                                                                                    | - `loadMorePost`: A Function to load more posts in a paginated fashion.        |
| `useHashnodeDetails`  | Fetch all the details of a particular post from a publication.  | - `host` (mandatory): Hashnode Publication URL of your blog                        | - `loading`: Indicates ongoing or completed data fetching                      |
|                       |                                                                 | - `slug` (mandatory): Hashnode Post slug                                           | - `error`: Info about any error during data fetching                           |
|                       |                                                                 |                                                                                    | - `post`: Object with complete details of the fetched post                     |
| `useHashnodePage`     | Fetch the content of a static page from a publication.          | - `host` (mandatory): Hashnode Publication URL of your blog                        | - `loading`: Indicates ongoing or completed data fetching                      |
|                       |                                                                 | - `slug` (mandatory): Hashnode page slug                                           | - `error`: Info about any error during data fetching                           |
|                       |                                                                 |                                                                                    | - `page`: The page content in the HTML format                                  |
| `useHashnodeComments` | Fetch all the comments and thier respective replies for a post. | - `host` (mandatory): Hashnode publication URL of your blog                        | - `loading`: Indicates ongoing or completed data fetching                      |
|                       |                                                                 | - `first` (optional): Number of posts to fetch at a time. The default value is 10. | - `error`: Info about any error during data fetching                           |
|                       |                                                                 | - `endCursor` (optional): Position of the last fetched post                        | - `pageInfo`: Object with hasNextPage and endCursor information                |
|                       |                                                                 | - `tags` (optional): Tag IDs for fetching posts                                    | - `totalDocs`: Total number of comments in the Hashnode post                   |
|                       |                                                                 |                                                                                    | - `comments`: Array of nodes with comments information                         |
|                       |                                                                 |                                                                                    | - `loadMoreComments`: A Function to load more comments in a paginated fashion. |

## 🔥 How to use

To use the library, you need to first import the API methods into your project.

```js
import {
  useHashnodePosts,
  useHashnodePostDetails,
  useHashnodePage,
  useHashnodeComments,
} from "hashnode-client";
```

Then use them with their input parameters in the React component:

```js
const settings = { host: "blog.greenroots.info" };

const { loading, posts, loadMorePost, pageInfo } = useHashnodePosts(settings);
```

> Note: If you are using NextJS, please use this library in the client component only, as it uses useEffect and useState behind the scenes.

## 🤾‍♀️ hashnode-client playground(demo)

We have built a demo project called `hashnode-diaries` that uses the hooks that we have mentioned above. It's a simple project that will take the URL of your publication and fetch data from hashcode, and demo ur project.

You can [run it locally](../hashcode-diaries/README.md) and get a feel of how to use the package in a way that is beneficial to your project.

## 🛠️ How to build the hashnode-client package?

You can build the project using the following command for the production environment:

```bash
## With NPM
npm run build

## With YARN
yarn build

## With PNPM
pnpm run build

```

In the development environment, none of the source files get minified. You can build the project using the following command for the development environment:

```bash
## With NPM
npm run build:dev

## With YARN
yarn build:dev

## With PNPM
pnpm run build:dev

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

  ## With PNPM
  pnpm run create-tar
  ```

- The above command will create a tar package inside the `tar` folder.
- You can now install the tar package into your project using the following command:

  ```bash
  ## With NPM
  npm install file:<PATH-TO-THE-TAR-FILE>

  ## With YARN
  yarn add file:<PATH-TO-THE-TAR-FILE>

  ## With PNPM
  pnpm run file:<PATH-TO-THE-TAR-FILE>
  ```

## 💁 How do you contribute to the project?

To contribute to the hashnode-client project, please ensure the following:

- You have read the [Contributing Guide](https://github.com/CreoWis/hashnode-client/blob/main/CONTRIBUTING.md) completely.
- You have read and abide by the [Code of Conduct](https://github.com/CreoWis/hashnode-client/blob/main/CODE_OF_CONDUCT.md).
- Feel free to add a feature by [creating a feature request](https://github.com/CreoWis/hashnode-client/issues/new/choose).
- Feel free to fix a bug by [creating a bug-fixing issue](https://github.com/CreoWis/hashnode-client/issues/new/choose).

Note that it is not just about coding contribution. You can also contribute to the following areas:

- Test out the changes.
- Write Tests.
- Improve documentation.
- Write content(blog/video) about the library.
- Help us to socialize hashnode-client.
- Anything else that impacts this project positively.
- Open Source is all about collaboration and proper communication. Let's go.
