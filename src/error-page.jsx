import { Link, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {
        error.status === 404 && <div>
          <p>Go Back</p>
          {/* <Link to="/"><button>Home</button></Link> */}
          <button onClick={handleClick}>Home</button>
        </div>
      }
    </div>
  );
}