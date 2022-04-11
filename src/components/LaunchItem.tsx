import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Launch } from "../types/global";
import { formatDate } from "../utils/format-date";
import { format as timeAgo } from "timeago.js";

export const LaunchItem = ({ launch }: { launch: Launch }) => {
  return (
    <Box
      as={Link}
      to={`/launches/${launch.flight_number.toString()}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={
          launch.links.flickr_images[0]?.replace("_o.jpg", "_z.jpg") ??
          launch.links.mission_patch_small
        }
        alt={`${launch.mission_name} launch`}
        height={["200px", null, "300px"]}
        width="100%"
        objectFit="cover"
        objectPosition="bottom"
        loading="lazy"
        decoding="async"
      />

      <Image
        position="absolute"
        top="5"
        right="5"
        src={launch.links.mission_patch_small ?? ""}
        height="75px"
        objectFit="contain"
        objectPosition="bottom"
        loading="lazy"
        decoding="async"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {launch.launch_success ? (
            <Badge px="2" variant="solid" colorScheme="green">
              Successful
            </Badge>
          ) : (
            <Badge px="2" variant="solid" colorScheme="red">
              Failed
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
            {launch.rocket.rocket_name} &bull; {launch.launch_site.site_name}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {launch.mission_name}
        </Box>
        <Flex>
          <Text fontSize="sm">{formatDate(launch.launch_date_utc)} </Text>
          <Text color="gray.500" ml="2" fontSize="sm">
            {timeAgo(launch.launch_date_utc)}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};