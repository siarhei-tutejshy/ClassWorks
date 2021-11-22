const popup = function() {
    
    const elems = document.querySelectorAll('[data-popup]');
    if (elems.length == 0) return;

    const show = function(content) {
        const popupElem = document.createElement('div');
        const modalElem = document.createElement('div');
        const closeElem = document.createElement('div');
        const contentElem = document.createElement('div');

        popupElem.classList.add('popup');
        modalElem.classList.add('popup__modal');
        closeElem.classList.add('popup__close');
        contentElem.classList.add('popup__content');

        closeElem.innerHTML = 'X';
        contentElem.innerHTML = content;

        popupElem.append(modalElem);
        modalElem.append(closeElem, contentElem);

        document.body.append(popupElem);

        popupElem.addEventListener('click', close);
        // closeElem.addEventListener('click', close);
        
        const img = contentElem.querySelector('img'); 
        if (img) img.onload = function(event) {
            let wHeight = window.innerHeight;
            let iHeight = event.target.offsetHeight;
            
            if (iHeight > (wHeight * 0.7)) {
                event.target.style.height = (wHeight * 0.7) + 'px';
            }
        }
        
    }

    const close = function(event) {
        if (!event.target.classList.contains('popup') &&
            !event.target.classList.contains('popup__close')
        ) return;

        const popupElem = document.querySelector('.popup');
        if (!popupElem) return;

        popupElem.remove();
    }   

    const clickHandler = function(event) {
        event.preventDefault();

        let elem = event.target;
        let type = elem.dataset.popup;

        if (!type) {
            let parent = elem.closest('[data-popup]');
            
            if (!parent) return;

            type = parent.dataset.popup;

            if (!type) return;

            elem = parent;
        }

        let content = '';

        if (type == 'zoom') {
            const href = elem.href;

            if (!href) return;

            content = `<img src="${href}" alt="#" />`;
        }

        if (type == 'content') {
            const id = elem.dataset.id;

            if (!id) return;

            const idContent = document.querySelector('#' + id);

            if (!idContent) return;

            content = idContent.innerHTML;
        }

        if (!content) return;

        show(content);
    }

    elems.forEach(function(elem) {
        elem.addEventListener('click', clickHandler);
    });

}