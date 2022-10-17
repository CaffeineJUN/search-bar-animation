const searchBtn = document.querySelector('.search-btn')
const wrapper = document.querySelector('.wrapper')
const searchLine = document.querySelector('.search-data .line')

searchBtn.addEventListener('click', () => {
    wrapper.classList.add('active')
    searchBtn.style.display = 'none'
    console.log(wrapper)
    console.log(searchLine)

    searchLine.classList.add('active')
})
