var recipes = {
  key: 'value'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, recipes, {[key]: value});
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 var newRecipes = recipes[key] = value;
  return newRecipes;
}