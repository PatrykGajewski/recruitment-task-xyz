import type { SortDirection } from "../../components/table/types";

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

const accountTypeASCOrder = ['standard', 'primary', 'primary+'];

const accountTypeCompare = (a: string, b: string, direction: SortDirection) => {
  const aIndex = accountTypeASCOrder.indexOf(a);
  const bIndex = accountTypeASCOrder.indexOf(b);

  if(direction === 'asc') {
    return aIndex - bIndex;
  } else {
    return bIndex - aIndex;
  }
}

export { stringCompare, numberCompare, accountTypeCompare };