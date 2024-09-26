const items = document.querySelectorAll('.gallery-collection li')
const popup = document.querySelector('.popup')
const close = document.querySelector('.popup button')

// el은 li중 하나
items.forEach((el, index) => {
    // 영상 재상
    el.addEventListener('mouseenter', function () {
        el.querySelector('video').play()
    })
    // 마우스커서를 옮기면 영상 재상이 멈춤
    el.addEventListener('mouseleave', function () {
        el.querySelector('video').pause()
        // 영상이 처음부터 재생됨
        el.querySelector('video').currentTime = 0
    })
    el.addEventListener('click', function () {
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videosrc = el.querySelector('video').getAttribute('src')

        popup.querySelector('.txt h2').innerText = title
        popup.querySelector('.txt p').innerText = text
        popup.querySelector('video').setAttribute('src', videosrc)
        popup.classList.add('on')
        popup.querySelector('video').play()

    })
})

close.addEventListener('click', function () {
    popup.classList.remove('on')
    popup.querySelector('video').pause()
})