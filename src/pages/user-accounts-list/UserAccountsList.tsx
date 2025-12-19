import Table from "../../components/table/Table";
import type { SortDirection } from "../../components/table/types";

import { useAccountTypes } from "../../hooks/useAccountTypes";
import { useAccounts } from "../../hooks/useAccounts";
import { useMemo, useState } from "react";

import { UserAccountColumn } from "./types";
import { columnsConfig, sortingPerColumn } from "./config";
import Pagination from "../../components/pagination/Pagination";

const UserAccountsPage = () => {
  // NOTE: let's assume that limit is known and fixed for this example
  const [limit, setLimit] = useState(100);
  const [offset, setOffset] = useState(0);
  // NOTE: let's assume total number of accounts is known and fixed for this example
  const [total, setTotal] = useState(2000);
  const accountTypes = useAccountTypes();
  const users = useAccounts(limit, offset);

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
        <div className="table-container" style={{ overflowY: 'auto', height: '80vh' }}>
          <Table
            columns={memoizedColumns}
            rows={memoizedTableData}
            onSortChange={onSortChange}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
          <Pagination
            limit={limit}
            offset={offset}
            onOffsetChange={setOffset}
            total={total}
          />
      </div>
    </div>
  );
}

export default UserAccountsPage;