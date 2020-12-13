/**
 * Initializing mongo db database
 */
const mongoose = require('mongoose');
const mongooseDb = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";
try {
   mongoose.connect(mongooseDb, { useNewUrlParser: true, useUnifiedTopology: true });
   require('../model/record');
} catch (error) {
   console.error(error);
}


