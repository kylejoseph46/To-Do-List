let list = document.getElementById('list')
let to_add = document.getElementById('add_value')
let to_remove = document.getElementById('remove_value')
let input_field = document.getElementById('input_field')

to_add.addEventListener("click", () => {
    let to_do_item = document.createElement('li')
    to_do_item.innerHTML = input_field.value
    list.appendChild(to_do_item)
})

to_remove.addEventListener("click", () => {
    let children = list.children
    list.removeChild(children[0])
})


