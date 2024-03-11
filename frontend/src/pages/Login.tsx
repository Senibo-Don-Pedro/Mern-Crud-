import { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    console.log(email,password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>

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

      <button>Login</button>
    </form>
  )

}
