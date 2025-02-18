function validContact(contact) {
  const firstNumber = contact[0];
  const secoundNumber = contact[1];
  const firstPhoneNumber = ["0"];
  const secoundPhoneNumber = ["1"];
  if (typeof contact !== "string") {
    return "invalid";
  } else if (contact.length !== 11) {
    return false;
  } else if (!firstPhoneNumber.includes(firstNumber)) {
    return false;
  } else if (!secoundPhoneNumber.includes(secoundNumber)) {
    return false;
  } else if (contact.includes(" ")) {
    return false;
  } else {
    return true;
  }
}
console.log(validContact("01819234567"));
console.log(validContact("0181923 4567"));
console.log(validContact("018192345679"));
console.log(validContact(["01987654321"]));
console.log(validContact("01345678900"));
console.log(validContact("02145678900"));
console.log(validContact(true));
