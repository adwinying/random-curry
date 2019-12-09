import axios from 'axios'
import cheerio from 'cheerio'

const MAX_RECIPES = 9000
const RECIPES_PER_PAGE = 10
const RECIPE_URL = 'https://cookpad.com/search/%E3%82%AB%E3%83%AC%E3%83%BC'

const getRecipeEntryNum = () => Math.floor(Math.random() * MAX_RECIPES) + 1

const getRecipePageNum = (entryNum) => Math.floor((entryNum - 1) / RECIPES_PER_PAGE) + 1

const getRecipeIndexOnPage = (entryNum) => Math.floor((entryNum - 1) % RECIPES_PER_PAGE)

const fetchRecipePage = (pageNum) => axios
  .get(`${RECIPE_URL}?page=${pageNum}`)
  .then(({ data }) => data)

const parseHTML = (html) => cheerio.load(html)

const compileData = (div) => ({
  title: div.find('.recipe-title').text(),
  author: div.find('.recipe_author_name a').text(),
  description: div.find('.recipe_description').text(),
  img: div.find('.recipe-image img').attr('src'),
  ingredients: div.find('.material.ingredients').text()
    .replace('材料：', '').split('、'),
})

const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

export async function handler() {
  const entryNum    = getRecipeEntryNum()
  const pageNum     = getRecipePageNum(entryNum)
  const recipeIndex = getRecipeIndexOnPage(entryNum)

  const res = await fetchRecipePage(pageNum)
  const $   = parseHTML(res)
  const div = $(`#recipe_${recipeIndex}.recipe-preview`)

  const recipe = compileData(div)

  return response(200, recipe)
}

export default null
