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
import { LaunchPad, LaunchPadList } from "../types/global";
import { LaunchPadItem } from "./LaunchPadItem";

type Props = {
  isOpen: boolean;
  favorites?: LaunchPadList;
  onClose: () => void;
  onFavoriteToggle: (launch: LaunchPad) => void;
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
        <DrawerHeader>Favorite Launch Pads</DrawerHeader>

        <DrawerBody>
          {favorites?.map((launchPad) => (
            <Fragment key={launchPad.id}>
              <LaunchPadItem
                launchPad={launchPad}
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
