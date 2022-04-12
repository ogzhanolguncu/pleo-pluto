import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Badge,
  Image,
  Box,
  Icon,
} from "@chakra-ui/react";

import type { Launch } from "../types/global";
import { Star } from "react-feather";
import { useLocalStorage } from "react-use";

export const Header = ({ launch }: { launch: Launch }) => {
  const [favorites, setFavorite] = useLocalStorage<Launch[]>("favorites", []);

  const isLaunchFavorite = favorites?.find(
    (launchItem) => launchItem.flight_number === launch.flight_number
  );

  const handleFavoriteToggle = (launch: Launch) => {
    if (isLaunchFavorite) {
      setFavorite([
        ...(favorites?.filter(
          (favoriteItem) =>
            favoriteItem.flight_number !== isLaunchFavorite.flight_number
        ) ?? []),
      ]);
      return;
    }
    setFavorite([...(favorites ?? []), launch]);
  };

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
        <Box ml="7">
          <Icon
            w="6"
            h="6"
            as={Star}
            onClick={() => handleFavoriteToggle(launch)}
            fill={isLaunchFavorite && "blue.400"}
            stroke={isLaunchFavorite && "blue.400"}
            cursor="pointer"
          />
        </Box>
      </Stack>
    </Flex>
  );
};
