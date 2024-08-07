const arr = [900 , 2700 , 3400];
const livingCost = 10000;
function monthlySavings(arr, livingCost) {
  let totalEarn = 0;
  let tax = 0;
  let moneyWithoutTax = 0;

  if (Array.isArray(arr) && typeof livingCost == "number") {
    for (const array of arr) {
      if (array >= 3000) {
        tax = (array * 20) / 100;
        moneyWithoutTax = array - tax;
        totalEarn = moneyWithoutTax + totalEarn;
      } else {
        totalEarn = array + totalEarn;
      }
    }

    if (livingCost <= totalEarn) {
      const savingPerMonth = totalEarn - livingCost;
      if (savingPerMonth == 0) {
        return 0;
      } else {
        return savingPerMonth;  
      }
    } else if (livingCost >= totalEarn) {
      return "earn more";
    }
  } else {
    return "invalid input";
  }
}

const checking = monthlySavings(arr, livingCost);
console.log(checking);
