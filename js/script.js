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

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (event) => {
    return addElement(event, addForm.elements.element.value, addForm.elements.text.value, addForm.elements.attr.value, addForm.elements.value.value);
});

