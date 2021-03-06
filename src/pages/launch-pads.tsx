import React from "react";
import { Button, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import { Error } from "../components/Error";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LoadMoreButton } from "../components/LoadMoreButton";
import { useSpaceXPaginated } from "../utils/use-space-x";
import { PAGE_SIZE, ROUTES } from "../constants";
import { LaunchPad } from "../types/global";
import { LaunchPadItem } from "../components/LaunchPadItem";
import { useLocalStorage } from "react-use";
import FavoriteLaunchPadDrawer from "../components/FavoriteLaunchPadDrawer";

const LaunchPads = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [favorites, setFavorite] = useLocalStorage<LaunchPad[]>(
    "favoritesLaunchPads",
    []
  );
  const { data, error, isValidating, size, setSize } =
    useSpaceXPaginated<LaunchPad>("/launchpads", {
      limit: PAGE_SIZE,
    });

  const handleFavoriteToggle = (launch: LaunchPad) => {
    const isFavoritePresent = favorites?.find(
      (favoriteItem) => favoriteItem.id === launch.id
    );
    if (isFavoritePresent) {
      setFavorite([
        ...(favorites?.filter(
          (favoriteItem) => favoriteItem.id !== isFavoritePresent.id
        ) ?? []),
      ]);
      return;
    }
    setFavorite([...(favorites ?? []), launch]);
  };

  if (error) return <Error />;

  const breadCrumbs = [
    { label: "Home", to: ROUTES.HOME },
    { label: "Launch Pads", to: "#" },
  ];

  return (
    <>
      <Breadcrumbs items={breadCrumbs} />
      <Button m="6" ref={btnRef} onClick={onOpen}>
        Favorites
      </Button>
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {data?.flat().map((launchPad) => (
          <LaunchPadItem
            key={launchPad.site_id}
            launchPad={launchPad}
            onFavoriteToggle={handleFavoriteToggle}
            favorites={favorites}
          />
        ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />

      <FavoriteLaunchPadDrawer
        isOpen={isOpen}
        favorites={favorites}
        onClose={onClose}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </>
  );
};

export default LaunchPads;
