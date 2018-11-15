function save(recipe) {
    console.log('Save')
}

function publish(recipe) {
    console.log('Publish')
}

function unpublish(recipe) {
    console.log('Unpublish')
}

const recipe = {
    save,
    publish,
    unpublish
}

export { recipe }
