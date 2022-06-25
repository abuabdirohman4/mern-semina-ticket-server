const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require('./controller');

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

router.get('/categories', index);

router.post('/categories', create);

router.get('/categories/:id', find);

router.put('/categories/:id', update);

router.delete('/categories/:id', destroy);

module.exports = router;