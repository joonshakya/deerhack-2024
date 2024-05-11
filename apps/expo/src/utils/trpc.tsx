import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import type { AppRouter } from "@acme/server";

import settings from "~/config/settings";
import authStorage from "../auth/storage";

export const trpc = createTRPCReact<AppRouter>();
export { type RouterInputs, type RouterOutputs } from "@acme/server";

let token: string | null = null;

export function setHeaderToken(newToken: string | null) {
  token = newToken;
}

export function TRPCProvider(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: settings.apiUrl,
          headers: async () => {
            const headers = new Map<string, string>();
            headers.set("x-trpc-source", "expo-react");
            const token = await authStorage.getToken();
            if (token) {
              headers.set(`authorization`, `Bearer ${token}`);
            }
            return Object.fromEntries(headers);
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
