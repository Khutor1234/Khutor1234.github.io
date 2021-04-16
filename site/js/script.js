window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');
    overlay = document.querySelector('.menu_overlay');
    services = document.querySelector('.services');
    btn = document.getElementById("myBtn");
    sections = document.querySelectorAll('section');
    body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        overlay.classList.toggle('menu_overlay_active');
        body.classList.toggle('overflow-hidden');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            overlay.classList.toggle('menu_overlay_active');
            body.classList.toggle('overflow-hidden');
        })
    });

    window.addEventListener('scroll', function() {
        let y = window.scrollY;
        if(y > 100 && document.documentElement.clientWidth > 576){
            btn.style.display = "block";
            btn.classList.add('animate__fadeIn');
        } else {
            btn.style.display = "none";   
        }
    });

    console.log(document.documentElement.clientWidth);
    
    btn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    });

    const animItems = document.querySelectorAll('._anim-items');

    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for(let index = 0; index < animItems.length; index++){
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                    animItem.classList.add('_active');
                } else {
                    if(!animItem.classList.contains('_anim-no-hide')){
                        animItem.classList.remove('_active');
                    }
                }

            }
        }
        function offset(el){
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        animOnScroll();
    }
})