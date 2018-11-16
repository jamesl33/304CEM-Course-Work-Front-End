import { constants } from '../../constants'
import { helpers } from '../../helpers'

function _recipeToFormData(recipe) {
    const formData = new FormData()

    Object.keys(recipe).forEach(key => {
        if (key === 'steps') {
            let descriptions = []

            recipe.steps.forEach(step => {
                formData.append('images', step.image[0])
                descriptions.push(step.description)
            })

            formData.append(key, JSON.stringify(descriptions))
        } else {
            formData.append(key, recipe.key)
        }
    })

    return formData
}

function save(recipe) {
    return fetch(`${constants.api.url}/recipe/save`, Object.assign({}, constants.api.requests.multipart, { body: _recipeToFormData(recipe) }))
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

const recipe = {
    save,
    publish,
    unpublish
}

export { recipe }
