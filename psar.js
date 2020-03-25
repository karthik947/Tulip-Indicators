const tulind = require('tulind');
const log = console.log;

// log(tulind.version);

// log(tulind.indicators);

// log(tulind.indicators.rsi);
const open = require('./data').data.map(d => d[1]);
const high = require('./data').data.map(d => d[2]);
const low = require('./data').data.map(d => d[3]);
const close = require('./data').data.map(d => d[4]);

// log(tulind.indicators.psar);
tulind.indicators.psar.indicator([high,low],[0.02,0.2],(err,res) => {
  if(err) return log(err);
  log(res[0].slice(-1)[0]);
  //log(1);
  // log(res[0].slice(-1)[0]);
});
