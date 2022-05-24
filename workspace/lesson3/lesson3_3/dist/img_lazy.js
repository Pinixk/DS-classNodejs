document.addEventListener('DOMContentLoaded', function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
    // [].slice : 유사배열이 됨, nodelist / .call : 유사배열을 실제 배열로 만듦
    let active = false
    const lazyLoad = function () {
        if (active === false) {
            active = true
            setTimeout(() => {
                lazyImages = lazyImages.map((lazyImage) => {
                    if (lazyImage.getBoundingClientRect().top <= window.innerHeight &&  // window.innerHeight은 scroll하면 document top값 보다 더 커진다
                        // getBoundingClientRect : el의 크기와 뷰포트에 상대적인 위치 정보를 제공
                        // window.innerHeight는 웹브라우저를 제외한 document의 높이
                        window.getComputedStyle(lazyImage).display !== 'none') {
                        // getComputedStyle : 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.classList.remove('lazy')
                        lazyImage.classList.add("fadein")
                        return null // 
                    } else return lazyImage
                }).filter(image => image)
                if (!lazyImages.length) {
                    document.removeEventListener("scroll", lazyLoad)
                } else active = false
                // !lazyImages.length의 값이 0이면 이벤트를 추가한다.
                // 0이 아닐 경우 active는 false 값을 가진다.
            }, 200)
        }
    }
    document.addEventListener("scroll", lazyLoad)
})