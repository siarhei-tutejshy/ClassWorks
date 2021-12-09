/*

Note - одна заметка
Notes - каталог/база всех заметок
NotesUI - интерфейс пользователя (клиента)

*/

class Note {
    constructor(data) {
        if (data.content && data.content.length > 0) this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data);
    }

    get() {
        return this;
    }
}


class Notes {
    constructor() {
        this.lastId = 0;
        this.data = [];
    }

    add(data) {
        let note = new Note(data);
       
        if (note.data) {
            note.data.id = ++this.lastId;

            this.data.push(note);

            return true;
        }

        return false;
    }

    edit(id, data) {
        if (!id) return false;

        let note = this.data.find(note => {
            if (note.data.id == id) return note;
        });

        if (!note) return false;

        note.edit(data);

        return true;
    }

    remove(id) {
        if (!id) return false;

        let notes = this.data.filter(note => {
            return note.data.id != id;
        });

        this.data = notes;

        return true;
    }

    get() {
        return this.data;
    }
}


class NotesUI extends Notes {
    constructor() {
        super();

        this.init();
    }

    onAdd() {
        let title = this.inputTitle.value;
        let content = this.textareaContent.value;

        let data = {
            title: title,
            content: content
        };

        return this.add(data);
    }

    onEdit(id, titleElem, contentElem) {
        titleElem.contentEditable = "true";
        contentElem.contentEditable = "true";

        const save = _ => {
            titleElem.contentEditable = "false";
            contentElem.contentEditable = "false";

            let data = {
                title: titleElem.innerText,
                content: contentElem.innerText
            }; 

            if (this.edit(id, data)) this.update();
        }

        titleElem.addEventListener('keyup', event => {
            if (event.key == 'Enter' && event.ctrlKey == true) save();
        });

        contentElem.addEventListener('keyup', event => {
            if (event.key == 'Enter' && event.ctrlKey == true) save();
        });
    }

    onRemove(id) {
        if (this.remove(id)) this.update();
    }

    update() {
        let data = this.get();

        this.listElem.innerHTML = '';

        data.forEach(note => {
            let liElem = document.createElement('li');
            liElem.classList.add('notes__item');

            let titleElem = document.createElement('div');
            titleElem.classList.add('notes__item_title');
            titleElem.innerHTML = note.data.title;

            let contentElem = document.createElement('div');
            contentElem.classList.add('notes__item_content');
            contentElem.innerHTML = note.data.content;

            let btnsElem = document.createElement('div');
            btnsElem.classList.add('notes__item_btns');

            let btnEditElem = document.createElement('button');
            btnEditElem.classList.add('notes__item_btn_edit');
            btnEditElem.innerHTML = 'Edit';

            let btnRemoveElem = document.createElement('button');
            btnRemoveElem.classList.add('notes__item_btn_remove');
            btnRemoveElem.innerHTML = 'X';


            btnsElem.append(btnEditElem, btnRemoveElem);
            liElem.append(titleElem, contentElem, btnsElem);
            this.listElem.append(liElem);


            btnEditElem.addEventListener('click', _ => {
                this.onEdit(note.data.id, titleElem, contentElem);
            });

            btnRemoveElem.addEventListener('click', _ => {
                this.onRemove(note.data.id);
            });
        });
    }

    init() {
        
        let notesElem = document.createElement('div');
        notesElem.classList.add('notes');

        let h1Elem = document.createElement('h1');
        h1Elem.classList.add('notes__title');
        h1Elem.innerHTML = 'My Notes';

        let formElem = document.createElement('div');
        formElem.classList.add('notes__form');

        let inputTitleElem = document.createElement('input');
        inputTitleElem.setAttribute('type', 'text');
        inputTitleElem.setAttribute('name', 'title');
        inputTitleElem.setAttribute('placeholder', 'Title');

        let textareaContentElem = document.createElement('textarea');
        textareaContentElem.setAttribute('name', 'content');
        textareaContentElem.setAttribute('placeholder', 'Content');

        let btnAddElem = document.createElement('button');
        btnAddElem.classList.add('notes__btn_add');
        btnAddElem.innerHTML = 'Add';

        let listElem = document.createElement('ul');
        listElem.classList.add('notes__list');

        
        formElem.append(inputTitleElem, textareaContentElem, btnAddElem);
        notesElem.append(h1Elem, formElem, listElem);
        document.body.append(notesElem);


        btnAddElem.addEventListener('click', _ => {
            if (this.onAdd()) {
                inputTitleElem.value = '';
                textareaContentElem.value = '';
                
                this.update();
            }
        });


        this.inputTitle = inputTitleElem;
        this.textareaContent = textareaContentElem;
        this.listElem = listElem;
        
    }
}