let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let clone = {...passportWithAddress, address:{...passportWithAddress.address}}

clone.address.city = 'Bobryisk';

console.log(clone.address.city);
console.log(passportWithAddress.address.city);




