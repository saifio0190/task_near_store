/**
 * Configurations of logger.
 */
const winston = require('winston');

const logger = winston.createLogger({
   level: 'info',
  format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
            ),
    transports: [
    new winston.transports.File({ filename: './custom_logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './custom_logs/combined.log' })
    ]
});


// const createLogger = new winston.Logger({
//   'transports': consoleConfig
// });


module.exports = {
  'logger':logger
};