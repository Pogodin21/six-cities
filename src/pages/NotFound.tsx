import React from "react";
import { Link } from "react-router-dom";
import { Header } from '../components/header';


function NotFoundPage () {
  return (
    <React.Fragment>
      <Header/>
      <h1>404 Not Found</h1>
      <Link to="/">
        <button>Вернуться на главную</button>
      </Link>
    </React.Fragment>
  )

}

export default NotFoundPage;