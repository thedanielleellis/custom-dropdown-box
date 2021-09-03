export default class Select {
    //this constructor takes the slectElement from index.html
    constructor(element) {
    this.element = element
    //add some options into our list 
    this.options = getFormattedOptions(element.querySelectorAll('option'))
    //create out own custom select element 
    this.customElement = document.createElement('div')
    this.labelElement = document.createElement('span')
    this.optionsCustomElement = document.createElement('ul')
    setupCustomElement(this)
    //so that customElement shows on page:
    element.after(this.customElement)
    }
} 

//so that .setup is not avaiable publicly we will put out of class 
function setupCustomElement(select){
    select.customElement.classList.add('custom-select-container')

    select.labelElement.classList.add('custom-select-value')
    select.customElement.append(select.labelElement)

    select.optionsCustomElement.classList.add('custom-select-options')
    select.customElement.append(select.optionsCustomElement)
}

//outside of class, convert option elements to array to use map b/c its not avaiable with querySelectorAll, oop through option elements, 
function getFormattedOptions(optionElements) {
    [...optionsElements].map(optionElement => {
        return {
            value:optionElement.value,
            label: optionElement.label,
            selected: optionElement.selected,
            element: optionElement
        }
    })
}