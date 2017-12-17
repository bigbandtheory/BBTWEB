
export default function PropsValidator(validate){

   function validator(isRequired, limit, props, propName, componentName) {

        if (props[propName] !== null) {
          let value = props[propName];
          if (typeof value === 'string') {
            return value.length < limit ? null : new Error(propName + ' in ' + componentName + " is longer than 140 characters");
          }else{
            return new Error(propName + ' in ' + componentName + 'is not a type of string');
          }
        }else if(isRequired){
          return new Error(propName + ' in ' + componentName + 'is required');
        }

        // assume all is fine
       return validate(props, propName, componentName, location);;
   }


   var validation = this.validator.bind(null,false, 8);
   validation.isRequired = this.validation.bind(null, true);
   return validation;
}

export function lengthValidator(props, propName, componentName){

    if (props[propName] !== null) {
      let value = props[propName];
      if (typeof value === 'string') {
        return value.length < 8 ? null : new Error(propName + ' in ' + componentName + " is longer than 8 characters");
      }else{
        return new Error(propName + ' in ' + componentName + 'is not a type of string');
      }
    }else if(isRequired){
      return new Error(propName + ' in ' + componentName + 'is required');
    }
    return null;

}
