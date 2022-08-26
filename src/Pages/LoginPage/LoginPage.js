import { useNavigate, useLocation } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
