import React from "react";
// Components
import { Wrapper, Content, Text } from "./Channel.styles";
import Thumb from "./Thumb";
import ChannelsList from "./ChannelsList";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Hls from "hls.js";
import Plyr from "plyr";

import { useChannelFetch } from "../hooks/useChannelFetch";

const Channel = () => {
  const { state: channel } = useChannelFetch();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get("name");
  const liveUrl = searchParams.get("liveUrl");
  const desc = searchParams.get("description")
  const imageUrl = searchParams.get("imageUrl")

  const loadVideo = () => {
    var video = document.querySelector("#player");

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(liveUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    }
    Plyr.setup(video);
  };

  return (
    <>
      <Helmet>
        <title>{name} - Teeveet</title>
      </Helmet>
      <video
        preload="none"
        id="player"
        autoPlay
        controls
        crossOrigin
        playsInline
        style={{
          width: "100%",
          height: "536px",
          background: "black"
        }}
      ></video>
      {loadVideo()}
      <Wrapper>
        <Content>
          <Thumb
            image={
              imageUrl
                ? imageUrl
                : "https://jesunmaailma.ml/images/no_image.jpg"
            }
          />
          <Text>
            <h1>{name}</h1>
            <p>{desc}</p>
          </Text>
        </Content>
      </Wrapper>
      <ChannelsList header={"Lisää TV-kanavia, jos on tylsää"}>
        {channel.map((channel) => (
          <Thumb
            key={channel.id}
            clickable
            image={
              channel.thumbnail
                ? channel.thumbnail
                : "https://jesunmaailma.ml/images/no_image.jpg"
            }
            liveUrl={channel.live_url}
            name={channel.name}
            text={channel.description}
          />
        ))}
      </ChannelsList>
    </>
  );
};

export default Channel;
