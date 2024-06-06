// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('mydb.db');

// db.run(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT, 
//     name TEXT NOT NULL,
//     age INTEGER NOT NULL
// )`);
// module.exports = {
//     async getUsers() {
//         try {
//             const users = await new Promise((resolve, reject) => {
//             db.all('SELECT * FROM users', [], (err, rows) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(rows)
//                 }
//             });
//         });
//         return users;
//     } catch (err) {
//         return null;
//     }
// },

// async addUser(user) {
//     const lastID = await new Promise((resolve, reject) => {
//         db.run('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age], function (err) {
//         if (err) {
//             reject(err); 
//         } else {
//             resolve(this.changes);
//         }
//     });
// });
// return { id: lastID, ...user };
// },

// async updateUser(id, updatedData) {
//     const changes = await new Promise((resolve, reject) => {
//         db.run('UPDATE users SET name = ?, age = ?) WHERE id = ?', [updatedData.name, updatedData.age, id], function (err) {
//         if (err) {
//             reject(err); 
//         } else {
//             resolve(this.changes);
//         }
//     });
// });
// if (changes === 0) {
//     return null;
// }
// return this.getUserById(id);
// },

// async deleteUser(id) {
//     const changes = await new Promise((resolve, reject) => {
//         db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
//         if (err) {
//             reject(err); 
//         } else {
//             resolve(this.changes);
//         }
//     });
// });
// return changes > 0;
// },

// async getUserById(id) {
//     const user = await new Promise((resolve, reject) => {
//         db.run('SELECT * FROM users WHERE id = ?', [id], (err,row) => {
//         if (err) {
//             reject(err); 
//         } else {
//             resolve(this.changes);
//         }
//     });
// });
// return user;
// }
// };
    // getUsers: () => users,
    // addUser: (user) => {
    //     users.id = currentId++;
    //     users.push(user);
    // },
    // updateUser: (id, updateData) => {
    //     const userIndex = users.findIndex(u => u.id === id);
    //     if (userIndex !== -1) {
    //         user[userIndex] = { ...users[userIndex], ...updateData };
    //         return users[userIndex];
    //     }
    //     return null;
    // },
    // deleteUser: (id) => {
    //     const userIndex = users.findIndex(u => u.id === id);
    //     if (userIndex !== -1) {
    //         users.splice(userIndex, 1);
    //         return true;
    //     }
    //     return false;
    // },
    // getUserById: (id) => users.find(u => u.id ===id)
    // };
