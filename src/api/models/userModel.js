const db = require('../../config/db');

class User {
  constructor(id, nombre, edad) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }

  static getAllUsers() {
    console.log('Obteniendo todos los usuarios');
    return db.query('SELECT * FROM users')
      .then(([results, fields]) => {
        console.log(results);
        return results;
      })
      .catch(error => {
        console.error('Error en getAllUsers:', error);
        throw error;
      });
  }

  static getUserById(id) {
    console.log(`Obteniendo usuario con id: ${id}`);
    return db.query('SELECT * FROM users WHERE id = ?', [id])
      .then(([results, fields]) => {
        if (results.length > 0) {
          console.log(results[0]);
        } else {
          console.log('Usuario no encontrado');
        }
        return results;
      })
      .catch(error => {
        console.error('Error en getUserById:', error);
        throw error;
      });
  }

  static createUser(newUser) {
    console.log('Creando un nuevo usuario:', newUser);
    return db.query('INSERT INTO users (nombre, edad) VALUES (?, ?)', [newUser.nombre, newUser.edad])
      .then(([results, fields]) => {
        console.log(`Usuario creado con ID: ${results.insertId}`);
        return results;
      })
      .catch(error => {
        console.error('Error en createUser:', error);
        throw error;
      });
  }

  static updateUser(id, updatedUser) {
    console.log(`Actualizando usuario con id: ${id}`, updatedUser);
    return db.query('UPDATE users SET nombre = ?, edad = ? WHERE id = ?', [updatedUser.nombre, updatedUser.edad, id])
      .then(([results, fields]) => {
        if (results.affectedRows === 0) {
          console.log('Ningún usuario fue actualizado');
        } else {
          console.log(`Usuario con ID: ${id} ha sido actualizado`);
        }
        return results;
      })
      .catch(error => {
        console.error('Error en updateUser:', error);
        throw error;
      });
  }

  static deleteUser(id) {
    console.log(`Eliminando usuario con id: ${id}`);
    return db.query('DELETE FROM users WHERE id = ?', [id])
      .then(([results, fields]) => {
        if (results.affectedRows === 0) {
          console.log('Ningún usuario fue eliminado');
        } else {
          console.log(`Usuario con ID: ${id} ha sido eliminado`);
        }
        return results;
      })
      .catch(error => {
        console.error('Error en deleteUser:', error);
        throw error;
      });
  }
}

module.exports = User;
