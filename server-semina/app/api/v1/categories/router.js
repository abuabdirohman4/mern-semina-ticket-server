const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require('./controller');
const {authenticateUser, authorizeRoles } = require('../../../middlewares/auth');

// router.get('/categories', (req, res) => {
//     // console.log(req.query);

//     // res.status(200).json({
//     //     message: 'Halaman categories',
//     // });

//     const data = [
//         {
//             _id: 1, 
//             name: 'seminar',
//         },
//         {
//             _id: 2,
//             name: 'MERN',
//         },
//     ];

//     res.status(200).json({
//         data,
//     });
// });

router.get('/categories', authenticateUser, authorizeRoles('organizer'), authorizeRoles('organizer'), index);

router.post('/categories', authenticateUser, authorizeRoles('organizer'), create);

router.get('/categories/:id', authenticateUser, authorizeRoles('organizer'), find);

router.put('/categories/:id', authenticateUser, authorizeRoles('organizer'), update);

router.delete('/categories/:id', authenticateUser, authorizeRoles('organizer'), destroy);

module.exports = router;