import { useState, useEffect } from "react";
import { APIService } from "../services/APIService";

type Dictionary = Record<string, string>;

const createDictionaryFromResponse = (response: {id: string; account_type_name: string}[]): Dictionary => (
    response.reduce((acc, curr) => {
        acc[curr.id] = curr.account_type_name;
        return acc;
    }, {} as Dictionary)
);

export const useAccountTypes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<Dictionary>({});

    useEffect(() => {
        const fetchAccountTypes = async () => {
            try {
                const response = await (await APIService.getAccountTypes()).json();

                setData(createDictionaryFromResponse(response));
            } catch (error) {
                console.error('Error fetching account types:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAccountTypes();
    }, []);

    return { data, isLoading, isError };
};