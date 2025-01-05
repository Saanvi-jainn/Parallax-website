let listBg = document.querySelectorAll('.banner .bg');
let titleBar = document.querySelector('.banner h1');
let listTab = document.querySelectorAll('.tab')

window.addEventListener('scroll', (event) => {
    // scrollY 1 the web scrollbar position (pixel)
    let top = this.scrollY;
    /* indexbis the order of class bg(0,1,2,3,...8) when scrolling the web, the class bg scroll down, the bigger the index, the faster the movement */
    listBg.forEach((bg,index) => {
        if(index != 0 && index != 8) {
            bg.style.transform = `translateY(${top*index/2}px)`;
        } else if(index == 0) {
            bg.style.transform = `translateY(${top/3}px)`;
        }
    })
    titleBar.style.transform = `translateY(${top*4/2}px)`
    /* parallax scroll in tab when tabs position is less than 500px from scrollbar position and active class to animation and vica versa*/

    listTab.forEach(tab => {
        if(tab.offsetTop - top < window.innerHeight - 100) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    })
})