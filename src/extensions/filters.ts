import { Stats } from "fs";
import { basename, extname } from 'path';

export default {
    filterByName(name: string, ext: string): (path: string, stat: Stats) => boolean {
        return function (path: string, stat: Stats): boolean {
            const isExtEqu: boolean = stat.isDirectory() || (!ext || extname(path) === ext);
            const isNameEqu: boolean = !name || basename(path) === name;
            return isExtEqu && isNameEqu;
        }
    },
    filterByDate(startDate: Date, endDate: Date): (path: string, stat: Stats) => boolean {
        return function (path: string, stat: Stats): boolean {
            const isAfterStart: boolean = !startDate || startDate > stat.mtime;
            const isBeforeEnd: boolean = !endDate || endDate > stat.mtime;
            return isAfterStart && isBeforeEnd;
        }
    }
}
