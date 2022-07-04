import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({
  channelId,
  image,
  title,
  description
}) => (
  <Link
    to={`/channel/${channelId}`}
  >
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{description}</p>
        </Text>
      </Content>
    </Wrapper>
  </Link>
);

HeroImage.propTypes = {
  channelId: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default HeroImage;
