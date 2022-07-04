import React from "react";
import Helmet from "react-helmet";
import ChannelsList from "./ChannelsList";
import Thumb from "./Thumb";
import HeroImage from "./HeroImage";
import Spinner from "./Spinner";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const { state: channel, loading, error } = useHomeFetch();

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
  if (error) return (
    <>
      <Helmet>
        <title>Jokin meni vikaan</title>
      </Helmet>
      <div>Jokin meni vikaan...</div>
    </>
    );

  return (
    <>
      <Helmet>
        <title>Teeveet - TV-kanavat netissä 24/7</title>
      </Helmet>
      {!loading && channel[0] ? (
        <HeroImage
          channelId={channel[0].id}
          title={channel[0].name}
          description={channel[0].description}
          image={`${channel[0].thumbnail}`}
        />
      ) : null}
      <ChannelsList header={"Kanavat"}>
        {channel.map((channel) => (
          <Thumb
            key={channel.id}
            clickable
            channelId={channel.id}
            name={channel.name}
            description={channel.description}
            image={
              channel.thumbnail
                ? channel.thumbnail
                : "https://jesunmaailma.ml/images/no_image.jpg"
            }
          />
        ))}
      </ChannelsList>
    </>
  );
};

export default Home;
