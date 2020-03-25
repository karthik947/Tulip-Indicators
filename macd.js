const tulind = require('tulind');
const log = console.log;

// log(tulind.version);

// log(tulind.indicators);

// log(tulind.indicators.rsi);
const open = require('./data').data.map(d => d[1]);
const high = require('./data').data.map(d => d[2]);
const low = require('./data').data.map(d => d[3]);
const close = require('./data').data.map(d => d[4]);

// log(tulind.indicators.macd);
tulind.indicators.macd.indicator([close],[12,26,9],(err,res) => {
  if(err) return log(err);
  log(res);
  log(1);
  // log(res[0].slice(-1)[0]);
});
