const Participant = require('../../api/v1/participants/model');
// const Events = require('../../api/v1/events/model');
// const Orders = require('../../api/v1/orders/model');
const { otpMail } = require('../mail');
const { BadRequestError, NotFoundError, UnauthorizedError } = require('../../errors');

// const { createTokenUser, createJWT } = require('../../utils');

const signupParticipant = async (req) => {
  const { firstName, lastName, email, password, role } = req.body;

  // Jika email dan status tidak aktif
  let result = await Participant.findOne({
    email,
    status: 'tidak aktif',
  });

  if (result) {
    result.firstName = firstName;
    result.lastName = lastName;
    result.role = role;
    result.email = email;
    result.password = password;
    result.otp = Math.floor(Math.random() * 9999);
    await result.save();
  } else {
    result = await Participant.create({
      firstName,
      lastName,
      email,
      password,
      role,
      otp: Math.floor(Math.random() * 9999), // random 4 angka -> 4498
    });
  }
  await otpMail(email, result);

  delete result._doc.password;

  return result;
};

const activateParticipant = async (req) => {
  const { otp, email } = req.body;
  const check = await Participant.findOne({
    email,
  });

  if (!check) throw new NotFoundError('Partisipan belum terdaftar');

  if (check && check.otp !== otp) throw new BadRequestError('Kode otp salah');

  const result = await Participant.findByIdAndUpdate(check._id, {
    status: 'aktif',
  });

  return result;
};

module.exports = {
  signupParticipant,
  activateParticipant,
  // signinParticipant,
  // getAllEvents,
  // getOneEvent,
  // getAllOrders,
};
