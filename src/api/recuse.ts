import { readdirSync, Stats, statSync } from 'fs';

function recuse(path: string, func: (path: string, stat: Stats) => void) {
    const stat: Stats = statSync(path);
    if (isEmpty(path) || !stat.isDirectory()) {
        return func(path, stat);
    }
    readdirSync(path).forEach((val) => {
        recuse(val, func);
        func(val, stat);
    });
}

export default recuse;

function isEmpty(path: string): boolean {
    return readdirSync(path).length === 0;
}
