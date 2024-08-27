const headerLis = document.querySelectorAll('.header li');
const titles = document.querySelectorAll('#title');

const aboutSectionsImage = document.querySelectorAll('.about-sections img');
const aboutSectionsText = document.querySelectorAll('.about-sections-text')

function checkItems() {
    const scrollPosition = window.scrollY + window.innerHeight;

    function setAnimationTo(items, animation, delay = 0) {

        items.forEach((item, index) => {
            console.log('itme is :', item);
            item.style.opacity = 0;
            if (!item.classList.contains('animated')) {

                setTimeout(() => {
                    const itemTop = item.getBoundingClientRect().top + window.scrollY;
                    const itemBottom = itemTop + item.offsetHeight;
                    if (scrollPosition > itemTop && window.scrollY < itemBottom) {
                        item.style.opacity = 1;
                        item.classList.add(animation);
                        setTimeout(() => {
                            item.classList.add('animated');
                        }, 2000);
                    }
                }, index * delay);
            }
        });
    }
    setAnimationTo(aboutSectionsImage, 'show-item');
    setAnimationTo(aboutSectionsText, 'show-item');
    setAnimationTo(headerLis, 'show-item');

}

window.addEventListener('scroll', checkItems);


window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    checkItems();
});
