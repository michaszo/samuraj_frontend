const addElement = (event, element_, text_, attr_, value_) => {
    event.preventDefault();
    const element = document.createElement(element_);
    if (text_) {
        const text = document.createTextNode(text_);
        element.appendChild(text);
    }
    if (attr_) {
        element.setAttribute(attr_, value_);
    }
    document.querySelector('.content').appendChild(element);
}

const searchElements = (event, phrase) => {
    event.preventDefault();
    const infoElement = document.querySelector('.result');
    const elements = document.querySelectorAll(phrase);
    
    if(elements.length) {
        infoElement.innerHTML = `<h2 class="result__info">${elements.length} ${phrase} found.</h2>`;
    } else {
        infoElement.innerHTML = `<h2 class="result__info">No ${phrase} found.</h2>`;
        return;
    }
    
}

const showInfo = () => {

};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (event) => {
    return addElement(event, addForm.elements.element.value, addForm.elements.text.value, addForm.elements.attr.value, addForm.elements.value.value);
});

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (event) => {
    return searchElements(event, searchForm.elements.phrase.value);
});