import { SortBy } from "./enums/sort-by";

export interface WatchdogQuery {
    sortBy: SortBy;
    isSortDescending: boolean;
    page: number;
    pageSize: number;
}