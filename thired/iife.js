//Immediately Invoked Function Expressions (IIFE)

(function chai(){    //named iife
    console.log(`BD CONNECTED`);
})();                    //**semicolon is important to close one iife before starting another

( (name) =>  {              //unnamed iffe
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Prachi');
