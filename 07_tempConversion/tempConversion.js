const ftoc = function(deg) {
  let f = deg;
  let c = (f-32)* 5/9;
  return parseFloat(c.toFixed(1))
};

const ctof = function(deg) {
  let c = deg;
  let f = (c * 9/5) +32;
  return parseFloat(f.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
