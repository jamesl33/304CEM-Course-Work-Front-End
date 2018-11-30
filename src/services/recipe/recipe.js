/**
 * @module services:recipes
 */

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

/**
 * @description Send a recipe to the api so that it can be saved.
 * @param {Object} recipe - The recipe object that will be sent to the api.
 */
function save(recipe) {
    return fetch(`${constants.api.url}/recipe/save`, helpers.api.multipartRequest(_recipeToFormData(recipe)))
        .then(helpers.api.handleResponse)
}

/**
 * @description Request a recipe to loaded for editing. Will be used with the
 * RecipeEdit form.
 * @param {Integer} id - The id of the recipe to be loaded.
 */
function edit(id) {
    return fetch(`${constants.api.url}/recipe/edit`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Send a recipe to the api to save with the published flag set.
 * @param {Object} recipe - The recipe object to the send to the api.
 */
function publish(recipe) {
    return fetch(`${constants.api.url}/recipe/publish`, helpers.api.multipartRequest(_recipeToFormData(recipe)))
        .then(helpers.api.handleResponse)
        .then(response => {
            helpers.history.push(response.url)
        })
}

/**
 * @description Toggle the published flag for a recipe in the database.
 * @param {Integer} id - The id of the recipe to edit.
 */
function togglePublished(id) {
    return fetch(`${constants.api.url}/recipe/publish/toggle`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Send a recipe object to the api to be updated.
 * @param {Object} recipe - The recipe object with the updated fields.
 */
function update(recipe) {
    return fetch(`${constants.api.url}/recipe/update`, helpers.api.multipartRequest(_recipeToFormData(recipe)))
        .then(helpers.api.handleResponse)
}

/**
 * @description Load a recipe so that a user can view it. Will be used with the Recipe component.
 * @param {Integer} id - The id of the recipe to be loaded.
 */
function load(id) {
    return fetch(`${constants.api.url}/recipe/load`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Load five of the most recent recipes from the api.
 */
function recent() {
    return fetch(`${constants.api.url}/recipe/recent`, helpers.api.jsonRequest(JSON.stringify({})))
        .then(helpers.api.handleResponse)
}

/**
 * @description Load the top five recipes from the api.
 */
function top() {
    return fetch(`${constants.api.url}/recipe/top`, helpers.api.jsonRequest(JSON.stringify({})))
        .then(helpers.api.handleResponse)
}

/**
 * @description Have a user like a recipe.
 * @param {Integer} id - The id of the recipe that the user is liking.
 */
function like(id) {
    return fetch(`${constants.api.url}/recipe/like`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Have a user unlike a recipe.
 * @param {Integer} id - The id of the recipe the user is unliking.
 */
function unlike(id) {
    return fetch(`${constants.api.url}/recipe/unlike`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Mark a recipe as reported.
 * @param {Integer} id - The id of the recipe that the user is reporting.
 */
function report(id) {
    return fetch(`${constants.api.url}/recipe/report`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Search the database for recipes.
 * @param {String} query - The query that will be used when searching the database.
 */
function search(query) {
    return fetch(`${constants.api.url}/recipe/search`, helpers.api.jsonRequest(JSON.stringify({ query: query })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Load five random recipes that the user has created.
 * @param {Integer} id - The id of the user we are loading recipes for.
 */
function userRecipes(id) {
    return fetch(`${constants.api.url}/recipe/user`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
        .then(helpers.api.handleResponse)
}

/**
 * @description Load five random recipes that the user has liked.
 * @param {Integer} id - The id of the user we are loading recipes for.
 */
function likedRecipes(id) {
    return fetch(`${constants.api.url}/recipe/liked`, helpers.api.jsonRequest(JSON.stringify({ id: id })))
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
    report,
    search,
    userRecipes,
    likedRecipes
}

export { recipe }
