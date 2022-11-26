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
        const data = window.prompt('Новое название')
        const id = e.target.dataset.id
            edit(id, data).then(() => {
                location.reload()
            })
    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: "DELETE"
    })
}

async function edit (id) {
    await fetch(`/${id}`, {
        method: 'PUT',
    })
}


