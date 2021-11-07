import { Stats } from 'fs';
import { EventEmitter } from 'events';
import { recuse } from '../api';

class Search extends EventEmitter {
    rootDir: string;
    filter: (path: string, stat: Stats) => boolean;

    constructor (rootDir: string, filter: (path: string, stat: Stats) => boolean) {
        super();
        this.rootDir = rootDir;
        this.filter = filter;
    }

    startSearch (): void {
        recuse(this.rootDir, this.search);
        this.emit('complete');
    }

    search (path: string, stat: Stats): void {
        this.filter(path, stat) && this.emit('found', path);
    }
}

export default Search;
