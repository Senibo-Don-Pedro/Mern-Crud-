import { useState } from "react"
import { useLogin} from "../hooks/useLogin"


export const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    await login(email,password)
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

      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  )

}
