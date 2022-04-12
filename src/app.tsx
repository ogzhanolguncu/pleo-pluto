import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

import Launches from "./pages/launches";
import Launch from "./pages/launch";
import Home from "./pages/home";
import LaunchPads from "./pages/launch-pads";
import LaunchPad from "./pages/launch-pad";
import { ROUTES } from "./constants";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LAUNCHES} element={<Launches />} />
        <Route path={ROUTES.LAUNCH_DETAIL} element={<Launch />} />
        <Route path={ROUTES.LAUNCH_PADS} element={<LaunchPads />} />
        <Route path={ROUTES.LAUNCH_PAD_DETAILS} element={<LaunchPad />} />
      </Routes>
    </>
  );
}

function NavBar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
    </Flex>
  );
}
