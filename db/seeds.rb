require 'faker'

User.destroy_all
Car.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."

Car.create(
    make: "Volkswagon",
    model: "Golf GTI",
    year: 2023,
    color: "Green",
    miles: 1200,
    category: "Hatchback",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/754000157121b992/2022-Volkswagen-Golf_GTI.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Audi",
    model: "A3",
    year: 2023,
    color: "Blue",
    miles: 900,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/013b10c101cff126/2022-Audi-A3.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "BMW",
    model: "7 Series",
    year: 2023,
    color: "Brooklyn Grey Metallic",
    miles: 3211,
    category: "Sedan",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/25d60abf704dbe95/2023-BMW-7_Series.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Volkswagon",
    model: "Jetta",
    year: 2023,
    color: "Silver",
    miles: 9520,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/8d10733a98a36ec5/2022-Volkswagen-Jetta.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Volkswagon",
    model: "Arteon",
    year: 2023,
    color: "Red",
    miles: 3255,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/1e009ba68b79b177/2022-Volkswagen-Arteon.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    color: "Silver",
    miles: 5600,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/2f2a98f419efda84/2023-Mercedes-Benz-C-Class.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "BMW",
    model: "4 Series",
    year: 2023,
    color: "Gray",
    miles: 1200,
    category: "Hatchback",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/9e8d921e9cb755c4/2023-BMW-4_Series.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Audi",
    model: "A6 Allroad",
    year: 2023,
    color: "Brown",
    miles: 902,
    category: "Wagon",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/fd816ac7d29c2a7d/2021-Audi-A6_allroad.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "BMW",
    model: "2 Series",
    year: 2023,
    color: "Purple",
    miles: 8531,
    category: "Coupe",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/3536ceb6d2aa19fa/2022-BMW-2_Series.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "Silver",
    miles: 3251,
    category: "Convertable",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/dee8139c02d620c7/2023-Audi-A5.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Audi",
    model: "S6",
    year: 2023,
    color: "Black",
    miles: 1200,
    category: "Sedan",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/b21039e3cc4aa5aa/2021-Audi-S6.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Audi",
    model: "A4",
    year: 2023,
    color: "Gray",
    miles: 6533,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/f4adb621bc29a5fc/2023-Audi-A4.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Mercedes-Benz",
    model: "A-Class",
    year: 2023,
    color: "White",
    miles: 4100,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/87a2865b91af788f/2021-Mercedes-Benz-A-Class.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "BMW",
    model: "i4",
    year: 2023,
    color: "White",
    miles: 1200,
    category: "Hatchback",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/e8f9f0c5fd1a4a60/2023-BMW-i4.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "BMW",
    model: "3 Series",
    year: 2023,
    color: "Gray",
    miles: 2103,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/eb564b3eaf688793/2023-BMW-3_Series.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Mercedes-Benz",
    model: "CLA",
    year: 2023,
    color: "Black",
    miles: 5200,
    category: "Sedan",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/722a732200910353/2021-Mercedes-Benz-CLA.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Mercedes-Benz",
    model: "CLS",
    year: 2023,
    color: "Blue",
    miles: 1620,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/1a4a165d4a904413/2022-Mercedes-Benz-CLS.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Mercedes-Benz",
    model: "EQS Sedan",
    year: 2023,
    color: "Red",
    miles: 2510,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/e47b8ca53464151c/2023-Mercedes-Benz-EQS.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "BMW",
    model: "M4",
    year: 2023,
    color: "Green",
    miles: 962,
    category: "Hatchback",
    drive: "Manual", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/3a703ff47dd31dcc/2021-BMW-M4.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

Car.create(
    make: "Audi",
    model: "RS3",
    year: 2023,
    color: "Yellow",
    miles: 996,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "https://static.tcimg.net/vehicles/oem/8b0d8a9427650473/2023-Audi-RS_3.jpg?bg=white&fill=blur&fit=fill&h=787.5&w=1400"
)

puts "✅ Done seeding!"