const searchBtn = document.querySelector('.search-btn')
const wrapper = document.querySelector('.wrapper')
const searchLine = document.querySelector('.search-data .line')
const searchData = document.querySelector('.search-data')
const input = document.querySelector('.search-data input')
const closeBtn = document.querySelector('.close-btn')

searchBtn.addEventListener('click', () => {
    wrapper.classList.add('active')
    console.log(searchData)
    searchData.style.visibility = 'visible'
    searchBtn.style.display = 'none'

    searchLine.classList.add('active')
})
