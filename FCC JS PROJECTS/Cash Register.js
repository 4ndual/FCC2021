/* 
Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

*/

// function to round more exactly
function roundto2(n) {

  return Math.round((n + Number.EPSILON) * 100) / 100;

}

function closerUnit(remaining, currencyUnit) {
  // Find the closest and smallest currencyUnit to the remaining
  return currencyUnit.slice().reverse().find(x => remaining >= x)

}

function convertTocurrencyUnits(remaining, currencyUnit, cid, exactChange = []) {

  // remaining is the change remaining after subtracting the necessary amount available from the nearest unit
  // exactChange is an array with the accumulated currenCyunits needed to complete the change

  // Base case 1 if the remaining is 0 return exactChange
  // If not (remaining> 0) calculate the remainder of the change
  if (remaining > 0) {

    // Calculate the unit of currency closest to the remaining change
    let closerunit = closerUnit(remaining, currencyUnit)

    // Base case 2 for when there are not the necessary units to give the exact change
    if (!closerunit) { return }

    else {

      // Calculate the index of the closest unit (it is the same index for currencyUnit and cid because they have the same order and the same length)
      let i = currencyUnit.indexOf(closerunit)

      // if the reamining is less than or equal to the total of the nearest currency unit in cid
      if (cid[i][1] <= remaining) {

        // add the closest currency unit total in cid to exactChange
        exactChange.push([cid[i][0], cid[i][1]])

        // subtract total of the nearest currency unit in cid from the remaining
        remaining = roundto2(remaining - cid[i][1])

        // match the unit of currency closest to null to be able to find the next closest
        currencyUnit[i] = null

        // continue the recursion (loop) with the modified values ​​until one of the base cases is met
        return convertTocurrencyUnits(remaining, currencyUnit, cid, exactChange)

        // if the reamining is greater than the total of the nearest currency unit in cid
      } else {

        
        // calculate the largest number of currency units whose total is never greater than reamining (quot)
        let quot = Math.floor(remaining / currencyUnit[i]) * currencyUnit[i]

        // add the "quot" of the closest currency unit in cid to
        exactChange.push([cid[i][0], quot])

        // subtract the "quot" to remaining
        remaining = roundto2(remaining - quot)

        //continue the recursion (loop) with the modified values ​​until one of the base cases is met
        return convertTocurrencyUnits(remaining, currencyUnit, cid, exactChange)

      }

    }

  }


  return exactChange

}



function checkCashRegister(price, cash, cid, currencyUnit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]) {

  // calculate total change
  let change = cash - price

  // // add the total money in cid
  let totalcid = cid.map(x => x[1]).reduce((acc, e) => roundto2(acc + e))

  /* if the total of the box is equal to or greater than the change, the result is returned without the need to do other calculations, 
  it lengthens the code a bit but makes the agorithm more efficient*/
  if (change >= totalcid) {

    return totalcid == change ? { status: "CLOSED", change: cid } :
      { status: "INSUFFICIENT_FUNDS", change: [] }

  }

  // To obtain the exact change due it is necessary to separate the change between the avalible currency units
  let dueChange = convertTocurrencyUnits(change, currencyUnit.slice(), cid)

  // check if there are the exact units to be able to give the complete change
  if (!dueChange) {

    return { status: "INSUFFICIENT_FUNDS", change: [] }

  }

  // return the exact change
  return { status: "OPEN", change: dueChange }

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

/* Possible optimizations

  -Update the cid by subtracting change from the change delivered (it is not difficult to do but the test does not require it)

*/