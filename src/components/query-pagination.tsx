'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';
import { cn } from '@/lib/utils';

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

const QueryPagination = ({ totalPages, className }: QueryPaginationProps) => {
  const pathname = usePathname();
  const searchParmas = useSearchParams();

  const currentPage = Number(searchParmas.get('page')) || 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParmas);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(prevPage)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill('')
          .map((_, idx) => (
            <PaginationItem
              key={`page-button-${idx}`}
              className='hidden sm:inline-block'
            >
              <PaginationLink
                isActive={currentPage === idx + 1}
                href={createPageURL(idx + 1)}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};

export default QueryPagination;
