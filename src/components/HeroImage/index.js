import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({
  image,
  title,
  text,
  liveUrl,
  facebookLink,
  twitterLink,
  youtubeLink,
  instagramLink,
  webLink,
}) => (
  <Link
    to={`/watch?name=${encodeURIComponent(
      title
    )}&liveUrl=${encodeURIComponent(
      liveUrl
    )}&imageUrl=${encodeURIComponent(
      image
    )}&description=${text}&facebookLink=${encodeURIComponent(
      facebookLink
    )}&twitterLink=${encodeURIComponent(
      twitterLink
    )}&youtubeLink=${encodeURIComponent(
      youtubeLink
    )}&instagramLink=${encodeURIComponent(
      instagramLink
    )}&webLink=${encodeURIComponent(
      webLink
    )}`}
  >
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
