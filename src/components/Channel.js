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
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useChannelFetch } from "../hooks/useChannelFetch";
import { useHomeFetch } from "../hooks/useHomeFetch";

const Channel = () => {
  const { channelId } = useParams();
  const { state: channel, loading, error } = useChannelFetch(channelId);
  const { state: allChannels } = useHomeFetch();

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
        <title>{channel[0].name} - Teeveet</title>
      </Helmet>
      <BreadCrumb title={channel[0].name} />
      {!loading && <VideoPlayer liveUrl={channel[0].live_url} />}
      <Wrapper>
        <Content>
          <Text>
            <h1>{channel[0].name}</h1>
            <p
              style={{
                whiteSpace: "pre",
              }}
            >
              {channel[0].description}
            </p>
            <div
              className="d-flex align-items-center w-100"
              style={{
                background: "var(--darkBlue)",
              }}
            >
              <a
                href={channel[0].facebook}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Facebook src={facebookImg} alt="facebook-logo" />
              </a>
              <a
                href={channel[0].twitter}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Twitter src={twitterImg} alt="twitter-logo" />
              </a>
              <a
                href={channel[0].instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Instagram src={instagramImg} alt="instagram-logo" />
              </a>
              <a
                href={channel[0].youtube}
                target="_blank"
                rel="noreferrer noopener"
              >
                <YouTube src={youtubeImg} alt="youtube-logo" />
              </a>
              <a
                href={channel[0].website}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Web src={webImg} alt="web-logo" />
              </a>
            </div>
          </Text>
        </Content>
      </Wrapper>
      <ChannelsList header={"Katso lisää TV-kanavia, jos on tylsää"}>
        {allChannels.map((channel) => (
          <Thumb
            key={channel.id}
            clickable
            channelId={channel.id}
            image={
              channel.thumbnail
                ? channel.thumbnail
                : "https://jesunmaailma.ml/images/no_image.jpg"
            }
            name={channel.name}
            description={channel.description}
          />
        ))}
      </ChannelsList>
    </>
  );
};

export default Channel;
