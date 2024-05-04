const { verify } = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, "kemognePenka1234", (error, decoded) => {
        if (error) {
          return res.json({
            success: 0,
            message: "Invalide token",
          });
        } else {
          next();
        }
      });
    } else {
      res.status(500).json({
        success: 0,
        message: "access denied! unauthorised user",
      });
    }
  },
};
