// 'use strict';

//1, New {} is created
//2, function is called, this = {}
//3, {} linked to prototype
//4, function automatically return {}
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const vduong = new Person('Vduong', 2002);
// console.log(vduong);

// //prototypes
// console.log(Person.prototype);
// Person.prototype.calAge = function () {
//   console.log(2037 - this.birthYear);
// };

// vduong.calAge();

// console.log(vduong.__proto__);
// console.log(vduong.__proto__ === Person.prototype); // person.prototype không phải là prototype của  person . Person.prototype sẽ được làm nguyên mẫu của tất cả các đối tượng được tạo bởi hàm khởi tạo (Person contructor function)

// console.log(Person.prototype.isPrototypeOf(vduong));
// console.log(Person.prototype.isPrototypeOf(Person));

//Trong cơ chế kế thừa prototype của JavaScript, các đối tượng mới được tạo bằng cách sử dụng từ khóa new trên một hàm tạo sẽ có __proto__ trỏ đến thuộc tính prototype của hàm tạo đó.
//Vì vậy, __proto__ được sử dụng để truy cập đến các thuộc tính và phương thức của đối tượng prototype của một đối tượng cụ thể,
// trong khi prototype là thuộc tính được sử dụng để định nghĩa các phương thức và thuộc tính cho các đối tượng mới được tạo thông qua hàm tạo.
// .prototypeOfLinkObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(vduong.species);
// console.log(vduong.hasOwnProperty('firstName'));
// console.log(vduong.__proto__.hasOwnProperty('species'));

// const arr = [3, 6, 6, 5, 5, 6, 9, 9];

// Array.prototype.unique = function () {
//   return [...new Set(this)]; // ở đây sẽ trả về các phần tử chỉ xuất hiện một lần trong mảng arr là [3, 6, 5, 9], this ở đây trỏ đến mảng arr
// };

// console.log(arr.unique);

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */
// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} going at ${this.speed} km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} going at ${this.speed} km/h`);
// // };
// // const BMW = new Car('BMW', 120);
// // const Mercedes = new Car('Mercedes', 95);

// // BMW.accelerate();
// // Mercedes.accelerate();
// // BMW.brake();
// // Mercedes.brake();

// //Class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is  not a full name`);
  }
  /** 
   */
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there 😊');
    console.log(this);
  }
}

const jessica = new PersonCL('jessica Davis', 1996);
console.log(jessica);  
jessica.calAge();

jessica.greet();
PersonCL.hey();
// // 1. Classes are not hoisted
// // 2. Class are first-class  citizes điều này có nghĩa là chúng có thể truyền chúng vào các functions và cũng có thể trả lại chúng từ các functions
// // 3. Class are excuted in strict mode

// //Mọi đối tượng trong Javascript đều có thuộc tính setter và getter(lấy và đặt một giá trị)
// const walter = new PersonCL('Walter White', 1965);
// const account = {
//   owner: 'vvduong',
//   movements: [1200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest); // viết hàm latest như 1 một properties rất useful khi chúng ta đọc một thứ gì đó dưới dạng thuộc tính mà vẫn cần thực hiện một số phép tính trước đó

// account.latest = 50;
// console.log(account.movements);

// //Setter một phương thức cho phép ta thiết lập giá trị cho một thuộc tính. Khi một thuộc tính được định nghĩa là một setter, thì khi ta gán giá trị cho thuộc tính đó, nó sẽ được gán cho một biến hoặc thuộc tính khác được định nghĩa trong phương thức setter đó
// //Getter là một phương thức cho phép lấy giá trị của thuộc tính. Khi một thuộc tính được định nghĩa là một getter, thì khi ta gọi thuộc tính đó, nó sẽ trả về giá trị được tính toán bởi phương thức getter đó, thay vì trả về giá trị của thuộc tính đó.

// const PersonProto = {
//   calAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2000);
// sarah.calAge();

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */
// /////////////////////////////////////////////
// // Inheritance Between "Classes": Constructor Functions
// //Khi gọi lệnh một hàm thông thường keyword trong hàm mặc định là underfine
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// //linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();
//Challenge 3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
