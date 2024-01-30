// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const logger = {
    logMsg: function() {
        if (this.errMsg) {
            console.log(`Error message: ${this.errMsg}`);
        } else {
            console.log('yikes');
        }
    }
}

const obj1 = {
    errMsg: 'uh oh Obj1'
}

const obj2 = {
    errMsg: 'uh oh Obj2'
}

const obj3 = {
    noMsg: 'no errors here!'
}

logger.logMsg.call(obj1);