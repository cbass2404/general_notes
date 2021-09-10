Using TypeScript with Next.js (Updated)
How to set up TypeScript in a Next.js Project
The best place to find the information about setting up TypeScript is the documentation: https://nextjs.org/docs/basic-features/typescript

Creating a basic page
You don't need to do anything special to create a simple page:

```js
const MyPage = () => {
  return <div>Hello World!</div>;
};

export default MyPage;
```

Resources

[Next.js pages documentation](https://nextjs.org/docs/basic-features/pages)

How to type a custom App component
The following example is taken from the original documentation (https://nextjs.org/docs/basic-features/typescript#custom-app):

```js
// import App from "next/app";
import type { AppProps /_, AppContext _/ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
// // calls page's `getInitialProps` and fills `appProps.pageProps`
// const appProps = await App.getInitialProps(appContext);

// return { ...appProps }
// }

export default MyApp
```

Resources

[Custom App documentation](https://nextjs.org/docs/advanced-features/custom-app)

getServerSideProps
Basic usage:

```js
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { name: "John" } };
};

const MyPage = () => {
  return <div>Hello World!</div>;
};

export default MyPage;
```

To infer the props returned by getServerSideProps:

```js
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  return { props: { name: "John" } };
};

type MyPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const MyPage = (props: MyPageProps) => {
  return <div>Hello, {props.name}!</div>;
};

export default MyPage;
```

However, if you need to use the getServerSideProps' arguments, you can do the following:

```js
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface ServerSideProps {
  name: string;
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  // Use the context argument somehow.
  return { props: { name: "John" } };
};

type MyPageProps = ServerSideProps;
// You can still infer the server side props:
// type MyPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const MyPage = (props: MyPageProps) => {
  return <div>Hello, {props.name}!</div>;
};

export default MyPage;
```

Resources

[getServerSideProps documentation](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)

getStaticProps
Basic usage:

```js
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const MyPage = () => {
  return <div>Hello, World!</div>;
};

export default MyPage;
```

To infer the props of getStaticProps:

```js
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  return { props: { name: "Jack" } };
};

const MyPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>Hello, {props.name}!</div>;
};

export default MyPage;
```

If you need to use the arguments of getStaticProps:

```js
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface StaticProps {
  name: string;
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  // Use the context argument somehow.
  return { props: { name: "Jack" } };
};

type MyPageProps = StaticProps;
// You can still infer the static props like this:
// type MyPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const MyPage = (props: MyPageProps) => {
  return <div>Hello, {props.name}!</div>;
};

export default MyPage;
```

Resources

[getStaticProps documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

getStaticPaths

```js
import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
return {
paths: [
// ...
],
fallback: // ...
};
};
```

Resources

[getStaticPaths documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

getInitialProps

```js
import { NextPage } from "next";

interface InitialProps {
  userAgent?: string;
}

interface PageProps extends InitialProps {
  propThatBelongsToThePageOnly: boolean;
}

const MyPage: NextPage<PageProps, InitialProps> = ({
  userAgent,
  propThatBelongsToThePageOnly,
}) => {
  return propThatBelongsToThePageOnly ? (
    <div>Your user agent: {userAgent}</div>
  ) : null;
};

MyPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default MyPage;
```

Resources

[getInitialProps documentation](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

Reading a route parameter

```js
// Example: you expect an integer id in pages/[id].tsx
// One of the ways of handling this.

import Error from "next/error";

const MyPage = () => {
  const router = useRouter();
  const id =
    typeof router.query.id === "string" ? parseInt(router.query.id, 10) : NaN;

  // if (!id) {
  if (isNaN(id) || id < 1) {
    // id is not a number.
    return <Error statusCode={404} />;
  }

  return <div>Hello World!</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id =
    typeof context.params?.id === "string"
      ? parseInt(context.params.id, 10)
      : NaN;

  if (id) {
    // Do something.
  }

  return { props: {} };
};

export default MyPage;
```

Resources

[Dynamic routes documentation](https://nextjs.org/docs/routing/dynamic-routes)

Declaring .env variables
You can create a _.d.ts_ file in the project's root for declaring env variables.

```js
// env.d.ts
namespace NodeJS {
interface ProcessEnv {
NEXT_PUBLIC_API_URL: string;
}
}
```

Resources

[Next.js environment variables documentation](https://nextjs.org/docs/basic-features/environment-variables)

API Routes
Basic usage:

```js
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
name: string;
}

export default (\_req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
res.status(200).json({ name: 'John' });
};
```

Using NextApiHandler type:

```js
import type { NextApiHandler } from 'next';

interface ResponseData {
name: string;
}

const apiRouteHandler: NextApiHandler<ResponseData> = (\_req, res) => {
res.status(200).json({ name: 'John' });
};

export default apiRouteHandler;
```

Resources

[API Routes documentation](https://nextjs.org/docs/api-routes/introduction)
