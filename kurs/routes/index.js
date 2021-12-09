const express = require('express');
const router = express.Router();

/* GET home page. */
const post1 = {
  id: 1,
  name: 'Новость про спорт',
  text: 'Информация о спорте'
};
const post2 = {
  id: 2,
  name: 'Новость про политику',
  text: 'Информация о политических изменениях'
};

const post = [
  post1, post2
];

router.get('/', function(req, res, next) {
  const dataUser = req.body
  res.send({post: post});
});

module.exports = router;
