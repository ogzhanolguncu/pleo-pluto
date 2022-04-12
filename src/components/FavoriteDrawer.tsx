import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { Launch } from "../types/global";
import { LaunchItem } from "./LaunchItem";

type Props = {
  isOpen: boolean;
  favorites?: Launch[];
  onClose: () => void;
  onFavoriteToggle: (launch: Launch) => void;
};
const FavoriteDrawer = ({
  isOpen,
  onClose,
  onFavoriteToggle,
  favorites,
}: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      closeOnEsc
      blockScrollOnMount
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Favorite Launches</DrawerHeader>

        <DrawerBody>
          {favorites?.map((launch) => (
            <Fragment key={launch.flight_number}>
              <LaunchItem
                launch={launch}
                favorites={favorites}
                onFavoriteToggle={onFavoriteToggle}
              />
              <Divider my="5" />
            </Fragment>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FavoriteDrawer;
