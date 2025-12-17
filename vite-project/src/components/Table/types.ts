type SortDirection = 'asc' | 'desc' | undefined;
type Align = 'right' | 'left' | 'center';

interface ColumnConfig<T> {
    id: T;
    label: string;
    minWidth?: number;
    sortDirection?: SortDirection;
    align?: Align;
}

interface Row<T extends string> {
    [key: T]: string | number;
}

interface TableProps<T extends string> {
    columns: ColumnConfig<T>[];
    rows: Row<T>[];
    onSortChange: (columnId: T, nextValue: SortDirection) => void;
    caption?: string;

}
export type { SortDirection, ColumnConfig, Row, TableProps };