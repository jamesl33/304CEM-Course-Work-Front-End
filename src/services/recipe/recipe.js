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

function load(id) {
    return fetch(`${constants.api.url}/recipe/load`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({id: id}) }))
        .then(helpers.api.handleResponse)
}

function publish(recipe) {
    return fetch(`${constants.api.url}/recipe/publish`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
        .then(helpers.api.handleResponse)
        .then(response => {
            helpers.history.push(response.url)
        })
}

function unpublish(recipe) {
    return fetch(`${constants.api.url}/recipe/unpublish`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
        .then(helpers.api.handleResponse)
}

function update(recipe) {
    return fetch(`${constants.api.url}/recipe/update`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
        .then(helpers.api.handleResponse)
}

const recipe = {
    save,
    load,
    publish,
    unpublish,
    update
}

export { recipe }