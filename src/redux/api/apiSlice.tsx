import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://16ana.net/server16ana/",
  }),
  tagTypes: [
    "updatebook",
    "deletebook",
    "postreview",
    "postwishlist",
    "updatewishlist",
    "updateorderlist",
  ],
  endpoints: () => ({}),
});

export default api;
