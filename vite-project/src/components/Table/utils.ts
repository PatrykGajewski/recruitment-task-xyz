import type { SortDirection } from "./types";

export const getOrderString = (direction: SortDirection) => {
    if (!direction) return '';
    return direction === 'asc' ? ' (asc)' : ' (dsc)';
}

export const getNextSortDirection = (currentDirection: SortDirection): SortDirection => {
    if (!currentDirection) return 'asc';
    return currentDirection === 'asc' ? 'desc' : 'asc';
}