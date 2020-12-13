/** 
 * Module validation is responsible 
 * for checking request by using 
 * express-validator scheme functionality
 */
const { isFirstBeforeSecondDate, isIntegerGtEZero, isFirstLtESecondNumber } = require('./utils.js');
const { dateIsNotIso8601, notPositiveInteger, maxLtMin, startDateGtEEndDate } = require('./constants')
module.exports =
{
    /** @function validator return scheme to validate request*/
    validator: () => {
        return {
            startDate: {
                custom: {
                    options: (value, { req }) => isFirstBeforeSecondDate(value, req.body.endDate),
                    errorMessage: startDateGtEEndDate
                },
            },
            startDate: {
                isISO8601: {
                    negated: false,
                },
                errorMessage: dateIsNotIso8601,
            },
            endDate: {
                isISO8601: {
                    negated: false,
                },
                errorMessage: dateIsNotIso8601,
            },
            maxCount: {
                custom: {
                    options: (value, { req }) => isIntegerGtEZero(req.body.minCount) &&
                        isIntegerGtEZero(value) &&
                        isFirstLtESecondNumber(req.body.minCount, value),
                    errorMessage: maxLtMin
                },
            },
            minCount: {
                custom: {
                    options: (value) => isIntegerGtEZero(value),
                    errorMessage: notPositiveInteger
                }
            },
            maxCount: {
                custom: {
                    options: (value) => isIntegerGtEZero(value),
                    errorMessage: notPositiveInteger
                },
            },
        }
    }
};
