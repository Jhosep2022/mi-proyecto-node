const User = require('../models/UserModel');

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.getAllUsers(); 
      res.json(users); 
    } catch (error) {
      res.status(500).send('Error al obtener usuarios');
    }
  };
  

exports.getUserById = async (req, res) => {
try {
    const users = await User.getUserById(req.params.id);
    if (users.length === 0) {
    return res.status(404).send('Usuario no encontrado');
    }
    res.json(users[0]);
} catch (error) {
    res.status(500).send('Error al obtener el usuario');
}
};
  


exports.createUser = async (req, res) => {
    try {
      const newUser = new User(null, req.body.nombre, req.body.edad);
      const result = await User.createUser(newUser);
      res.status(201).send(`Usuario creado con ID: ${result[0].insertId}`);
    } catch (error) {
      res.status(500).send('Error al crear usuario');
    }
  };
  


  exports.updateUser = async (req, res) => {
    try {
      // Aquí deberías cambiar req.body.name por req.body.nombre
      const updatedUser = new User(req.params.id, req.body.nombre, req.body.edad);
      await User.updateUser(req.params.id, updatedUser);
      res.send('Usuario actualizado correctamente');
    } catch (error) {
      res.status(500).send('Error al actualizar usuario');
    }
  };

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.send('Usuario eliminado correctamente');
  } catch (error) {
    res.status(500).send('Error al eliminar usuario');
  }
};
