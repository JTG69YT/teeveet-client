import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({
  channelId,
  name,
  image,
  clickable,
  description,
}) => (
  <div>
    {clickable ? (
      <Link
        to={`/channel/${channelId}`}
      >
        <Image src={image} alt="channel-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="channel-thumb" />
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
      {description}
    </p>
  </div>
);

Thumb.propTypes = {
  channelId: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Thumb;
