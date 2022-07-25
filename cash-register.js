function checkCashRegister(price, cash, cid) {
  let res = {status: "", change: []};
  const currency = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  let change = cash * 100 - price * 100;
  let sum = 0;

  for (let item of cid) {
    sum += item[1] * 100;
  }

  let reversedCid = [];
  const reversedKeys = Object.keys(cid).reverse();
  for (let item of reversedKeys) {
    reversedCid.push(cid[item]);
  }

  for (let item of reversedCid) {
    let newCurr = currency[item[0]] * 100;
    let newItem = item[1] * 100;
    if (change >= newCurr && newItem > 0 && change > 0) {
      res.change.push([item[0], 0]);
    }
    while (change >= newCurr && newItem > 0 && change > 0) {
      change -= newCurr;
      newItem -= newCurr;
      sum -= newCurr;
      res.change[res.change.length - 1][1] += newCurr ;
    }
  }

  for (let i = 0; i < res.change.length; i++) {
    res.change[i][1] = res.change[i][1] / 100;
  }

  if (change > 0) {
    res.status = "INSUFFICIENT_FUNDS";
    res.change = [];
    return res;
  } else if (sum > 0) {
    res.status = "OPEN";
    return res;
  } else {
    res.status = "CLOSED";
    res.change = cid;
    return res;
  }
}
