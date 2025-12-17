import Table from "../../components/table/Table";
import type { SortDirection } from "../../components/table/types";

import { useAccountTypes } from "../../hooks/useAccountTypes";
import { useAccounts } from "../../hooks/useAccounts";
import { useMemo, useState } from "react";

import { UserAccountColumn } from "./types";
import { columnsConfig, sortingPerColumn } from "./config";

const UserAccountsPage = () => {
  const accountTypes = useAccountTypes();
  const users = useAccounts();

  const [sortConfig, setSortConfig] =  useState<{columnId: UserAccountColumn; direction: SortDirection} | null>({
    columnId: UserAccountColumn.Id,
    direction: 'asc'
  });

  const memoizedTableData = useMemo(() => {
    if (!Object.keys(accountTypes.data).length || !users.data.length) {
      return [];
    }

    return users.data.map((account) => ({
      id: account.id,
      account_type: accountTypes.data[account.account_type] || '',
      value: account.value.toFixed(2),
      currency: account.currency
    })).sort((a, b) => {
      if(sortConfig) {
        const sorter = sortingPerColumn[sortConfig.columnId];
        return sorter(a[sortConfig.columnId], b[sortConfig.columnId], sortConfig.direction);
      }
      return 0;
    });
  }, [users.data, accountTypes.data, sortConfig]);

  const memoizedColumns = useMemo(() => columnsConfig.map((column) => ({...column, sortDirection: sortConfig?.columnId === column.id ? sortConfig.direction : undefined})), [sortConfig]);

  const onSortChange = (columnId: UserAccountColumn, direction: SortDirection) => {
    setSortConfig({ columnId, direction });
  }

  if (accountTypes.isLoading || users.isLoading) {
    return <div className="container">Data loading</div>;
  }

  if(accountTypes.isError || users.isError) {
    return <div className="container">Data loading error</div>;
  }

  return (
    <div className="container">
      <Table
        columns={memoizedColumns}
        rows={memoizedTableData}
        onSortChange={onSortChange}
      />
    </div>
  );
}

export default UserAccountsPage;