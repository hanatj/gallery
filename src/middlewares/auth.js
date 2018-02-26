// const jwt = require('jsonwebtoken');
// const roles = require('../constants/roles.js');
// const TOKEN_SECRET = require('../../config.js').TOKEN_SECRET;
//
// const loginCheck = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token)
//     if (req.url === '/login')
//       return next();
//     else
//       return res.status(403).json({ message: 'Access is denied!, please login..' });
//   jwt.verify(token, TOKEN_SECRET, (err, user) => {
//     if (err || req.cookies.role !== user.role) {
//       res.cookie('token', '', { maxAge: 0 });
//
//       return res.status(403).json({ message: 'Access is denied!, please login..' });
//     }
//     req.user = user;
//
//     return next();
//   });
// };
//
// const accessCheck = minRole => (req, res, next) => {
//   const userRole = req.user.role;
//   if (roles[userRole] && roles[userRole] >= roles[minRole]) {
//     return next();
//   }
//
//   res.status(403).json({ message: 'Access is denied!' });
// };
//
// module.exports = {
//   accessCheck,
//   loginCheck
// };
