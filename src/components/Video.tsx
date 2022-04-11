import React from "react";
import { AspectRatio, Box } from "@chakra-ui/react";

type Props = {
  missionName: string;
  videoSrc: string;
};

export const Video = ({ missionName, videoSrc }: Props) => {
  return (
    <AspectRatio maxH="400px" ratio={1.7}>
      <Box
        as="iframe"
        title={missionName}
        src={`https://www.youtube.com/embed/${videoSrc}`}
        allowFullScreen
      />
    </AspectRatio>
  );
};
