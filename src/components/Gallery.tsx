import React from "react";
import { SimpleGrid, Image } from "@chakra-ui/react";

export const Gallery = ({ images }: { images: string[] }) => {
  return (
    <SimpleGrid my="6" minChildWidth="350px" spacing="4">
      {images.map((image) => (
        <a href={image} key={image}>
          <Image
            src={image.replace("_o.jpg", "_z.jpg")}
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </SimpleGrid>
  );
};
