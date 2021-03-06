function notFound(req, res, next) {
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    res.status(404).send(`🔍 - Not Found - ${req.originalUrl}`);
}

function errorHandler(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
}

module.exports = {
    notFound,
    errorHandler
};