import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <h1>Keep Fit</h1>
        </Link>
      </div>
    </header>
  )
}

