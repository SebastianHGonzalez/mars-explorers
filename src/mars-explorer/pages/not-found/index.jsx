import React, { useState, useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";

const NotFound = ({ redirectTo, afterSeconds }) => {
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(redirectTo);
    }, afterSeconds * 1000);

    return () => clearTimeout(timer);
  }, [redirectTo, afterSeconds]);

  if (redirect && afterSeconds) {
    return <Redirect to={redirect} />;
  }

  return (
    <Fragment>
      <h1>404 page not found</h1>
      {redirectTo && afterSeconds && <h2>Redirecting...</h2>}
    </Fragment>
  );
};

export default NotFound;
