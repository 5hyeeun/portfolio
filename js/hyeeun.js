(function () {
    const spanE1 = document.querySelector('main h2 span')
    const txt = ['💙Hyeeun Portfolio💙']
    let index = 0;
    let currentTxt = txt[index].split('')

    function writeTxt() {
        spanE1.textContent += currentTxt.shift()
        // 배열요소를 앞에서 부터 하나씩 출력
        // shift() : 배열 맨 앞요소를 추출하고 추출한 요소를 원본배열에서 삭제

        if (currentTxt.length !== 0) {// length : 길이 == 같다 !== 같지 않다
            // 아직 출력할 게 남아있다.
            setTimeout(writeTxt, Math.floor(Math.random() * 300))
        } else {
            // 배열에 있는 모든 요소들이 전부 출력이 되었다. => 지우는 함수 실행
            currentTxt = spanE1.textContent.split('')

            setTimeout(deleteTxt, 4000) // deleteTxt 함수를 3초 후에 실행해줘
        }
    }
    writeTxt()

    function deleteTxt() {
        currentTxt.pop()
        // pop() : 배열 요소를 끝에서부터 삭제

        spanE1.textContent = currentTxt.join('')

        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        } else {
            // 다음문장으로 넘어가기
            index = (index + 1) % txt.length
            currentTxt = txt[index].split('')
            writeTxt()
        }
    }
})()

const headerE1 = document.querySelector('header')
window.addEventListener('scroll', function () {
    // 실행
    this.requestAnimationFrame(sc)
})

function sc() {
    let bs = window.scrollY
    if (bs > 0) {
        headerE1.classList.add('on')
    } else {
        headerE1.classList.remove('on')
    }
}

const animationmove = function (selector) {
    const targetEl = document.querySelector(selector)
    const bs = window.scrollY
    const targetscrollY = targetEl.getBoundingClientRect().top + bs
    window.scrollTo({
        top: targetscrollY, behavior: 'smooth'
    })
}

const scrollmove = document.querySelectorAll('[data-animation-scroll="true"]')

// for(초기값; 범위; 증감식){
//     반복값
// }
for (let i = 0; i < scrollmove.length; i++) {
    scrollmove[i].addEventListener('click', function () {
        const target = this.dataset.target;
        animationmove(target)
    })
}

$('.poweroff').click(function () {
    $('.popupbox').show()
})