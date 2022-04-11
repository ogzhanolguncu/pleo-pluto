import React from "react";
import { Stack, SimpleGrid, Text } from "@chakra-ui/react";

import { LaunchItem } from "./LaunchItem";
import type { LaunchList } from "../types/global";

export const RecentLaunches = ({ launches }: { launches?: LaunchList }) => {
  if (!launches?.length) {
    return null;
  }
  return (
    <Stack my="8" spacing="3">
      <Text fontSize="xl" fontWeight="bold">
        Last launches
      </Text>
      <SimpleGrid minChildWidth="350px" spacing="4">
        {launches.map((launch) => (
          <LaunchItem launch={launch} key={launch.flight_number} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
