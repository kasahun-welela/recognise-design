import React from "react";

function ErrorPage() {
  return (
    <div className="mt-28 flex flex-col justify-center items-center gap-4">
      <h1 className="text-blue-600 font-bold text-5xl">Oops!</h1>
      <h2 className="font-bold text-2xl">404 -page Not found</h2>
      <p className="text-xl text-center">
        The page you are looking for might have been removed had it name changed
        or is temporarily unavailable
      </p>
      <a
        className="text-center text-white font-bold bg-blue-600 px-8 py-3 rounded-3xl "
        href="/"
      >
        Go to HomePage
      </a>
    </div>
  );
}

export default ErrorPage;
