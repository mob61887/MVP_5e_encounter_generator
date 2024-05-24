const rateLimit = require('express-rate-limit');

module.exports = function createRateLimiter(maxRequests, windowMs, message) {
  return rateLimit({
    windowMs,
    max: maxRequests,
    handler: (_, res, next) => {
      res.status(429).json({
        error: 'Too Many Requests',
        message,
      });

      next({
        status: 429,
        message,
      });
    },
  });
};
