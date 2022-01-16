import { ArchiveType } from "./enums/archive-tyoe";
import { Status } from "./enums/status";

export interface WebsiteArchive {
    publicId: string;
    shortId: string;
    name: string;
    description: string;
    status: Status;
    sourceUrl: string;
    archiveUrl: string;
    archiveType: ArchiveType;
    created: Date;
    updated: Date;
}