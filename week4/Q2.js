
let address = { //address object
    streetName: "Lady Village",
    houseNr: "Roadside Cottage",
    postCode: "KW17 2BW",
    city: "Orkney Islands",
    country: "Scotland"
};

let favThings = ["music", "space", "family time", "pets", "walking on the beach"]; //favorite things array

let person = { //person object
    name: "Alexis",
    type: "Human",
    age: 39,
    address: address, //full address taken from 'address' object
    favThings: favThings[0, 1, 2] //top 3 favorite things from array
};

console.log(person); //persons details