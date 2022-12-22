import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Error.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}