module.exports = (temp, curEl) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, curEl.productName);
  output = output.replace(/{%IMAGE%}/g, curEl.image);
  output = output.replace(/{%ID%}/g, curEl.id);
  output = output.replace(/{%FROM%}/g, curEl.from);
  output = output.replace(/{%NUTRIENTS%}/g, curEl.nutrients);
  output = output.replace(/{%QUANTITY%}/g, curEl.quantity);
  output = output.replace(/{%PRICE%}/g, curEl.price);
  output = output.replace(/{%DESCRIPTION%}/g, curEl.description);
  if (!curEl.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

  return output;
};
