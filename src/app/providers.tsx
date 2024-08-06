"use client";

import { UrqlProvider, ssrExchange, cacheExchange, fetchExchange, createClient } from "@urql/next";
import { useMemo } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined'
    });
    const client = createClient({
      url: "/api/graphql",
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);
  
  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
};
