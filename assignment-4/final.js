function calculateMoney(ticketSale) {
  const guardMan = 500;
  const staffLunch = 8 * 50;
  const totalTicket = ticketSale * 120;
  const remainingMoney = totalTicket - (guardMan + staffLunch);
  if (ticketSale >= 0) {
    return remainingMoney;
  } else {
    return "Invalid Number";
  }
}

function checkName(name) {
  let lastWord = ["a", "y", "i", "e", "o", "u", "w"];
  if (typeof name === "string") {
    let lastAlphabet = name[name.length - 1].toLowerCase();  
    for (const word of lastWord) {
      if (word.toLowerCase() === lastAlphabet) {
        return "Good Name";
      }
    }
    return "Bad Name";
  } else {
    return "Invalid Input";
  }
}

function deleteInvalids(array) {
  let onlyNumber = [];
  if (Array.isArray(array)) {
    for (const arr of array) {
      if (typeof arr === "number" && !isNaN(arr)) {
        onlyNumber.push(arr);
      }
    }
    return onlyNumber;
  } else {
    return "Invalid Array";
  }
}

function password(obj) {
  let password = "";
  if (
    obj.hasOwnProperty("name") &&
    obj.hasOwnProperty("birthYear") &&
    obj.hasOwnProperty("siteName") &&
    obj["birthYear"].toString().length == 4
  ) {
    password =
      obj["siteName"][0].toUpperCase() +
      obj["siteName"].slice(1) +
      "#" +
      obj["name"] +
      "@" +
      obj["birthYear"];
    return password;
  } else {
    return "invalid";
  }
}

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
console.log(checkName("Protap Biswas"))

