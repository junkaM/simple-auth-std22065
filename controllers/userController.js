const admin = require("../config/firebase");

const getUser = async (req, res) => {
  const { uid } = req.params;

  try {
    const userRecord = await admin.auth().getUser(uid);
    res.status(200).json({ user: userRecord });
  } catch (error) {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
};


const updateUser = async (req, res) => {
  const { uid } = req.params;
  const { email, displayName } = req.body;

  try {
    const updatedUser = await admin.auth().updateUser(uid, {
      email,
      displayName,
    });
    res.status(200).json({ message: "Utilisateur mis à jour", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { uid } = req.params;

  try {
    await admin.auth().deleteUser(uid);
    res.status(200).json({ message: "Utilisateur supprimé" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
};