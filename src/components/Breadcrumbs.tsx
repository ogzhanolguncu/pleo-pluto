import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";
import { ChevronsRight } from "react-feather";
import { Link } from "react-router-dom";

type Props = {
  items: {
    label: string;
    to: string;
  }[];
};

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <Breadcrumb
      m="6"
      spacing="1"
      separator={<Box size="1em" as={ChevronsRight} color="gray.300" />}
    >
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;
        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage} key={item.label}>
            <BreadcrumbLink
              to={!isCurrentPage ? item.to : "#"}
              as={!isCurrentPage ? Link : undefined}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
