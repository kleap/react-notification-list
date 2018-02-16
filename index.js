const _ = require('lodash');

const next = [{ a: 'a', b: 'b' }, { a: 's', b: 'd' }, { a: 'l', c: 'g' }];
const current = [{ a: 'a', b: 'b' }, { a: 's', b: 'd' }];

const res = _.differenceWith(next, current, _.isEqual);
console.log(res);

