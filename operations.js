//operations.js

// type export 1 
const addition = (nb1, nb2) => {
  return nb1 + nb2
}

// type export 2 
exports.add = (nb1, nb2) => {
  return nb1 + nb2
}

const sub = (nb1, nb2) => {
  return nb1 - nb2
}

const mul = (nb1, nb2) => {
  return nb1 * nb2
}

const div = (nb1, nb2) => {
  return nb1 / nb2
}

const modulo = (nb1, nb2) => {
  return nb1 % nb2
}

exports.add = addition
exports.sub = sub
exports.mul = mul
exports.div = div
exports.modulo = modulo