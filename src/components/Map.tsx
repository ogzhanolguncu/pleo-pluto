import React from "react";
import { AspectRatio, Box } from "@chakra-ui/react";

export const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  return (
    <AspectRatio ratio={16 / 5}>
      <Box
        as="iframe"
        src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`}
      />
    </AspectRatio>
  );
};
