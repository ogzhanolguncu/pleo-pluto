import React from "react";
import { Button, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { useSpaceXPaginated } from "../utils/use-space-x";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LoadMoreButton } from "../components/LoadMoreButton";
import { Error } from "../components/Error";
import { LaunchItem } from "../components/LaunchItem";
import { PAGE_SIZE, ROUTES } from "../constants";
import { useLocalStorage } from "react-use";

import type { Launch } from "../types/global";
import FavoriteDrawer from "../components/FavoriteDrawer";

export default function Launches() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [favorites, setFavorite] = useLocalStorage<Launch[]>("favorites", []);
  const { data, error, isValidating, setSize, size } =
    useSpaceXPaginated<Launch>("/launches/past", {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    });

  const handleFavoriteToggle = (launch: Launch) => {
    const isFavoritePresent = favorites?.find(
      (favoriteItem) => favoriteItem.flight_number === launch.flight_number
    );
    if (isFavoritePresent) {
      setFavorite([
        ...(favorites?.filter(
          (favoriteItem) =>
            favoriteItem.flight_number !== isFavoritePresent.flight_number
        ) ?? []),
      ]);
      return;
    }
    setFavorite([...(favorites ?? []), launch]);
  };

  if (error) return <Error />;

  const breadCrumbs = [
    { label: "Home", to: ROUTES.HOME },
    { label: "Launches", to: "#" },
  ];

  return (
    <>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Breadcrumbs items={breadCrumbs} />
        <Button m="6" ref={btnRef} onClick={onOpen}>
          Favorites
        </Button>
      </Flex>
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {data?.flat().map((launch) => (
          <LaunchItem
            launch={launch}
            favorites={favorites}
            key={launch.flight_number}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />

      <FavoriteDrawer
        isOpen={isOpen}
        favorites={favorites}
        onClose={onClose}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </>
  );
}
