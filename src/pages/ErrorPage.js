import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>404 page</h1>
      <p>Page not Found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
