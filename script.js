elSalesButtonMonth = document.querySelector("#sales__button__month");
elSalesButtonWeek = document.querySelector("#sales__button__week");
elInput = document.querySelector(".todo-item__checkbox");
elInputSecond = document.querySelector(".input-second");
elInputThird = document.querySelector(".input-third");
elInputFourth = document.querySelector(".input-fourth");
elFollowBtn = document.querySelector(".activity-follow-btn");
elPlus = document.querySelector(".plus");

elSalesButtonWeek.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("bosildi");

  elSalesButtonWeek.classList.add("sales__value__button-active-clicked");
  elSalesButtonMonth.classList.add("sales__value__button-nonactive-clicked");
});

elSalesButtonMonth.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("bosildi");
  elSalesButtonWeek.classList.remove("sales__value__button-active-clicked");
  elSalesButtonMonth.classList.remove("sales__value__button-nonactive-clicked");
});

// elInput.addEventListener("change", (evt) => {
//   if (elInput.checked) {
//     console.log("true");
//     const closestP = elInput.closest("p");
//     console.log(closestP);
//   } else {
//     console.log("false");
//   }
// });

// elInputSecond.addEventListener("change", () => {
//   if (elInputSecond.checked) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// });

// elInputThird.addEventListener("change", () => {
//   if (elInputThird.checked) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// });

// elInputFourth.addEventListener("change", () => {
//   if (elInputFourth.checked) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// });

elFollowBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  elFollowBtn.textContent = "Following";
  elFollowBtn.classList.toggle("activity-follow-btn-follow");
  elPlus.classList.toggle("plusclicked");
});
