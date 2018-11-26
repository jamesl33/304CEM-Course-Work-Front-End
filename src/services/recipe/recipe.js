import { constants } from '../../constants'
import { helpers } from '../../helpers'

function _recipeToFormData(recipe) {
    const formData = new FormData()

    Object.keys(recipe).forEach(key => {
        if (key === 'image') {
            formData.append('images', recipe.image[0])
            formData.append(key, true)
        } else if (key === 'steps') {
            const descriptions = []

            recipe.steps.forEach(step => {
                if (step.image && step.image.length > 0) {
                    formData.append('images', step.image[0])
                }

                descriptions.push({
                    image: step.image && step.image.length > 0 ? true : false, // I need to support optional images per step
                    description: step.description
                })
            })

            formData.append(key, JSON.stringify(descriptions))
        } else {
            formData.append(key, recipe[key])
        }
    })

    return formData
}

function save(recipe) {
    return fetch(`${constants.api.url}/recipe/save`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
        .then(helpers.api.handleResponse)
}

function edit(id) {
    return fetch(`${constants.api.url}/recipe/edit`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({ id: id }) }))
        .then(helpers.api.handleResponse)
}

function publish(recipe) {
    return fetch(`${constants.api.url}/recipe/publish`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
        .then(helpers.api.handleResponse)
        .then(response => {
            helpers.history.push(response.url)
        })
}

function togglePublished(id) {
    return fetch(`${constants.api.url}/recipe/publish/toggle`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({id: id}) }))
        .then(helpers.api.handleResponse)
}

function update(recipe) {
    return fetch(`${constants.api.url}/recipe/update`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
        .then(helpers.api.handleResponse)
}

function load(id) {
    return fetch(`${constants.api.url}/recipe/load`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({ id: id }) }))
        .then(helpers.api.handleResponse)
}

function recent() {
    return fetch(`${constants.api.url}/recipe/recent`, Object.assign({}, constants.api.requests.json))
        .then(helpers.api.handleResponse)
}

function top() {
    return fetch(`${constants.api.url}/recipe/top`, Object.assign({}, constants.api.requests.json))
        .then(helpers.api.handleResponse)
}

function like(id) {
    return fetch(`${constants.api.url}/recipe/like`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({ id: id }) }))
        .then(helpers.api.handleResponse)
}

function unlike(id) {
    return fetch(`${constants.api.url}/recipe/unlike`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({ id: id }) }))
        .then(helpers.api.handleResponse)
}

function report(id) {
    return fetch(`${constants.api.url}/recipe/report`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({ id: id }) }))
        .then(helpers.api.handleResponse)
}

const recipe = {
    save,
    edit,
    publish,
    togglePublished,
    update,
    load,
    recent,
    top,
    like,
    unlike,
    report
}

export { recipe }
