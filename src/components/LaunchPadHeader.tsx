import { Flex, Heading, Stack, Badge, Box, Icon } from "@chakra-ui/react";
import React from "react";
import { Star } from "react-feather";
import { useLocalStorage } from "react-use";
import type { LaunchPad } from "../types/global";
import { randomColor } from "../utils/random-color";

export const LaunchPadHeader = ({ launchPad }: { launchPad: LaunchPad }) => {
  const [favorites, setFavorite] = useLocalStorage<LaunchPad[]>(
    "favoritesLaunchPads",
    []
  );

  const isLaunchFavorite = favorites?.find(
    (launchItem) => launchItem.id === launchPad.id
  );

  const handleFavoriteToggle = (launch: LaunchPad) => {
    if (isLaunchFavorite) {
      setFavorite([
        ...(favorites?.filter(
          (favoriteItem) => favoriteItem.id !== isLaunchFavorite.id
        ) ?? []),
      ]);
      return;
    }
    setFavorite([...(favorites ?? []), launch]);
  };

  return (
    <Flex
      background={`linear-gradient(${randomColor()}, ${randomColor()})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      minHeight="15vh"
      position="relative"
      flexDirection={["column", "row"]}
      p={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Heading
        color="gray.900"
        display="inline"
        mx={[2, 4]}
        my="2"
        fontSize={["md", "3xl"]}
        borderRadius="lg"
      >
        {launchPad.site_name_long}
      </Heading>
      <Stack isInline spacing="3">
        <Badge colorScheme="purple" fontSize={["sm", "md"]}>
          {launchPad.successful_launches}/{launchPad.attempted_launches}{" "}
          successful
        </Badge>
        {launchPad.status === "active" ? (
          <Badge colorScheme="green" fontSize={["sm", "md"]}>
            Active
          </Badge>
        ) : (
          <Badge colorScheme="red" fontSize={["sm", "md"]}>
            Retired
          </Badge>
        )}
        <Box ml="7">
          <Icon
            w="6"
            h="6"
            as={Star}
            onClick={() => handleFavoriteToggle(launchPad)}
            fill={isLaunchFavorite && "blue.400"}
            stroke={isLaunchFavorite && "blue.400"}
            cursor="pointer"
            data-testid={`launch-pad-favorite-${launchPad.id}`}
          />
        </Box>
      </Stack>
    </Flex>
  );
};
