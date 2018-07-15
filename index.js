var recipes = {
  key: 'value'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey (recipes, key) {
  var newRecipes = Object.assign({}, recipes)
  return delete newRecipes.key;
  }

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key];
  return recipes;
}