import { ComponentProps } from "react";
import styles from "./Pagination.module.css";

export type PaginationProps = ComponentProps<'button'> & {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.btnList}>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`${styles.numBtn} ${currentPage === index + 1 ? styles.activeBtn : ""}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {currentPage !== totalPages && (
        <button
          type="button"
          className={styles.nextBtn}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}

    </div>
  );
};
