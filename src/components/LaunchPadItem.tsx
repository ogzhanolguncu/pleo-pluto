import React from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Icon, Text } from "@chakra-ui/react";

import type { LaunchPad } from "../types/global";
import { Star } from "react-feather";

type Props = {
  launchPad: LaunchPad;
  onFavoriteToggle?: (launch: LaunchPad) => void;
  favorites?: LaunchPad[] | undefined;
};

export const LaunchPadItem = ({
  launchPad,
  onFavoriteToggle,
  favorites,
}: Props) => {
  const handleFavoriteToggle = (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    onFavoriteToggle?.(launchPad);
  };

  const isLaunchFavorite = favorites?.find(
    (launchItem) => launchItem.id === launchPad.id
  );

  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
      data-testid={`launch-pad-${launchPad.id}`}
    >
      <Box as={Link} to={`/launch-pads/${launchPad.site_id}`}>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {launchPad.status === "active" ? (
              <Badge px="2" variant="solid" colorScheme="green">
                Active
              </Badge>
            ) : (
              <Badge px="2" variant="solid" colorScheme="red">
                Retired
              </Badge>
            )}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {launchPad.attempted_launches} attempted &bull;{" "}
              {launchPad.successful_launches} succeeded
            </Box>
            <Icon
              w="6"
              h="6"
              as={Star}
              onClick={handleFavoriteToggle}
              fill={isLaunchFavorite && "blue.400"}
              stroke={isLaunchFavorite && "blue.400"}
              cursor="pointer"
              ml="3rem"
              data-testid={`launch-pad-favorite-${launchPad.id}`}
            />
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            data-testid={`launch-pad-name-${launchPad.id}`}
          >
            {launchPad.name}
          </Box>

          <Text color="gray.500" fontSize="sm">
            {launchPad.vehicles_launched.join(", ")}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
