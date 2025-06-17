// Завдання 1
// Клас Student з скороченою ініціалізацією

class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: string
  ) {}
}

// Тестування
const student = new Student("Іван", 20, "A");
console.log(student.name, student.age, student.grade);

export {};
