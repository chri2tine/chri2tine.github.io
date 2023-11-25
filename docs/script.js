//Credits to: https://www.youtube.com/watch?v=PsNaoDhzQm0&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2&index=1
const initSlider = () => {
    const slideButtons = document.querySelectoorAll(".slider-wrapper .slide-button");
    const imageList = document.querySelectorAllI(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button=> {
        button.addEventListener("click", ()=> {
            const direction = button.id === "prev.slide" ? -1 : 1;
            const scrollAmount  = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavrio: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "black";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "black";
    }

    // const updateScrollThumbPosition = () => {
    //     const scrollPosition = imageList.scrollLeft;
    //     const thumbPosition = (scrollPosition / maxScrollLeft) * ();
    // }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        //updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);