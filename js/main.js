function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

// прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести на прототип.
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

// console.dir(users);

// 1.2 Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const sortedArray = users.filter(
  (el) => el.age >= 6 && el.age <= 18 && !el.isMale
);

const schoolGirlsNamesArray = sortedArray.map((el) => el.getFullName());

console.group('SchoolGirls fullnames');
console.dir(schoolGirlsNamesArray);
console.groupEnd();

// 1.3 Видалити з масиву користувача з email useremail5@gmail.com
const changedArray = users.filter((el) => el.email !== 'useremail5@gmail.com');

console.group('Array without user, which has useremail5@gmail.com');
console.dir(changedArray);
console.groupEnd();

// 1.4 Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com
const answer = users.some((el) => el.email === 'useremail99@gmail.com');

answer === true
  ? console.log('There is user with this email.')
  : console.log('There is not user with this email.');

// 1.5 Перевірити, чи всі користувачі підписані (subscribed).
const answer1 = users.every((el) => el.isSubscribed === true);

answer1 === true
  ? console.log('All users are subsribed.')
  : console.log('Not all users are subscribed.');
