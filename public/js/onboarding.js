const items = document.querySelectorAll("section.onboarding article")
const onboardingStart = document.querySelector('button.onboarding-start')
const userInfo = document.querySelector('p.user-info')
const documentInfo = document.querySelector('p.document-info')
const userSvg = document.querySelector('button.user-svg img')
const documentSvg = document.querySelectorAll('button.document-svg img')

console.log(userSvg)

let onboardingIndex = 1

onboardingStart.addEventListener("click", () => {
  document.querySelector(`article:nth-of-type(${onboardingIndex})`).classList.remove("active")
  onboardingIndex++

  document.querySelector(`article:nth-of-type(${onboardingIndex})`).classList.add("active")

});

userSvg.addEventListener('click', () => {
  if (userSvg.src.match('img/user.svg')) {
    userInfo.classList.add('show-user')
    userSvg.src = 'img/user-filled.svg'
  } else if (userSvg.src.match('img/user-filled.svg')) {
    userSvg.src = 'img/user.svg'
    userInfo.classList.remove('show-user')
  }

})

console.log(documentSvg)



  documentSvg.forEach(document => {
   
    document.addEventListener('click', () => {
    if (document.src.match('img/document.svg')) {
      documentInfo.classList.add('show-document')
      document.src = 'img/document-filled.svg'
    } else if (document.src.match('img/document-filled.svg')) {
      documentInfo.classList.remove('show-document')
      document.src = 'img/document.svg'
    }
  })
})