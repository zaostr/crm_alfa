import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    signIn(user, ()=>navigate(fromPage, {replace: true}));
  }

  return (
    <div>
      <h2>Sign In</h2>
      <p>{fromPage }</p>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
