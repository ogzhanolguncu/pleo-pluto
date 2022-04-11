import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Box, Text, Spinner } from "@chakra-ui/react";

import { useSpaceX } from "../utils/use-space-x";
import { Error } from "../components/Error";
import { Breadcrumbs } from "../components/Breadcrumbs";
import type { LaunchList, LaunchPad as LaunchPadType } from "../types/global";
import { Map } from "../components/Map";
import { LaunchPadHeader } from "../components/LaunchPadHeader";
import { LocationAndVehicles } from "../components/LocationAndVehicles";
import { RecentLaunches } from "../components/RecentLaunches";

export default function LaunchPad() {
  let { launchPadId } = useParams();
  const { data: launchPad, error } = useSpaceX<LaunchPadType>(
    `/launchpads/${launchPadId}`
  );

  const { data: launches } = useSpaceX<LaunchList>(
    launchPad ? "/launches/past" : null,
    {
      limit: 3,
      order: "desc",
      sort: "launch_date_utc",
      site_id: launchPad?.site_id,
    }
  );

  if (error) return <Error />;
  if (!launchPad) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="50vh">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Launch Pads", to: "/launch-pads" },
          { label: launchPad.name, to: "#" },
        ]}
      />
      <LaunchPadHeader launchPad={launchPad} />
      <Box m={[3, 6]}>
        <LocationAndVehicles launchPad={launchPad} />
        <Text color="gray.700" fontSize={["md", null, "lg"]} my="8">
          {launchPad.details}
        </Text>
        <Map
          latitude={launchPad.location.latitude}
          longitude={launchPad.location.longitude}
        />
        <RecentLaunches launches={launches} />
      </Box>
    </div>
  );
}
