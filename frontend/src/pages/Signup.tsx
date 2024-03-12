import { useState } from "react"
import { useSignup } from "../hooks/useSignup"


export const Signup = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )

}
