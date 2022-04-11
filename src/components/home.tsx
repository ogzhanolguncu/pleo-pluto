import React, { PropsWithChildren } from "react";
import { Flex, Box, Text, Stack, Link } from "@chakra-ui/react";
import { ArrowRight } from "react-feather";
import { Link as BrowserLink } from "react-router-dom";

type Props = { url: string };

const Home = () => {
  return (
    <Stack m="6" spacing="6">
      <PageLink url="/launches">Browse SpaceX Launches</PageLink>
      <PageLink url="/launch-pads">Browse SpaceX Launch Pads</PageLink>
    </Stack>
  );
};

function PageLink({ url, children, ...rest }: PropsWithChildren<Props>) {
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
}

export default Home;