import React from "react";
import { Stack } from "@chakra-ui/react";
import PageLink from "../components/PageLinks";

const Home = () => {
  return (
    <Stack m="6" spacing="6">
      <PageLink url="/launches" data-testid="launches-tab">
        Browse SpaceX Launches
      </PageLink>
      <PageLink url="/launch-pads" data-testid="launch-pads-tab">
        Browse SpaceX Launch Pads
      </PageLink>
    </Stack>
  );
};

export default Home;
