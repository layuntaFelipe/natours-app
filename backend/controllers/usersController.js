const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Get all users route not defined!'
  });
};
const getUser = (req, res) => {
 res.status(500).json({
   status: 'error',
   message: 'Get user route not defined!'
 });
};
const createUser = (req, res) => {
 res.status(500).json({
   status: 'error',
   message: 'create user route not defined!'
 });
};
const updateUser = (req, res) => {
 res.status(500).json({
   status: 'error',
   message: 'update user route not defined!'
 });
};
const deleteUser = (req, res) => {
 res.status(500).json({
   status: 'error',
   message: 'delete user route not defined!'
 });
};


module.exports = {
 getAllUsers, 
 getUser, 
 createUser, 
 updateUser, 
 deleteUser
};