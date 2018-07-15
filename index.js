var recipes = {
  key: 'value'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, recipes, {[key]: value});
  return recipes;
}

function DestructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 var newRecipes = recipes[key] = value;
  return newRecipes;
}