const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();
const logger = require('../app');

router.post(
  '/add',
  [
    check('first_name').notEmpty(),
    check('last_name').notEmpty(),
    check('email', 'Некорректный email').isEmail(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Данные введены некорректно',
        });
      }

      logger.debug('some');

      const { first_name, last_name, email } = req.body;

      // const candidate = await User.findOne({ email });

      // if (candidate) {
      //   res.status(400).json({ message: 'Такой пользователь уже существует' });
      // }

      const user = new User({ first_name, last_name, email });

      await user.save();

      res.status(201);
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  },
);

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
