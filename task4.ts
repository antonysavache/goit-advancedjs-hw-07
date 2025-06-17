// Завдання 4
// Система класів Key, Person, House, MyHouse

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house');
    } else {
      console.log('Door is closed, cannot enter');
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door is now open');
    } else {
      console.log('Wrong key, door remains closed');
    }
  }
}

// Тестування сценарію
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

console.log('Trying to open door...');
house.openDoor(person.getKey());

console.log('Trying to enter house...');
house.comeIn(person);

export {};
