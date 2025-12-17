import type { ColumnConfig, SortDirection } from "../../components/table/types";
import { UserAccountColumn } from "./types";
import { stringCompare, numberCompare, accountTypeCompare } from "./utils";

const columnsConfig: ColumnConfig<UserAccountColumn>[] = [
  {
    id: UserAccountColumn.Id,
    label: "Account ID",
    minWidth: 200
  },
  {
    id: UserAccountColumn.AccountType,
    label: "Account Type",
    minWidth: 200
  },
  {
    id: UserAccountColumn.Value,
    label: "Value",
    align: "right",
    minWidth: 200
  },
  {
    id: UserAccountColumn.Currency,
    label: "Currency",
    minWidth: 200
  },
];

type SortFunction = ((a: string, b: string, direction: SortDirection) => number) |
 ((a: number, b: number, direction: SortDirection) => number);

const sortingPerColumn: Record<UserAccountColumn, SortFunction> = {
  [UserAccountColumn.Id]: stringCompare,
  [UserAccountColumn.AccountType]: accountTypeCompare,
  [UserAccountColumn.Value]: numberCompare,
  [UserAccountColumn.Currency]: stringCompare
};

export { columnsConfig, sortingPerColumn};