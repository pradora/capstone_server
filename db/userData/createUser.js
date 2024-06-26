const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const hashThis= require("../seedData/hashThis.js")


// create new user
const createUser = async (req) => {
    const { username, email, password, admin} = req.body;
    const hashedPassword = await hashThis(password)

    try {
      return await prisma.user.create({
        data: {
          username: username,
          password: hashedPassword,
          email: email,
          admin: false,
        //   firstName: firstName,
        //   lastName: lastName,
        },
      });
      
    } catch (err) {
      throw err;
    }
  };

module.exports = {
    // getAllUsers,
    createUser,
    //  loginUser,
    // updateUser,
    // deleteUser,
    // findUserByToken,
};