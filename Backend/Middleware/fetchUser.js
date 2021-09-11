//this basically gives you a token so that user can login later

const jwt = require("jsonwebtoken");

//secret is used to sign a jwt token
const secret = "Tamalisagood$oy";

const fetchUser = (req, res, next) => {

  //Get the users from JWT tokens and add the id to req objects
  const token = req.header("authToken");
  if (!token) {
    res
      .status(401)
      .send({ error: "PLEASE AUTHETICATE USING A VALID TOKEN !!" });
  }

  try {
    const data = jwt.verify(token, secret);
    req.user = data.user;
    next();
  }
  catch (error) {
    res.status(401).send({ error: "INVALID TOKEN" });
  }
};

module.exports = fetchUser;
