const tulind = require('tulind');
const log = console.log;

// log(tulind.version);

// log(tulind.indicators);

// log(tulind.indicators.rsi);
const open = require('./data').data.map(d => d[1]);
const high = require('./data').data.map(d => d[2]);
const low = require('./data').data.map(d => d[3]);
const close = require('./data').data.map(d => d[4]);

// log(tulind.indicators.sma);
tulind.indicators.sma.indicator([close],[200],(err,res) => {
  if(err) return log(err);
  log(res[0]);
  // log(res[0].slice(-1)[0]);
});
