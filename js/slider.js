
let sliderExamples = document.querySelector('.slider-examples')

let back = document.querySelector('.back')
let next = document.querySelector('.next')

let number = 0

let images = document.querySelectorAll('.slider .slider-box')

sliderExamples.style.width = `${100 * images.length}%`

let changeSlider = (number) => {
  sliderExamples.style.transform = `translateX(-${25 * number}%)`
}

let nextSlider = () => {
  if(number == images.length - 1){
    number = 0
  }else{
    number++
  }
  changeSlider(number)
}

let backSlider = () => {
  if(number == 0){
    number = images.length - 1
  }else{
    number--
  }
  changeSlider(number)
}

next.addEventListener('click', nextSlider )
back.addEventListener('click', backSlider)

setInterval(() => {
  changeSlider(number)
  if(number == images.length - 1){
    number = 0
  }else{
    number++
  }
}, 3000)
