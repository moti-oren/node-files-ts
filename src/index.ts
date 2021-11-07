import Search from './lib/Search';
import filters from './utils/filters';

const { filterByName, filterByDate } = filters;

let startDate: Date = new Date(2018, 8, 16), endDate: Date = new Date(2020, 5, 23);
const finderByDate = new Search('C:/Users/user', filterByDate(startDate, endDate));
const finderByName = new Search('C:/Users/user', filterByName('my-file', '.ext'));

finderByName.on('found', function (path) {
    console.info('Match found:', path);
});

finderByName.on('complete', function () {
    console.info('Search complete!');
});

finderByName.startSearch();