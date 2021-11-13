import React from "react";
// Components
import { Wrapper, Content, Text } from "./Channel.styles";
import Thumb from "./Thumb";
import ChannelsList from "./ChannelsList";
import Spinner from "./Spinner";
import VideoPlayer from "./VideoPlayer";
import BreadCrumb from "./BreadCrumb";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useChannelFetch } from "../hooks/useChannelFetch";

const Channel = () => {
  const { state: channel, loading, error } = useChannelFetch();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get("name");
  const liveUrl = searchParams.get("liveUrl");
  const desc = searchParams.get("description");
  const imageUrl = searchParams.get("imageUrl");

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Ladataan...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }

  if (error) {
    return (
      <>
        <div>Jotain meni pieleen...</div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{name} - Teeveet</title>
      </Helmet>
      <BreadCrumb title={name} />
      {!loading && <VideoPlayer liveUrl={liveUrl} />}
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
      <ChannelsList header={"Katso lisää TV-kanavia, jos on tylsää"}>
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
