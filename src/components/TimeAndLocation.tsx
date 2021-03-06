import {
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Box,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { MapPin, Watch } from "react-feather";
import { format as timeAgo } from "timeago.js";
import { Link as RouterLink } from "react-router-dom";

import type { Launch } from "../types/global";
import { formatDateTime } from "../utils/format-date";

export const TimeAndLocation = ({ launch }: { launch: Launch }) => {
  const localTimeOfLaunchSite = formatDateTime(
    launch.launch_date_utc.split("Z")[0]
  );
  const localTimeOfUser = formatDateTime(launch.launch_date_utc, false);

  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={Watch} width="1em" />{" "}
          <Box ml="2" as="span">
            Launch Date
          </Box>
        </StatLabel>
        <Tooltip
          label={localTimeOfUser}
          aria-label="local-time-of-user"
          hasArrow
          placement="bottom-start"
        >
          <StatNumber
            fontSize={["md", "xl"]}
            _hover={{
              cursor: "context-menu",
            }}
          >
            {localTimeOfLaunchSite}
          </StatNumber>
        </Tooltip>

        <StatHelpText>{timeAgo(launch.launch_date_utc)}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={MapPin} width="1em" />{" "}
          <Box ml="2" as="span">
            Launch Site
          </Box>
        </StatLabel>
        <StatNumber fontSize={["md", "xl"]}>
          <Link
            as={RouterLink}
            to={`/launch-pads/${launch.launch_site.site_id}`}
          >
            {launch.launch_site.site_name_long}
          </Link>
        </StatNumber>
        <StatHelpText>{launch.launch_site.site_name}</StatHelpText>
      </Stat>
    </SimpleGrid>
  );
};
