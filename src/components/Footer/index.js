import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoImg } from "./Footer.styles";

const Footer = () => {

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg
            src="https://jesunmaailma.ml/images/teeveet_logo.png"
            alt="teeveet-logo"
          />
        </Link>
        <a
          href="https://articlepress.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>ArticlePress</span>
        </a>
        <a
          href="https://finnplace.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>FinnPlace</span>
        </a>
        <a
          href="https://thereactmoviedb.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
         <span>React Movie Database</span>
        </a>
        <a
          href="https://jesunmaailma.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Jesun Maailma</span>
        </a>
        <p>© 2021 Jesun Maailma</p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
