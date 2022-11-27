document.addEventListener('click', (e) => {
    if (e.target.dataset.type === 'remove') {
        const id = e.target.dataset.id
        remove(id).then(() => {
            e.target.closest('li').remove()
        })
    }
})

document.addEventListener('click', (e) => {
    if (e.target.dataset.type === 'edit') {
        const element = e.target.closest('li')
        const data = prompt('Новое название').trim()
        const id = e.target.dataset.id
        edit(id, data)
        element.firstElementChild.textContent = data
    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: "DELETE"
    })
}

async function edit(id, data) {
    if(data) {
        await fetch(`/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({note: data})
        })
    }
}






