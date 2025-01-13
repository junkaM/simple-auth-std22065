const admin = require("../config/firebase");

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(201).json({ message: "Utilisateur créé", user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  // Pour le backend, la connexion se fait généralement sur le frontend.
  res.json({ message: "La connexion se fait côté frontend" });
};

module.exports = { signup, login };
