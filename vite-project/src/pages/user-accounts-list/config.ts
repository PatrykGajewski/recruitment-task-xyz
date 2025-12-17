import type { ColumnConfig } from "../../components/Table/types";
import { UserAccountColumn } from "./types";
import { stringCompare, numberCompare } from "./utils";

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

const sortingPerColumn = {
  [UserAccountColumn.Id]: stringCompare,
  [UserAccountColumn.AccountType]: stringCompare,
  [UserAccountColumn.Value]: numberCompare,
  [UserAccountColumn.Currency]: stringCompare
};

export { columnsConfig, sortingPerColumn};