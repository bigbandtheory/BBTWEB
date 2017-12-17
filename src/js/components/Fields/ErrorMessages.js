export const errorMessages = {

    name:{
      errorMessages : {
        'valueMissing': 'Name cannot be blank'
      }
    },
    email: {
      errorMessages : {
        'valueMissing'   : 'Please enter an email address',
        'patternMismatch': 'Please enter a valid email address (e.g. name@domain.com)',
        'typeMismatch'   : 'Please enter a valid email address (e.g. name@domain.com)'
      },
      pattern : '(\\s*[a-zA-Z0-9_.+-])+@@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4}\\s*)+?'
    },
    message: {
      errorMessages: {
        'valueMissing': 'Message cannot be blank'
      }
    },
}