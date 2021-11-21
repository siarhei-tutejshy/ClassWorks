const slider = function(){
    const init = function(slider) {
        const list = slider.querySelector('ul');

        if (!list) return;

        const items = list.querySelectorAll('li');

        if (items <= 1) return;

        const btnPrev = slider.querySelector('.slider__prev');
        const btnNext = slider.querySelector('.slider__next');
        list.style.width = `${list.offsetWidth + 1}px`;

        const prevNext = function(event) {
            const dir = event.target.classList.contains('slider__prev') ? 'prev' : 'next';
            
            let x = list.style.transform || '0';

            x = x.replace('translateX(', '');
            x = x.replace(')', '');
            x = Math.abs(parseInt(x));

            // доработать функцию для листания элементов с большим кол-вом в листе
            // функция должна работать автоматически, если меняется ширина каждого сладай в CSS
            // нужно в функции при каждом клике получать ширину первого слайда
            
            // code
           
            const [item, ...others] = items;
            let c = (item.offsetWidth) + ((parseInt(getComputedStyle(item).margin)*2))
            let stopCoord = ((item.offsetWidth*(items.length - (list.offsetWidth/item.offsetWidth))))

            

            if (dir == 'next' && x < stopCoord) x += c;
            if (dir == 'prev' && x > 0) x -= c;
            // if (x >= list.offsetWidth*2) x -=1
            console.log(c)
            console.log(x)
            console.log(list.offsetWidth, list.getBoundingClientRect().width)
            console.log(item.offsetWidth, )
            console.log('---------------')


            // code

            list.style.transform = `translateX(-${x}px)`;
            
        }

        if (!btnPrev || !btnNext) return;

        btnPrev.addEventListener('click', prevNext);
        btnNext.addEventListener('click', prevNext);
    };
    
    const elems = document.querySelectorAll('.slider');

    elems.forEach(function(elem) {
        init(elem);
    });

}();