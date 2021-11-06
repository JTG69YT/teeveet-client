import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text, liveUrl }) => (
  <Link to={`/play-channel?name=${title}&liveUrl=${liveUrl}&imageUrl=${image}&description=${text}`}>
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  </Link>
);

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  liveUrl: PropTypes.string,
};

export default HeroImage;
