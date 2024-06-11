import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppSelector } from "@/lib/hooks/hooks";
import { arrayRange } from "@/lib/utils";

export default function PaginationPage({
  startIndex,
  endIndex,
  setStartIndex,
  setEndIndex,
}) {
  const totalTodo = useAppSelector((state) => state.todos)?.todo?.length;

  const totalPage = Math.ceil(totalTodo / 10);

  const handleClick = (e) => {
    setStartIndex(e * 10 - 10);
    setEndIndex(e * 10);
  };

  const handleClickPrev = () => {
    setStartIndex((prev) => {
      if (prev >= 10) {
        return prev - 10;
      } else {
        return prev;
      }
    });
    setEndIndex((prev) => {
      if (prev >= 20) {
        return prev - 10;
      } else {
        return prev;
      }
    });
  };
  const handleClickNext = (e) => {
    setStartIndex((prev) => {
      if (prev <= totalTodo - 10) {
        return prev + 10;
      } else {
        return prev;
      }
    });
    setEndIndex((prev) => {
      if (prev <= totalTodo) {
        return prev + 10;
      } else {
        return prev;
      }
    });
  };

  const pageArray = arrayRange(1, totalPage, 1);

  return (
    <div className="flex justify-between items-center mt-4 text-sm">
      <div className="">
        <div className="flex justify-center items-center">
          <span className="text-gray-500 text-nowrap">
            Showing {startIndex + 1} - {endIndex} | Page {endIndex / 10}
          </span>
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handleClickPrev}
              className="cursor-pointer"
            />
          </PaginationItem>
          {pageArray?.map((num) => {
            const active = Math.ceil(endIndex / 10);

            return (
              <PaginationItem key={num}>
                <PaginationLink
                  className="cursor-pointer"
                  isActive={active === num}
                  onClick={() => handleClick(num)}
                >
                  {num}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
          <PaginationItem>
            <PaginationNext
              onClick={handleClickNext}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
