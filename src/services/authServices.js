const adminUser = require('../data/user');

const login = (name, password) => {

    if (name === adminUser.name && password === adminUser.password) {
        return {
            id: adminUser.id,
            name: adminUser.name,
            email: adminUser.email,
            role: adminUser.role
        };
    }
    return null;
};

module.exports = {
    login
};