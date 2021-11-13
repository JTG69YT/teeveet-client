import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Ei löytynyt - Teeveet</title>
            </Helmet>
            <div>
                Ei löytynyt ☹.
            </div>
        </>
    )
}
export default NotFound;
