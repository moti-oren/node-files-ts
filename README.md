# node-files-ts

this module can help you to work with file system in node.js.\
So far I've just written a search API, you can use it.\
I would be even more happy if you help me improve the module.

```
import Search from './lib/Search';
import filters from './utils/filters';

const { filterByName, filterByDate } = filters;

// Filter by date, bitween startDate to endDate
let startDate: Date = new Date(2018, 8, 16), endDate: Date = new Date(2020, 5, 23);
const finderByDate = new Search('C:/Users/user', filterByDate(startDate, endDate));
// Filter by file/folder name, or by file extension
const finderByName = new Search('C:/Users/user', filterByName('my-file', '.ext'));

// Listen to found event and print to console
finderByName.on('found', function (path) {
    console.info('Match found:', path);
});

// When Search complete
finderByName.on('complete', function () {
    console.info('Search complete!');
});

// Start working
finderByName.startSearch();
```

I wrote this module in TypeScript,\
Hoping to make the world a better place 😎.