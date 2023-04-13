const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(cat) {
    cats.push(cat)
}
function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}
function destructivelyRemoveLastCat(cat) {
    cats.pop(cat)
}
function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat)
}

function appendCat(cat){
    const Gcats = [...cats, (cat)];
  return Gcats

    
   }
   function prependCat(cat) {
    const Ncats = [cat, ...cats];
    return Ncats
   }
   function removeLastCat(cat) {
   cats.pop(cat)
   const Wcats = [cat, cats];
   return Wcats
   }

function removeFirstCat(cat) {
    const Ccats = [cats, (cat)]
    Ccats.shift(cat, ...cats)
    return Ccats
}
