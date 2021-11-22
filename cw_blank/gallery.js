const gallery = function() {
    const elems = document.querySelectorAll('.gallery__thumbs a');
    if (elems.length == 0) return;
    
    const show = function(content){
        let views = document.querySelectorAll('.view');
        views.forEach(v => v.remove());
        let gallery = document.querySelector('.gallery__preview');
        let view = document.createElement('div');
        view.classList.add('view');
        view.innerHTML = content
        gallery.append(view);

        let cls = document.querySelector('.gallery__preview');
        cls.classList.remove('hide')
        cls.addEventListener('click', close)
    }
    const close = function () {
        document.querySelector('.view').remove();
        document.querySelector('.gallery__preview').classList.add('hide')
    }

    const clickHandler = function(event) {
        event.preventDefault();
        let elem = event.target;
        let link = elem.closest('a');
        let href = link.href;
        content = `<img src="${href}" alt="#" />`


        show(content)
        
    }

elems.forEach(elem => {
    elem.addEventListener('click', clickHandler )
    console.log(elem)
})
    
};

gallery(); // id