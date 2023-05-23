import React from "react";
import { Helmet } from "react-helmet-async";
import blogLogo from "../../assets/images/logo.png";

interface Props {
  title: string;
  description: string;
  image?: string;
}

const MetaTag = ({ title, description, image }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="myBlog" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image ? image : blogLogo} />
      <meta property="og:url" content={process.env.REACT_APP_AUTH_DOMAIN} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ? image : blogLogo} />
      <meta name="twitter:card" content="summary" />
      <meta name="google-site-verification" content="1B9_D3ZgoEnoR71xGP787ut9T74e0NqBqTNpx-ZH_k0" />
    </Helmet>
  );
};

export default MetaTag;
