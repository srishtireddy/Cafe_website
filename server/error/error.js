class ErrorHandler extends Error {
  constructor(message, statusCode) {    
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}
export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        statusCode: err.statusCode,
    });
};
export default ErrorHandler;