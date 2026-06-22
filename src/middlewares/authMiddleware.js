const jwtUtil =
require("../utils/jwt");

const authMiddleware =
(req, res, next) => {

    const authHeader =
    req.headers.authorization;

    if (!authHeader) {

        return res
        .status(401)
        .json({
            message:
            "Token requerido"
        });

    }

    const token =
    authHeader.split(" ")[1];

    try {

        const payload =
        jwtUtil.verifyToken(
            token
        );

        req.user =
        payload;

        next();

    } catch {

        return res
        .status(401)
        .json({
            message:
            "Token inválido"
        });

    }

};

module.exports =
authMiddleware;