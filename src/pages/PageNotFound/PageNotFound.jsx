export default function PageNotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-transparent py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-semibold text-[#278afc8a]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#d6d6d6] sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-[#b0b0b0]">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="/"
              className="rounded-md bg-[#2286f88a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0077ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
