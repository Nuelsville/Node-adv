const os = require('os')

// info about user
const user = os.userInfo();

// method returns system uptime in secs
console.log(os.uptime())

const currentOS = {

    name:       os.type(),
    release:    os.release(),
    totalMem:   os.totalmem(),
    freeMem:    os.freemem()

}
console.log(currentOS)