const items = document.querySelectorAll("section.onboarding article");
const onboardingStart = document.querySelector('button.onboarding-start')

let onboardingIndex = 1

onboardingStart.addEventListener("click", () => {
  document.querySelector(`article:nth-of-type(${onboardingIndex})`).classList.remove("active")
  onboardingIndex++

  document.querySelector(`article:nth-of-type(${onboardingIndex})`).classList.add("active")

});