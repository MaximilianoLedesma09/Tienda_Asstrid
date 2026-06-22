const authService = require('../services/authServices');

const jwtUtil = require('../utils/jwt');

const login = async (req, res) => {
    console.log(req.body);
    const { name, password } = req.body;
    const admin = authService.login(name, password);
     if (!admin) {

        return res
        .status(401)
        .json({
            message:
            "Credenciales inválidas"
        });

    }
        const token =
        jwtUtil.generateToken({
            id: admin.id,
            role: admin.role
        });

    res.json({
        token
    });
};

module.exports = {
    login
};
