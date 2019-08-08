const { assert, assertPeer, throwUser } = require('../assert');

function someFunction () {}

const func = async () => {};

assert(1 + 1 === 2);


class C extends test {
  constructor (a, b, c) {
    super(a, b);
    assertPeer.isPlainObject(a);
    assertPeer(b === c);
    test(1, 2);
    func(b, c);
  }

  hello (...args) {
    assert
      .isArguments(args);
    for (const arg of args) {
      assert(arg.foo === arg.bar);
      someFunction('asd');
      console.log(arg);
      arg.do(123);
      return arg;
    }
    throwUser();
  }

  set asd (arg) {
    assert(arg > 5);
    this.arg = arg;
    console.log(`set ${arg}`);
  }

  get asd () {
    someFunction(this);
    return this.arg;
  }
}


console.log(new C());
