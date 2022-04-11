import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { Error } from "../components/Error";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LoadMoreButton } from "../components/LoadMoreButton";
import { useSpaceXPaginated } from "../utils/use-space-x";
import { PAGE_SIZE } from "../constants";
import { LaunchPad } from "../types/global";
import { LaunchPadItem } from "../components/LaunchPadItem";

const LaunchPads = () => {
  const { data, error, isValidating, size, setSize } =
    useSpaceXPaginated<LaunchPad>("/launchpads", {
      limit: PAGE_SIZE,
    });

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Launch Pads", to: "#" },
        ]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .map((launchPad) => (
              <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
};

export default LaunchPads;
