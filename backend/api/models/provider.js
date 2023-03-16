const mongoose = require('mongoose');
const {providerSchema} = require('../schemas/provider.sche,a');

const Provider = mongoose.model('Provider', providerSchema);

module.exports = { Provider }