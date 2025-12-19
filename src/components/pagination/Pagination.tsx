import type { PaginationProps } from "./types";

const Pagination = ({limit, offset, onOffsetChange, total }: PaginationProps) => {
    const totalPages = total % limit === 0 ? total / limit : Math.floor(total / limit) + 1;
    const currentPage = (offset / limit) + 1;

    const onPrevClick = () => {
        if(offset === 0) {
            return;

        }
        onOffsetChange(offset - limit);
    };

    const onNextClick = () => {
        if(offset + limit >= total) {
            return;
        }
        onOffsetChange(offset + limit);
    };

    return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '400px',
      }}>
        <div>
            <button onClick={onPrevClick}>Prev</button>
            {/* optional displaying the pages */}
            {/* {[...new Array(totalPages)].map((_, i) => ((
            <div><button onClick={() => {
            onOffsetChange(i * limit);
            }}>{i + 1}</button></div>
            )))} */}
            <button onClick={onNextClick}>Next</button>
        </div>
        <div>{`Page ${currentPage} of ${totalPages}`}</div>
    </div>
    );
};

export default Pagination;


