const fetchAuthWrapper = async (path: string, options: Record<string,string> = {}) => {
    const newOptions = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_API_TOKEN,
        },
    }
    return await fetch(`${import.meta.env.VITE_API_URL}${path}`, newOptions);
};

const selectAllParams = new Map<string,string>([['select', '*']]);

const createSearchParams = (params: Map<string,string | number>) => {
    const searchParams = new URLSearchParams();
    params.forEach((value, key) => {
        searchParams.append(key, `${value}`);
    });
    return searchParams;
}

export const APIService = {
    getAccountTypes: async (params: Map<string,string> = selectAllParams) => {
        const searchParams = createSearchParams(params);

        return fetchAuthWrapper(`account_types?${searchParams}`);
    },
    getAccounts: async (params: Map<string,string> = selectAllParams) => {
        const searchParams = createSearchParams(params);
        
        return fetchAuthWrapper(`accounts?${searchParams}`);
    },
    getAllAccounts: async (params: Map<string,number> = new Map([['limit', 50], ['offset', 10]])) => {
        const searchParams = createSearchParams(params);
        return fetchAuthWrapper(`allaccounts?${searchParams}`);
    }
};