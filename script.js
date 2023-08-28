let employees = [
    {
        "name": "Sarah",
        "age": 27,
        "registration": new Date('2017-01-03'),
        "salary": 2800000
    },
    {
        "name": "Budi",
        "age": 24,
        "registration": new Date('2023-01-03'),
        "salary": 1500000
    },
    {
        "name": "Mike",
        "age": 35,
        "registration": new Date('2023-01-03'),
        "salary": 7000000
    },
    {
        "name": "Ucup",
        "age": 28,
        "registration": new Date('2023-01-03'),
        "salary": 3400000
    },
    {
        "name": "Lala",
        "age": 32,
        "registration": new Date('2023-01-03'),
        "salary": 4200000
    },
];

function umurKecilkeBesar(data) {
    return data
        .slice()
        .sort((a, b) => a.age - b.age);
}
console.log("Urutan umur dari yang kecil ke besar:");
console.log(umurKecilkeBesar(employees));


function filterAndSort(data) {
    return data
        .slice()
        .sort((a, b) => b.age - a.age)
        .filter(employee => employee.salary > 3000000 && employee.age > 30);
}
console.log("Urutan umur dari yang besar ke kecil dengan gaji > 3,000,000 dan umur > 30:");
console.log(filterAndSort(employees));



function cekNamadanUmur(data, name, age) {
    return data
        .some(employee => employee.name === name && employee.age === age);
}
console.log("Apakah ada karyawan bernama Ucup dan umur 28?");
console.log(cekNamadanUmur(employees, "Ucup", 28));



function isActive(data) {
    return data
        .map(employee => {
            return {
                ...employee,
                isActive: employee.age >= 30,
            };
        });
}
console.log("Data karyawan dengan properti isActive:");
console.log(isActive(employees));
