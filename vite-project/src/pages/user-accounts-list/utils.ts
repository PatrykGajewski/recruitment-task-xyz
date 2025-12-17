import type { SortDirection } from "../../components/Table/types";

const stringCompare = (a: string, b: string, direction: SortDirection) => {
  if(direction === 'asc') {
    return a.localeCompare(b);
  } else {
    return b.localeCompare(a);
  }
};

const numberCompare = (a: number, b: number, direction: SortDirection) => {
  if(direction === 'asc') {
    return a - b;
  } else {
    return b - a;
  }
};

export { stringCompare, numberCompare };