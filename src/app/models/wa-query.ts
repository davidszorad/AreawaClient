import { SortBy } from "./enums/sort-by";

export interface WebsiteArchiveQuery {
    sortBy: SortBy;
    isSortDescending: boolean;
    page: number;
    pageSize: number;
}