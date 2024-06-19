import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="mt-28 flex flex-col items-center gap-4">
      <h1 className="text-primary font-bold text-5xl">Oops!</h1>
      <h2 className="font-bold text-2xl">404 -page Not found</h2>
      <p className="text-xl text-center">
        The page you are looking for might have been removed had it name changed
        or is temporarily unavailable
      </p>
      <Link
        className="text-center text-white font-bold bg-primary px-8 py-3 rounded-3xl hover:shadow-blue-500/50 "
        to="/"
      >
        Go to HomePage
      </Link>
    </div>
  );
}

export default ErrorPage;
