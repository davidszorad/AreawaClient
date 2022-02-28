import { RetryPeriod } from "./enums/retry-period";
import { Status } from "./enums/status";

export interface Watchdog {
    publicId: string;
    name: string;
    url: string;
    startSelector: string;
    endSelector: string;
    isActive: boolean;
    scanCount: number;
    status: Status;
    retryPeriod: RetryPeriod;
    created: Date;
    updated: Date;
}