import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Ei löytynyt - React Movie Database</title>
            </Helmet>
            <div>
                Ei löytynyt ☹.
            </div>
        </>
    )
}
export default NotFound;
