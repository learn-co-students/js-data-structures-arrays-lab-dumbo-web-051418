// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  drivers2 = [...drivers, name]
  return drivers2

}

function  prependDriver(name) {
  drivers2 = [name,...drivers]
  return drivers2
}

function removeLastDriver() {
  drivers2 = drivers.slice(0, drivers.length - 1)
  return drivers2
}

function removeFirstDriver() {
  drivers2 = drivers.slice(1)
  return drivers2
}
