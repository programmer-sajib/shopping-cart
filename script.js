// Buttons
const coverPlusBtn = document.getElementById("cover-plus-btn");
const coverMinusBtn = document.getElementById("cover-minus-btn");
const phonePlusBtn = document.getElementById("phone-plus-btn");
const phoneMinusBtn = document.getElementById("phone-minus-btn");

//Phone
function updatePhoneQuantity(isIncrease) {
  const phoneQuantity = document.getElementById("phone-quantity");
  const phoneQuantityString = phoneQuantity.value;
  const phoneQuantityNumber = parseFloat(phoneQuantityString);

  let newPhoneQuantity;
  if (isIncrease) {
    newPhoneQuantity = phoneQuantityNumber + 1;
  } else {
    newPhoneQuantity = phoneQuantityNumber - 1;
  }
  phoneQuantity.value = newPhoneQuantity;
  return newPhoneQuantity;
}

function updatePhonePrice(newPhoneQuantity) {
  const phonePrice = newPhoneQuantity * 1219;
  document.getElementById("phone-price").innerText = phonePrice;
}

phonePlusBtn.addEventListener("click", () => {
  const newPhoneQuantity = updatePhoneQuantity(true);
  updatePhonePrice(newPhoneQuantity);
  calculateTotalPrice();
});

phoneMinusBtn.addEventListener("click", () => {
  const newPhoneQuantity = updatePhoneQuantity(false);
  updatePhonePrice(newPhoneQuantity);
  calculateTotalPrice();
});

// Cover

function updateCoverQuantity(isIncrease) {
  const coverQuantity = document.getElementById("cover-quantity");
  const coverQuantityString = coverQuantity.value;
  const coverQuantityNumber = parseFloat(coverQuantityString);

  let newCoverQuantity;
  if (isIncrease) {
    newCoverQuantity = coverQuantityNumber + 1;
  } else {
    newCoverQuantity = coverQuantityNumber - 1;
  }

  coverQuantity.value = newCoverQuantity;

  return newCoverQuantity;
}

function updateCoverPrice(newCoverQuantity) {
  const coverPrice = newCoverQuantity * 59;
  document.getElementById("cover-price").innerText = coverPrice;
}

coverPlusBtn.addEventListener("click", () => {
  const newCoverQuantity = updateCoverQuantity(true);
  updateCoverPrice(newCoverQuantity);
  calculateTotalPrice();
});

coverMinusBtn.addEventListener("click", () => {
  const newCoverQuantity = updateCoverQuantity(false);
  updateCoverPrice(newCoverQuantity);
  calculateTotalPrice();
});

// Calculation

function priceFromId(id) {
  const phoneTotalPrice = document.getElementById(id);
  const phoneTotalPriceString = phoneTotalPrice.innerText;
  const phoneTotalPriceNumber = parseFloat(phoneTotalPriceString);
  return phoneTotalPriceNumber;
}
function setTextElement(id, value) {
  const getTextElement = document.getElementById(id);
  getTextElement.innerText = value;
}

function calculateTotalPrice() {
  const phonePrice = priceFromId("phone-price");
  const coverPrice = priceFromId("cover-price");
  const subtotal = phonePrice + coverPrice;
  setTextElement("subtotal", subtotal);

  //tax
  const tax = parseFloat((subtotal * 0.1).toFixed(2));
  setTextElement("tax", tax);

  const total = subtotal + tax;
  setTextElement("total", total);
}
