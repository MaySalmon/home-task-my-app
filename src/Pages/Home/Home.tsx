import React from "react";

import HomeView from "./Home.view";

type Props = Record<never, never>;

const Home: React.FC<Props> = () => {
  return <HomeView></HomeView>;
};

Home.displayName = "Home";
Home.defaultProps = {};

export default Home;
