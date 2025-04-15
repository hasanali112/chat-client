import { baseApi } from "@/redux/api/baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: (data) => ({
        url: "/chat/create-chat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Chat"],
    }),
    getChatBetweenUsers: builder.query({
      query: (payloadId) => ({
        url: `/chat/${payloadId.senderId}/${payloadId.receiverId}`,
        method: "GET",
      }),
      providesTags: ["Chat"],
    }),
  }),
});

export const { useCreateChatMutation, useGetChatBetweenUsersQuery } = chatApi;
