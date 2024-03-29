const CharacterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-hotel.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    CharacterMiddleware(req, res, next);
  } else {
    next();
  }
};
