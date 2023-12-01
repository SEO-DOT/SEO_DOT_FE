import { DefaultOptions, QueryClient } from "@tanstack/react-query";
// import request, { RequestDocument } from "graphql-request";

type AnyOBJ = { [key: string]: any };
// const BASE_URL = "https://fakestoreapi.com";
const BASE_URL = "/";
export const getClient = (() => {
    let client: QueryClient | null = null;

    interface CustomQueryObserverOptions extends DefaultOptions<Error> {
        cacheTime: number;
        staleTime: number;
        refetchOnMount: boolean;
        refetchOnReconnect: boolean;
        refetchOnWindowFocus: boolean;
    }

    return () => {
        if (!client) {
            const defaultOptions: CustomQueryObserverOptions = {
                cacheTime: 1000 * 60 * 60 * 24,
                staleTime: 1000 * 60,
                refetchOnMount: false,
                refetchOnReconnect: false,
                refetchOnWindowFocus: false,
            };

            client = new QueryClient({
                defaultOptions,
            });
        }
        return client;
    };
})();

export const restfetcher = async ({
    method,
    path,
    body,
    params,
}: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    path: string;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": BASE_URL,
        },
    };
    try {
        const res = await fetch(url, fetchOptions);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
};

// export const graphqlFetcher = (query: RequestDocument, variables = {}) => request(BASE_URL, query, variables);

export const QueryKeys = {
    PRODUCTS: "PRODUCTS",
    CART: "CART",
};
