import "./style.css";

const PageNotFound = () => {
  return (
    <div className="container-page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for does not exist or has been moved. Please
        check the URL and try again.
      </p>
      <a href="/">Go to Homepage</a>
    </div>
  );
};

export default PageNotFound;
