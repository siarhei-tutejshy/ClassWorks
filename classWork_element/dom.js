const Dom = function() {

    this.create = function(name) {
        if (name.length == 0) return;

        return document.createElement(name);
    }

    this.html = function(element, html) {
        if (!element) return null;

        element.innerHTML = html;
    }

    this.search = function(element, selector) {
        if (!element) return null;

        let result = element.querySelectorAll(selector);

        if (result.length == 0) return null;

        if (result.length == 1) result = result[0];

        return result;
    }

    this.addClass = function(element, name) {
        if (!element || name.length == 0) return;

        element.classList.add(name);
    }

    this.on = function(element, name, func) {
        if (!element || name.length == 0 || !func) return null;

        element.addEventListener(name, func);
    }

};

const $ = new Dom();