let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let clone1 = {...passportWithAddress, address:{...passportWithAddress.address}}

clone1.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(clone1.address.city);





