/**
 * Define record model for mongodb
 */
const mongoose = require('mongoose');
mongoose.model('Record', new mongoose.Schema({ key: String, value: String, createdAt: Date }));


