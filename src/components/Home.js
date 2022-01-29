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
          title={channel[0].name}
          text={channel[0].description}
          liveUrl={channel[0].live_url}
          image={`${channel[0].thumbnail}`}
          facebookLink={channel[0].facebook}
          twitterLink={channel[0].twitter}
          youtubeLink={channel[0].youtube}
          instagramLink={channel[0].instagram}
          webLink={channel[0].website}
        />
      ) : null}
      <ChannelsList header={"Kaikki kanavat"}>
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

export default Home;
