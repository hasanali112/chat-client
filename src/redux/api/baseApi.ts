/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  //   BaseQueryApi,
  //   BaseQueryFn,
  createApi,
  //   DefinitionType,
  //   FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import { toast } from "sonner";

// import { RootState } from "../store";
// import { logout, setUser } from "../features/auth/auth.slice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/api/v1",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     //@ts-ignore
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", `${token}`);
//     }

//     return headers;
//   },
// });

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error?.status === 404) {
//     toast.error((result?.error?.data as any).message, { duration: 2000 });
//   }

//   if (result.error?.status === 401) {
//     console.log("Sending refresh token");
//     //* Send refresh token to get new access token
//     const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
//       method: "POST",
//       credentials: "include",
//     });
//     const data = await res.json();
//     console.log(data);

//     if (data?.data?.accessToken) {
//       //@ts-ignore
//       const user = (api.getState() as RootState).auth.user;

//       api.dispatch(
//         setUser({
//           user,
//           token: data.accessToken,
//         })
//       );

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }

//   return result;
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: () => ({}),
});
