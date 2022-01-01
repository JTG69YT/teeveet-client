import React from "react";
import { Link } from "react-router-dom";
import { version } from "../../../package.json"

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
          href="https://reactvideostream.ml"
          target="_blank"
          rel="noreferrer noopener"
          >
         <span>VideoStream</span>
        </a>
        <a
          href="https://finnplace.ml/jesun-maailma-tili"
          target="_blank"
          rel="noreferrer noopener"
          >
          <span>Jesun Maailma -tili</span>
        </a>
        <p>© 2022 Jesun Maailma</p>
        <h5>Sovelluksen versio: {version}</h5>
      </Content>
    </Wrapper>
  );
};

export default Footer;
