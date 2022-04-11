import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { ArrowRight } from "react-feather";
import { Link as BrowserLink } from "react-router-dom";

type Props = { url: string };

const PageLink = ({ url, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <Link as={BrowserLink} to={url} {...rest}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight} />
      </Flex>
    </Link>
  );
};

export default PageLink;
