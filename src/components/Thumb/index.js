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
        to={`/katso-kanavaa?name=${name}&liveUrl=${liveUrl}&imageUrl=${image}&description=${text}&facebookLink=${facebookLink}&twitterLink=${twitterLink}&youtubeLink=${youtubeLink}&instagramLink=${instagramLink}&webLink=${webLink}`}
      >
        <Image
          src={image}
          alt="channel-thumb"
          style={{ borderRadius: "16px" }}
        />
      </Link>
    ) : (
      <a href={image} target="_blank" rel="noreferrer noopener">
        <Image
          src={image}
          alt="channel-thumb"
          style={{ borderRadius: "16px" }}
        />
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
    <p>{text}</p>
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
