import { useState, useEffect } from "react";
import { APIService } from "../services/APIService";

export interface AccountResponse {
    id: string;
    account_type: string;
    value: number;
    currency: string;
}

export const useAccounts = (limit: number, offset: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<AccountResponse[]>([]);

    useEffect(() => {
        const fetchAccountTypes = async () => {
            try {
                const response = await (await APIService.getAllAccounts(
                    new Map([['limit', limit], ['offset', offset]])
                )).json();

                setData(response);
            } catch (error) {
                console.error('Error fetching user accounts:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAccountTypes();
    }, [limit, offset]);

    return { data, isLoading, isError };
};