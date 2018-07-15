var recipes = {
  key: 'value'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, recipes, {[key]: value});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey (recipes, key) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key];
  return recipes;
}