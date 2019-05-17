const fs = require('fs');
/*

ITEM ARRAYS

*/

const clothing = [
'Shirts', 
'Tops',
'Socks',
'Bra',
'Underwear',
'Belt',
'Dress',
'Long Pants',
'Hat',
'Cap', 
'Beanie',
'Flip-Flops',
'Sandals',
'Shoes',
'Boots',
'Short Pants',
'Skirt',
'Bathing Suit',
'Towel',
'Pajamas',
'Long Underwear',
'Leggings',
'Sweater',
'Small Bag',
'Purse',
'Large Bag',
'Bookbag',
'Light Jacket',
'Rain Coat',
'Heavy Jacket',
'Scarf',
'Gloves',
];

const accessories = [
'Reading Glasses',
'Sunglasses',
'Pocketknife',
'Luggage Label',
'Earplugs',
'Wallet',
'Pen',
'Umbrella',
'Travel Pillow',
];

const electronics = [
'Tripod',
'Mobile Phone',
'Camera',
'SD Card',
'Laptop', 
'Tablet',
'USB Stick',
'Cellphone Charger',
'Laptop', 
'Tablet Charger',
'Headphones',
'Travel Adaptor',
];

const personals = [
'Toothbrush',
'Toothbrush Cover',
'Floss',
'Toothpaste',
'Mouthwash',
'Conditoner',
'Shower Gel',
'Shampoo',
'Fragrance',
'Sunscreen',
'Sun Tan Lotion',
'Condoms',
'Hair Gel',
'Spray',
'Brush',
'Cream',
'Eye Mask',
'Nail Clippers',
'Q-tips',
'Pocket Mirror',
'Hair-dryer',
'Shaving Gel',
'Glasses',
'Hand Sanitizer',
'Contacts',
'Contacts Solution',
'Hair Ties',
'Razor',
'Makeup',
'Jewelery',
'Tampons',
'Pads',
'Deodorant',
];

const documents = [
'Photocopies of Documents',
'ID',
'Tickets',
'Passport',
'Identity Card',
'Visa',
"Driver's License",
'Wallet',
"International Driver's License",
'Boarding Pass',
'Vouchers',
'Travel Insurance Documents',
'Vaccination Card',
'Money',
'Cash',
'Foreign', 
'Currency',
'Credit Card',
'Debit Card',
'Notebook',
'Guidebook',
'Printed Trip Itinerary',
'Accommodation Reservation',
'Contact Information',
'Book',
];

const firstAid = [
'Pain Killers',
'Medications',
'Patches',
'Vitamins',
'Drugs',
'Prescriptions',
'Tweezers',
];

const essentials = [
'House Key',
'Money Belt',
];

const children = [
'Onesies',
'Socks',
'Trousers',
'Long Sleeve Shirts', 
'Sweater',
'Jacket',
'Raincoat',
'Bathing Suit',
'Hat',
'Pajamas',
'Shoes',
'Boots',
];

const backpack = [
'Travel Pillow',
'Book',
'Kindle',
'Phone',
'Phone Charger',
'Portable Charger',
'Snacks',
'Blanket',
'Camera',
'Candy',
'Chapstick',
'Charger',
'Headphones',
'Glasses',
'Gum',
'Mints',
'Hand-Sanitizer',
'Earbuds',
'iPhone Charger',
'Laptop',
'Lip Balm',
'Lotion',
'Money',
'Notebook',
'Pen',
'Phone',
'Tissue',
'Water Bottle',
];

const read = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./items.js', (data, err) => {
            if (err) reject(err)
            else resolve(JSON.parse(data))
            // else resolve(data)
        })
    })
};

const write = (content) => {
    // content = content.toString();
    content = JSON.stringify(content);
    return new Promise((resolve, reject) => {
        fs.writeFile('./items.js', content, 'utf-8', (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
};

const buildObject = (category, arr) => {
    const obj = {};
    for (let i = 0; i < arr.length, i++) {
        // do stuff
    }
    return obj;
}

const itemsObject = buildObject();

/*
write( itemsObject )
.then( _=> {
    console.log('success!')
    return read()
})
.then( data => {
    console.log('data: ', data);
})
.catch( err => {
    console.log('err: ', err.toString());
});
*/