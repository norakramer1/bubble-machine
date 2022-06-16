export const accordion = () => {
  const button = document.querySelectorAll('#parameters > li > button')
  const sliders = document.querySelectorAll('#parameters > li > div')

  button[0].addEventListener('click', () => {
    sliders[0].classList.toggle('hidden')
    // sliders.splice(0,1)
    // console.log(sliders)
    // // console.log(diffParamDiv)
  })
  button[1].addEventListener('click', () => {
    sliders[1].classList.toggle('hidden')
  })
  button[2].addEventListener('click', () => {
    sliders[2].classList.toggle('hidden')
  })
  button[3].addEventListener('click', () => {
    sliders[3].classList.toggle('hidden')
  })
  button[4].addEventListener('click', () => {
    sliders[4].classList.toggle('hidden')
  })
  button[5].addEventListener('click', () => {
    sliders[5].classList.toggle('hidden')
  })
}