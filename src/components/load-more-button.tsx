import React from "react";
import { Spinner, Flex, Button } from "@chakra-ui/react";
import { LaunchList, LaunchPadList } from "../types/global";

type Props = {
  data?: LaunchList[] | LaunchPadList[];
  pageSize: number;
  isLoadingMore: boolean;
  loadMore: () => void;
};

export default function LoadMoreButton({
  loadMore,
  data,
  pageSize,
  isLoadingMore,
}: Props) {
  const isReachingEnd =
    data?.[0]?.length === 0 ||
    (data && data[data.length - 1]?.length < pageSize);

  return (
    <Flex justifyContent="center" my="100px">
      <Button onClick={loadMore} disabled={isReachingEnd || isLoadingMore}>
        {isLoadingMore ? (
          <Spinner />
        ) : isReachingEnd ? (
          "That's all!"
        ) : (
          "Show more..."
        )}
      </Button>
    </Flex>
  );
}
