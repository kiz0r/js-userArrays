/* Для
      function User(name, surname, age, isMale, email, isSubscribed) {
        this.firstName = name;
        this.lastName = surname;
        this.age = age;
        this.isMale = isMale;
        this.email = email;
        this.isSubscribed = isSubscribed;
      }

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

      прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести на прототип.

      1.2 Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
      1.3 Видалити з масиву користувача з email useremail5@gmail.com
      1.4 Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com
      1.5 Перевірити, чи всі користувачі підписані (subscribed).
*/
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

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

const schoolGirlsNamesArray = [];

/*  Functions
  function detectSchoolGirl(obj, arrayToPush) {
    for (let i = 0; i < 100; i++) {
      if (obj[i].age >= 6 && obj[i].age <= 18 && !obj[i].isMale) {
        arrayToPush.push(obj[i].getFullName());
      }
    }
  }

  detectSchoolGirl(users, schoolGirlsNamesArray);

  function deleteUserWithSelectedEmail(obj, selectedEmail) {
    for (let i = 0; i < 100; i++) {
      if (obj[i].email === selectedEmail) {
        obj.splice(i, 1);
      }
    }
  }

  deleteUserWithSelectedEmail(users, 'useremail5@gmail.com');
*/

let counter = 0;

for (let i = 0; i < 100; i++) {
  // search and push schoolgirls
  if (users[i].age >= 6 && users[i].age <= 18 && !users[i].isMale) {
    schoolGirlsNamesArray.push(users[i].getFullName());
  }
  // is there user with useremail99@gmail.com ?
  if (users[i].email === 'useremail99@gmail.com') {
    console.log('There is user with useremail99@gmail.com');
  }
  if (users[i].isSubscribed) {
    counter++;
  }
  // search user with email useremail5@gmail.com
  if (users[i].email === 'useremail5@gmail.com') {
    delete users[i];
  }
}

console.group('SchoolGirs fullnames');
console.dir(schoolGirlsNamesArray);
console.groupEnd();

console.group('users but without user, which has useremail5@gmail.com');
console.dir(users);
console.groupEnd();

if (counter !== users.length) {
  console.log('Not all users are subscribed.');
} else {
  console.log('All users are subscribed.');
}
