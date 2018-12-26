const slider = (id: string = 'swiper', target: string = 'view') => {
  document.getElementById(target).innerHTML = `
    <div id="${id}">
      <div class="swiper-wrapper"></div>
    </div>
  `
  return document.getElementById(id)
}

export default slider
