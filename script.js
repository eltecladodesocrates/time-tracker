const addItemButton = document.querySelector('#add-item-button')
const addItemInput = document.querySelector('#add-item-input')
const item = {
    description: ''
}

const createItem = (item) => {

    const itemContainer = document.createElement('div')
    const itemDeleteButton = document.createElement('button')
    

}

addItemButton.addEventListener('click', (e) => {
    
    alert(addItemInput.value)
    addItemInput.value = ''
    
})
