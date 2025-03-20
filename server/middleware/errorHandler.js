const VALIDATION_ERROR = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        err: err.message,
        stackTrace: err.stack,
      });
      break;
    case UNAUTHORIZED:
      res.json({
        title: "Authorization Failed",
        err: err.message,
        stackTrace: err.stack,
      });
      break;
    case FORBIDDEN:
      res.json({
        title: "Forbidden",
        err: err.message,
        stackTrace: err.stack,
      });
      break;
    case NOT_FOUND:
      res.json({
        title: "Not FOund",
        err: err.message,
        stackTrace: err.stack,
      });
      break;
    case SERVER_ERROR:
      res.json({
        title: "Server Error",
        err: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("No error. All Good!");
      break;
  }
};

module.exports = errorHandler;