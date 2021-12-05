const Dom = function() {

    this.methods = [
        'html',
        'addClass',
        'on',
        'search',
        'attr'
    ]

    this.create = function(name) {
        if (name.length == 0) return;

        this.element = document.createElement(name);

        let dom = new Dom();
        dom.methods.forEach(m => {
            this.element[m] = dom[m];
        });

        return this.element;
    }

    this.html = function(html) {
        this.innerHTML = html;

        return this;
    }
    
    this.addClass = function(name) {
        if (name.length == 0) return;

        this.classList.add(name);

        return this;
    }

    this.on = function(name, func) {
        if (name.length == 0 || !func) return null;

        this.addEventListener(name, func);

        return this;
    }

    this.search = function(selector) {
        let element = document;

        if (this.nodeName && this.nodeName.length > 0) element = this;

        let result = element.querySelectorAll(selector);

        if (result.length == 0) return null;

        let dom = new Dom();
        result.forEach(elems => {
            dom.methods.forEach(m => {
                elems[m] = dom[m];
            });
        });

        if (result.length == 1) result = result[0];

        return result;
    }

/*
=============
Added methods
==============
*/ 

    this.attr = function(name, value) {
        if (name.length == 0) return;

        if  (!value) {
            return this.getAttribute(name);

        } else {
            this.setAttribute(name, value);
        }
    }

    this.removeClass = function(className) {
        if (className.length == 0) return;
        this.classList.remove(className);
    };

    this.toggleClass = function(className) {
        if (className.length == 0) return;
        this.classList.toggle(className);
    };

    this.hasClass = function(className) {
        if (className.length == 0) return;
        return this.classList.contains(className);
    };

    // this.append = function(element, newElement, beforeElement) {
    //      if (!element || !newElement) return;

    //     if(!beforeElement) {
    //         element.append(newElement);
    //     } else {
    //         element.before(newElement, beforeElement);
    //     }
        
    // };
};

const $ = new Dom();