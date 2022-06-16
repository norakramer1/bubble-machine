export const accordion = () => {
  const buttons = document.querySelectorAll('#parameters > li > button')
  const parameters = document.querySelectorAll('#parameters > li > div')

  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      const paramArr = Array.from(parameters)
      const btnArr = Array.from(buttons)
      const iBtn = btnArr.indexOf(e)
      const iParam = paramArr.indexOf(parameters[iBtn])
      parameters[iBtn].classList.toggle('hidden')
      paramArr.splice(iParam, 1)
      paramArr.forEach((e) => {
        e.classList.add('hidden')
      })
    })
  })
}
