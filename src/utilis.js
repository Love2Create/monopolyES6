//------------ baseURL for assets
const baseURL = 'https://love2create.github.io/monopolyES6/src/assets/';

//------------ create DOM Element
function createDomElement(type,attributes){
    var element = document.createElement(type);

    for (var attribute in attributes){
        console.log(attribute);
        console.log(attributes[attribute]);
        if(attribute == 'cssClass'){
            newAttribute = 'class';
            element.setAttribute(newAttribute,attributes[attribute]);
        } if(attribute == 'cssId'){
            newAttribute = 'id';
            element.setAttribute(newAttribute,attributes[attribute]);
        }else{
            element.setAttribute(attribute,attributes[attribute]);
        }
    }

    return(element);
}



export {baseURL, createDomElement};