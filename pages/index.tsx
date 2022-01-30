import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="https://nextjs.org/docs"
            className="card w-96 rounded-xl border text-left hover:text-blue-600 focus:text-blue-600"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">
                Documentation &rarr;
              </h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </div>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="card w-96 rounded-xl border text-left hover:text-blue-600 focus:text-blue-600"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">
                Documentation &rarr;
              </h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </div>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="card w-96 rounded-xl border text-left hover:text-blue-600 focus:text-blue-600"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">
                Documentation &rarr;
              </h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </div>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="card w-96 rounded-xl border text-left hover:text-blue-600 focus:text-blue-600"
          >
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">
                Documentation &rarr;
              </h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </div>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  );
}
