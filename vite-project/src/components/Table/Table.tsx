import type { TableProps } from "./types";
import { getOrderString, getNextSortDirection } from "./utils";

const Table = <T extends string>({columns, rows, onSortChange, caption}: TableProps<T>) => (
    <table style={{maxHeight: '100%'}}>
        {caption && <caption>{caption}</caption>}
        <thead style={{ position: 'sticky', top: 0, backgroundColor: 'white'}}>
            <tr>
                {columns.map((column) => (
                    <th
                        key={column.id}
                        style={{
                            minWidth: column.minWidth,
                            textAlign: column.align,
                            cursor: 'pointer'
                        }}
                        onClick={() => onSortChange(column.id, getNextSortDirection(column.sortDirection))}
                    >
                        {`${column.label}${getOrderString(column.sortDirection)}`}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.entries(row).map(([key,value], index) => (
                        <td
                            key={`${rowIndex}-${index}`}
                            style={{ textAlign: columns.find(col => col.id === key)?.align }}
                            >
                            {value}
                        </td>
                    ))}
                </tr>
            ))} 
        </tbody>
    </table>
);

export default Table;