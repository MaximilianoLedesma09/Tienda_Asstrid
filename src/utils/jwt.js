const jwt = require("jsonwebtoken");

const SECRET = "mi_clave";

const generateToken = (payload) => {

    return jwt.sign(
        payload,
        SECRET,
        {
            expiresIn: "24h"
        }
    );

};

const verifyToken = (token) => {

    return jwt.verify(
        token,
        SECRET
    );

};

module.exports = {
    generateToken,
    verifyToken
};