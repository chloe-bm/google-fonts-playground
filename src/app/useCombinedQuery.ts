import React from "react";
import { useFetchFontsQuery } from "~/features/fonts/fonts-slice-api";

export interface FontItem {
  id: string;
  family: string;
  full_name: string;
  postscript_name: string;
  preview: string;
  style: string;
  url: string;
  category: string;
}

export default function useCombinedQuery(pageNumber: number) {
  const [pageNum, setPageNum] = React.useState(1);
  const [combinedData, setCombinedData] = React.useState<FontItem[]>([]);
  const { data = [], isFetching } = useFetchFontsQuery(pageNum);

  React.useEffect(() => {
    if (data) {
      setCombinedData((previousCombinedDate) => [
        ...previousCombinedDate,
        ...data,
      ]);
    }
  }, [data]);

  React.useEffect(() => {
    if (pageNumber) {
      console.log(pageNumber);
      setPageNum(pageNumber);
    }
  }, [pageNumber]);

  return {
    data: combinedData,
    isFetching,
  };
}
