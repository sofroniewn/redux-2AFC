var x = {
  'CHOICE_ZERO': 'FIO0',
  'TARGET_ZERO': 'FIO1',
  'CHOICE_ONE': 'FIO2',
  'TARGET_ONE': 'FIO3'
  }

var y = {'TARGET_ZERO': {
      mode: 1,
      value: 0
    },
    'TARGET_ONE': {
      mode: 1,
      value: 0
    }
}

console.log(y)
console.log(x)


for (var key in y) {
  console.log(key)
  console.log(x[key])
}

var dict = {};

for (var key in y) {
  console.log(key)
  console.log(x[key])
  console.log(y[key])
  dict[key] = null;
}

console.log(dict)