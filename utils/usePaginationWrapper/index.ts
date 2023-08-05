import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

interface IProps {
  data?: any;
}

const pageOptions = [
  { value: 10, label: '10 Rows' },
  { value: 20, label: '20 Rows' },
  { value: 50, label: '50 Rows' },
];

const usePaginationWrapper = () => {
  const [limit, setLimit] = useState<number>(20);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText] = useDebounce(searchText, 300);
  const [pageable, setPageable] = useState<any>(undefined);

  const resetPagination = () => {
    setPage(1);
    setLimit(20);
  };

  useEffect(() => {
    if (pageable) {
      setTotalPages(pageable.totalPages);
      setPage(parseInt(pageable.currentPage || '1'));
      setTotalElements(pageable.count || pageable.totalCount);
    }
  }, [pageable]);

  useEffect(() => {
    setPage(1);
    setLimit(20);
  }, [debouncedSearchText]);

  return {
    limit,
    setTotalPages,
    setLimit,
    totalElements,
    totalPages,
    page,
    setPage,
    pageOptions,
    searchText,
    debouncedSearchText,
    setSearchText,
    setTotalElements,
    resetPagination,
    setPageable,
  };
};

export default usePaginationWrapper;
