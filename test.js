let assert = require('assert')

console.log('123')

function test () {

}

let asd = async () => { }

assert(1 === 1)

asd()


class C extends test {
  // #private = 1;
  // _asd = 34;
  // ads = 123;
  constructor () {
    super(asd)
  }

  get asd () {

  }
}


console.log(new C())
