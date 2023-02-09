const basicCard = document.getElementById("basic-card");
const essentialCard = document.getElementById("essential-card");
const premiumCard = document.getElementById("premium-card");
const choosePlanBasic = document.getElementById("choose-plan-basic");
const choosePlanEssentail = document.getElementById("choose-plan-essential");
const choosePlanPremium = document.getElementById("choose-plan-premium");
const home = document.getElementById("home");
const basicHome = document.getElementById("basic-home");
const essentialHome = document.getElementById("essential-home");
const premiumHome = document.getElementById("premium-home");
const backBtn = document.getElementById("back");
const leftDiv = document.getElementById("leftDiv");
const rightDiv = document.getElementById("rightDiv");
const basic = document.getElementById("basic");
const innerTxt = document.getElementById("innerTxt");
const smallTxtBasic = document.getElementById("smalltxt-Basic");
const smallTxtEssential = document.getElementById("smalltxt-Essential");
const smallTxtPremium = document.getElementById("smalltxt-Premium");
const wrapper = document.getElementById("wrapper");

//for basic button
function showBtnBasic() {
  choosePlanBasic.style.display = "block";
  smallTxtBasic.style.display = "block";
  essentialCard.style.opacity = "0.3";
  premiumCard.style.opacity = "0.3";
}
function hideBtnBasic() {
  choosePlanBasic.style.display = "none";
  smallTxtBasic.style.display = "none";
  essentialCard.style.opacity = "1";
  premiumCard.style.opacity = "1";
}

//for essential button
function showBtnEssential() {
  choosePlanEssentail.style.display = "block";
  smallTxtEssential.style.display = "block";
  basicCard.style.opacity = "0.3";
  premiumCard.style.opacity = "0.3";
}
function hideBtnEssential() {
  choosePlanEssentail.style.display = "none";
  smallTxtEssential.style.display = "none";
  basicCard.style.opacity = "1";
  premiumCard.style.opacity = "1";
}

//for premium button
function showBtnPremium() {
  choosePlanPremium.style.display = "block";
  smallTxtPremium.style.display = "block";
  basicCard.style.opacity = "0.3";
  essentialCard.style.opacity = "0.3";
}
function hideBtnPremium() {
  choosePlanPremium.style.display = "none";
  smallTxtPremium.style.display = "none";
  basicCard.style.opacity = "1";
  essentialCard.style.opacity = "1";
}

//goto basic pricing page
function basicPricing() {
  home.style.display = "none";
  basicHome.style.display = "block";
  backBtn.innerText = "< Choose Base Plan";
  wrapper.classList.add("bg");
}

//goto essential pricing page
function essentialPricing() {
  home.style.display = "none";
  essentialHome.style.display = "block";
  backBtn.innerText = "< Choose Base Plan";
  wrapper.classList.add("bg");
}
//goto premium pricing page
function premiumPricing() {
  home.style.display = "none";
  premiumHome.style.display = "block";
  backBtn.innerText = "< Choose Base Plan";
  wrapper.classList.add("bg");
}

function gotoHome() {
  home.style.display = "flex";
  basicHome.style.display = "none";
  essentialHome.style.display = "none";
  premiumHome.style.display = "none";
  backBtn.innerText = "< Restart";
  wrapper.classList.remove("bg");
}

setTimeout(function () {
  leftDiv.classList.remove("d-none");
  leftDiv.classList.add("animate");
}, 2000);

setTimeout(function () {
  basic.classList.remove("d-none");
  rightDiv.classList.add("p-2");
  basic.classList.add("moveup");
}, 2000);


setTimeout(function () {
  innerTxt.classList.remove("d-none");
  innerTxt.classList.add("animate");
}, 000);
