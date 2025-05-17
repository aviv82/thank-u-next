import "@/styles/global.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found-head">404 Not Found</h2>
      <p>Requested resource was unavailable.</p>
      <Link className="not-found-link" href="/">
        Return Home
      </Link>
    </div>
  );
}
