// Завдання 1

const laptop = {
    brand: 'ASUS',
    model: 'ROG',
    ram: 16,
    101: 'Серійний код'
};

console.log(laptop[101]);

laptop.ram = 32;

laptop.isGaming = true;

delete laptop.model;

console.log(laptop);

// Завдання 2
const currencyRates = {
    usd: 41.5,
    eur: 45.0,
    pln: 10.5
};

const selectedCurrency = 'eur';

console.log(`100 одиниць валюти = ${currencyRates[selectedCurrency] * 100} грн`);

// Завдання 3

const company = {
    title: 'IT Company',
    departments: ['IT', 'HR', 'Finance'],
    office: {
        country: 'Ukraine',
        city: 'Uzhhorod',
        coordinates: {
            lat: 48.62,
            lng: 22.29
        }
    }
};

console.log(company.departments);

for (let key in company.office) {
    console.log(key + ' : ' + company.office[key]);
}

// Завдання 4

const smartPhone = {
    brand: 'Samsung',
    battery: 85,

    call: function() {
        console.log('Йде виклик...');
        return 'Статус: на лінії';
    },

    charge: () => {
        console.log('Зарядка підключена');
    },

    takePhoto() {
        console.log('Фото зроблено');
        return 'Файл збережено в галерею';
    }
};

console.log(smartPhone.call());

smartPhone.charge();

console.log(smartPhone.takePhoto());

// Завдання 5

const originalUser = {
    login: 'admin',
    role: 'viewer'
};

const adminUser = originalUser;

adminUser.role = 'superadmin';

// Обидві змінні посилаються на один об'єкт,
// тому зміна через adminUser впливає і на originalUser.

console.log(originalUser);
console.log(adminUser);

console.log(Object.keys(originalUser));
console.log(Object.values(originalUser));
console.log(Object.entries(originalUser));
