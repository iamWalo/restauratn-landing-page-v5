window.addEventListener('load', () => {
    const headerLis = document.querySelectorAll('.header li');
    const menuImg = document.querySelectorAll('.menu-image');
    const menuItems1 = document.querySelectorAll('#menu-container-1 .menu-item');
    const menuItems2 = document.querySelectorAll('#menu-container-2 .menu-item');
    const menuItems3 = document.querySelectorAll('#menu-container-3 .menu-item');
    const menuContainerImage1 = document.querySelector('#menu-container-1 .menu-image img');
    const menuContainerImage2 = document.querySelector('#menu-container-2 .menu-image img');
    const menuContainerImage3 = document.querySelector('#menu-container-3 .menu-image img');
    const titles = document.querySelectorAll('#title');

    const aboutSectionsImage = document.querySelectorAll('.about-sections img');
    const aboutSectionsText = document.querySelectorAll('.about-sections-text')

    console.log(aboutSectionsImage);

    function checkItems() {
        const scrollPosition = window.scrollY + window.innerHeight;

        function setAnimationTo(items, animation, delay = 0) {
            items.forEach((item, index) => {
                if (item) { // Check if the item is not null
                    if (!item.classList.contains('animated')) {
                        item.style.opacity = 0;
                        setTimeout(() => {
                            const itemTop = item.getBoundingClientRect().top + window.scrollY;
                            const itemBottom = itemTop + item.offsetHeight;
                            if (scrollPosition > itemTop && window.scrollY < itemBottom) {
                                item.classList.add(animation);
                                item.style.opacity = 1;
                                item.classList.add('animated');
                            } else {
                                item.classList.remove(animation);
                            }
                        }, index * delay);
                    }
                }
            });
        }

        setAnimationTo(titles, 'show-item');
        setAnimationTo([menuContainerImage1, menuContainerImage3], 'show-from-right');
        setAnimationTo([menuContainerImage2], 'show-from-left');
        setAnimationTo(aboutSectionsImage, 'show-item');
        setAnimationTo(aboutSectionsText, 'show-item');
        setAnimationTo(headerLis, 'show-item');
        setTimeout(() => {
            setAnimationTo(menuItems1, 'show-from-left', 100);
            setAnimationTo(menuItems2, 'show-from-right', 100);
            setAnimationTo(menuItems3, 'show-from-left', 100);
        }, 1000);
    }

    window.addEventListener('scroll', checkItems);

    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    checkItems();
});
