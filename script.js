import Select from "./select.js"

const selectElements = document.querySelectorAll("[data-custom]")

//if more select elements are added in future we would loop over each 
selectElements.forEach(selectElement => {
    console.log(new Select(selectElement))
})