import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { useSpaceXPaginated } from "../utils/use-space-x";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LoadMoreButton } from "../components/LoadMoreButton";
import { Error } from "../components/Error";
import { LaunchItem } from "../components/LaunchItem";
import { PAGE_SIZE } from "../constants";
import { useLocalStorage } from "react-use";

import type { Launch } from "../types/global";

export default function Launches() {
  const [favorites, setFavorite] = useLocalStorage<Launch[]>("favorites", []);
  const { data, error, isValidating, setSize, size } =
    useSpaceXPaginated<Launch>("/launches/past", {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    });

  const handleAddItemToFavoriteList = (launch: Launch) => {
    setFavorite([...(favorites ?? []), launch]);
  };

  if (error) return <Error />;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Launches", to: "#" },
        ]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {data?.flat().map((launch) => (
          <LaunchItem
            launch={launch}
            favorites={favorites}
            key={launch.flight_number}
            onFavoriteAdd={handleAddItemToFavoriteList}
          />
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
