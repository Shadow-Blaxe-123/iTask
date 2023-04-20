const mongoose = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/?readPreference=primary&tls=false&directConnection=true'

// Connecting to database
function main() {
mongoose.connect(connectionString).then(()=>{
    console.log('data connected')
})
    
}

module.exports = main