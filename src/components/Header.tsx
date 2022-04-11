import React from "react";
import { Flex, Heading, Stack, Badge, Image } from "@chakra-ui/react";

import type { Launch } from "../types/global";

export const Header = ({ launch }: { launch: Launch }) => {
  return (
    <Flex
      bgImage={`url(${launch.links.flickr_images[0]})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      minHeight="30vh"
      position="relative"
      p={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Image
        position="absolute"
        top="5"
        right="5"
        src={launch.links.mission_patch_small ?? ""}
        height={["85px", "150px"]}
        objectFit="contain"
        objectPosition="bottom"
        loading="lazy"
        decoding="async"
      />
      <Heading
        color="white"
        display="inline"
        backgroundColor="#718096b8"
        fontSize={["lg", "5xl"]}
        px="4"
        py="2"
        borderRadius="lg"
      >
        {launch.mission_name}
      </Heading>
      <Stack isInline spacing="3">
        <Badge colorScheme="purple" fontSize={["xs", "md"]}>
          #{launch.flight_number}
        </Badge>
        {launch.launch_success ? (
          <Badge colorScheme="green" fontSize={["xs", "md"]}>
            Successful
          </Badge>
        ) : (
          <Badge colorScheme="red" fontSize={["xs", "md"]}>
            Failed
          </Badge>
        )}
      </Stack>
    </Flex>
  );
};
