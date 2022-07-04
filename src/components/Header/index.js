import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg
            src="https://jesunmaailma.ml/images/teeveet.svg"
            alt="teeveet-logo"
          />
        </Link>
        {currentUser ? (
          <Link to={`/account`}>
            <span>Tili</span>
          </Link>
        ) : (
          <Link to={`/login?redirect_to=/`}>
            <span>Kirjaudu</span>
          </Link>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
