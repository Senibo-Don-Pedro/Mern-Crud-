import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

