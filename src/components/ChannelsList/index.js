import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content } from "./ChannelsList.styles";

const ChannelsList = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

ChannelsList.propTypes = {
  header: PropTypes.string,
};

export default ChannelsList;
