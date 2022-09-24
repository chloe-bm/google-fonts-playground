import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const fontsSliceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.layerhub.pro/",
  }),
  endpoints(builder) {
    return {
      fetchFonts: builder.query<FontItem[], number | void>({
        query(offset = 1) {
          return `/fonts?offset=${offset}&&limit=30`;
        },
        transformResponse: (response: { fonts: FontItem[] }) => {
          // fontsSliceApi.util.
          return response.fonts;
        },
      }),
    };
  },
});

export const { useFetchFontsQuery } = fontsSliceApi;
