var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten (Bailey) {
  kittens.push(Bailey);
  return kittens;
}

function destructivelyPrependKitten (Bailey) {
  kittens.unshift(Bailey);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(Bailey) {
  return [...kittens, Bailey]
}

