import React from "react";
// Components
import {
  Wrapper,
  Content,
  Text,
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  Web,
} from "./Channel.styles";
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
  const facebookLink = searchParams.get("facebookLink");
  const twitterLink = searchParams.get("twitterLink");
  const youtubeLink = searchParams.get("youtubeLink");
  const instagramLink = searchParams.get("instagramLink");
  const webLink = searchParams.get("webLink");

  const facebookImg = "https://jesunmaailma.ml/images/fb.png";
  const twitterImg = "https://jesunmaailma.ml/images/twt.png";
  const youtubeImg = "https://jesunmaailma.ml/images/yt.png";
  const instagramImg = "https://jesunmaailma.ml/images/ig.png";
  const webImg = "https://jesunmaailma.ml/images/web.png";

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Ladataan...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>Jotain meni pieleen...</div>
      </>
    );
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
            <div
              className="d-flex align-items-center w-100"
              style={{
                background: "var(--darkBlue)",
              }}
            >
              <a href={facebookLink} target="_blank" rel="noreferrer noopener">
                <Facebook src={facebookImg} alt="facebook-logo" />
              </a>
              <a href={twitterLink} target="_blank" rel="noreferrer noopener">
                <Twitter src={twitterImg} alt="twitter-logo" />
              </a>
              <a href={youtubeLink} target="_blank" rel="noreferrer noopener">
                <YouTube src={youtubeImg} alt="youtube-logo" />
              </a>
              <a href={instagramLink} target="_blank" rel="noreferrer noopener">
                <Instagram src={instagramImg} alt="instagram-logo" />
              </a>
              <a href={webLink} target="_blank" rel="noreferrer noopener">
                <Web src={webImg} alt="web-logo" />
              </a>
            </div>
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
            facebookLink={channel.facebook}
            twitterLink={channel.twitter}
            youtubeLink={channel.youtube}
            instagramLink={channel.instagram}
            webLink={channel.website}
          />
        ))}
      </ChannelsList>
    </>
  );
};

export default Channel;
