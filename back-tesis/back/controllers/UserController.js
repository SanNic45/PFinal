import LoginModel from "../models/LoginModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await LoginModel.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const usuario = await LoginModel.findOne({
      where: { id: req.params.id },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  
  // Buscar el usuario en la base de datos
  const user = await LoginModel.findOne({ where: { username } });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Usuario no encontrado' });
  }

  // Puedes generar y devolver un token JWT si es necesario

  res.json({ message: 'Inicio de sesión exitoso' });
};
