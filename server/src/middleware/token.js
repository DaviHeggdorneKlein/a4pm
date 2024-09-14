const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }

  try {
    const decoded = jwt.verify(token, "secreta");
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}

module.exports = authMiddleware;
