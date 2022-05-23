document.addEventListener('DOMContentLoaded', function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
    // [].slice.call : 유사배열이나 iterable object를 배열로 만듦
    let active = false
    const lazyLoad = function () {
        if (active === false) {
            active = true
            setTimeout(() => {
                lazyImages = lazyImages.map((lazyImage) => {
                    if (lazyImage.getBoundingClientRect().top <= window.innerHeight &&  
                        // getBoundingClientRect : el의 크기와 뷰포트에 상대적인 위치 정보를 제공
                        // window.innerHeight는 웹브라우저를 제외한 다큐먼트의 높이
                        window.getComputedStyle(lazyImage).display !== 'none') {        
                        // getComputedStyle : 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.classList.remove('lazy')
                        lazyImage.classList.add("fadein")
                        return null
                    } else return lazyImage
                }).filter(image => image)
                // !lazyImages.length의 값이 0 아닐 경우 이벤트 추가
                // 0일 경우 active는 false 값을 가진다.
                if (!lazyImages.length) {
                    document.removeEventListener("scroll", lazyLoad)
                } else active = false
            }, 200)
        }
    }
    document.addEventListener("scroll", lazyLoad)
})