import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { useSpaceXPaginated } from "../utils/use-space-x";
import Error from "../components/error";
import Breadcrumbs from "../components/breadcrumbs";
import LoadMoreButton from "../components/load-more-button";
import { Launch } from "../types/global";
import { PAGE_SIZE } from "../constants";
import { LaunchItem } from "../components/LaunchItem";

export default function Launches() {
  const { data, error, isValidating, setSize, size } =
    useSpaceXPaginated<Launch>("/launches/past", {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Launches", to: "#" },
        ]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .map((launch) => (
              <LaunchItem launch={launch} key={launch.flight_number} />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </>
  );
}
