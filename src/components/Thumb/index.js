import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({
  name,
  liveUrl,
  image,
  clickable,
  text,
  facebookLink,
  twitterLink,
  youtubeLink,
  instagramLink,
  webLink,
}) => (
  <div>
    {clickable ? (
      <Link
        to={`/watch?name=${name}&liveUrl=${encodeURIComponent(
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
        )}&webLink=${encodeURIComponent(webLink)}`}
      >
        <Image src={image} alt="channel-thumb" />
      </Link>
    ) : (
      <a href={image} target="_blank" rel="noreferrer noopener">
        <Image src={image} alt="channel-thumb" />
      </a>
    )}
    <h4
      className="mt-3"
      style={{
        fontSize: "1.25em",
        color: "white",
      }}
    >
      {name}
    </h4>
    <p
      style={{
        whiteSpace: "pre",
      }}
    >
      {text}
    </p>
  </div>
);

Thumb.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  liveUrl: PropTypes.string,
  text: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Thumb;
