const obj = {name: 'kolimuddin' , birthYear: 2033 , siteName: 'google'};

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
      obj["name"]+ 
      "@" +
      obj["birthYear"];
    return password;
  } else {
    return "invalid";
  }
}


console.log(password(obj));
