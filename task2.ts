// Завдання 2
// Класи Employee та Manager з модифікаторами доступу

class Employee {
  public name: string;           // доступна всім
  private department: string;    // доступна лише всередині класу Employee
  protected salary: number;     // доступна всередині класу Employee та його підкласів

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
    this.salary += 10000; // збільшуємо salary на 10000
  }
}

// Тестування
const employee = new Employee("Петро", "IT", 50000);
const manager = new Manager("Марія", "IT", 50000);

console.log(employee.getEmployeeDetails());
console.log(manager.getEmployeeDetails());

export {};
