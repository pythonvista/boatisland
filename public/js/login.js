const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_intop_btn = document.querySelector("#sign-intop-btn");
const sign_uptop_btn = document.querySelector("#sign-uptop-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_uptop_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_intop_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
