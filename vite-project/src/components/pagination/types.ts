export interface PaginationProps {
    limit: number;
    onOffsetChange: (offset: number) => void;
    offset: number;
    total: number;
}