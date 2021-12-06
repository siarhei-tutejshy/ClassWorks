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

/*
=================
Added methods
=================
*/

    this.attr = function(element, name, value) {
        if (!element || !name) return;

        if (!value) {
            return element.getAttribute(name);

        } else {
            element.setAttribute(name, value);
        }
    }

    this.removeClass = function(element, className) {
        if (!element || className.length == 0) return;
        element.classList.remove(className);
    }

    this.toggleClass = function(element, className) {
        if (!element || className.length == 0) return;
        element.classList.toggle(className);
    }

    this.hasClass = function(element, className) {
        if (!element || className.length == 0) return;
        return element.classList.contains(className);
    }

    this.append = function(element, newElement, beforeElement) {
         if (!element || !newElement) return;

        if(!beforeElement) {
            element.append(newElement);
        } else {
            element.insertBefore(newElement, beforeElement);
        } 
    };

};

const $ = new Dom();