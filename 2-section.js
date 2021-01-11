'>>>>>>>>>>>>>>>>>>>>>'
// 1. Babel Online
'>>>>>>>>>>>>>>>>>>>>>'

// part 1
const NAME = 'John'
let city = 'New York'
let cars = ['Tesla', 'Kia', 'Ford']

console.log(`${NAME} from ${city}`);

const person = {
  NAME,
  city
}

// part 2
cars.forEach(car => console.log(car));

// part 3
const es8 = async () => {
  let name = await fetch('http://www.google.com');
}

'>>>>>>>>>>>>>>>>>>>>>'
// 1. Babel CLI
'>>>>>>>>>>>>>>>>>>>>>'

// part 1

{ 
  "presets": [
    ["@babel/preset-env"]    
  ]
}

// part 2

{ 
  "presets": [
    ["@babel/preset-env", {"targets": "> 0.25%, not dead"}], 
  ]
}


// part 3
{ 
  "presets": [
    ["@babel/preset-env", {"targets": "> 0.25%, not dead"}], 
    ["minify", {"mangle": false}]
  ]
}
