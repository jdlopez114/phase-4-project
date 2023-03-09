require 'faker'

User.destroy_all
Car.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."

Car.create(
    make: "Volkswagon",
    model: "Golf GTI",
    year: 2023,
    color: "Reflex Silver Metallic",
    miles: 1200,
    category: "Hatchback",
    drive: "Manual", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Volkswagen-Golf_GTI-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Audi",
    model: "A3",
    year: 2023,
    color: "Florett Silver Metallic",
    miles: 900,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Audi-A3-silver-full_color-driver_side_front_quarter.png"
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
    img_url: "../public/car_images/2023-BMW-7_Series-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Volkswagon",
    model: "Jetta",
    year: 2023,
    color: "Pyrite Silver Metallic",
    miles: 9520,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Volkswagen-Jetta-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Volkswagon",
    model: "Arteon",
    year: 2023,
    color: "Moonstone Gray",
    miles: 3255,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Volkswagen-Arteon-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    color: "Mojave Silver Metallic",
    miles: 5600,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Mercedes-Benz-C-Class-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "BMW",
    model: "4 Series",
    year: 2023,
    color: "Dravit Grey Metallic",
    miles: 1200,
    category: "Hatchback",
    drive: "Manual", 
    country: "Germany", 
    img_url: "../public/car_images/2023-BMW-4_Series-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Audi",
    model: "A6 Allroad",
    year: 2023,
    color: "Florett Silver Metallic",
    miles: 902,
    category: "Wagon",
    drive: "Manual", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Audi-A6_allroad-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "BMW",
    model: "2 Series",
    year: 2023,
    color: "Brooklyn Grey Metallic",
    miles: 8531,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-BMW-2_Series-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "Rock Gray",
    miles: 3251,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "..public/car_images/2023-Audi-A5-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Audi",
    model: "S6",
    year: 2023,
    color: "Florett Silver Metallic",
    miles: 1200,
    category: "Sedan",
    drive: "Manual", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Audi-S6-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Audi",
    model: "A4",
    year: 2023,
    color: "Ibis White",
    miles: 6533,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Audi-A4-white-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Mercedes-Benz",
    model: "A-Class",
    year: 2023,
    color: "Iridium Silver",
    miles: 4100,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2022-Mercedes-Benz-A-Class-silver-full_color-driver_side_front_quarter-1.png"
)

Car.create(
    make: "BMW",
    model: "i4",
    year: 2023,
    color: "Brooklyn Gray Metallic",
    miles: 1200,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-BMW-i4-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "BMW",
    model: "3 Series",
    year: 2023,
    color: "Brooklyn Grey Metallic",
    miles: 2103,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "/public/car_images/2023-BMW-3_Series-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Mercedes-Benz",
    model: "CLA",
    year: 2023,
    color: "Iridium Silver",
    miles: 5200,
    category: "Sedan",
    drive: "Manual", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Mercedes-Benz-CLA-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Mercedes-Benz",
    model: "CLS",
    year: 2023,
    color: "Iridium Silver",
    miles: 1620,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Mercedes-Benz-CLS-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Mercedes-Benz",
    model: "EQS Sedan",
    year: 2023,
    color: "High Tech Silver",
    miles: 2510,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Mercedes-Benz-EQS_Sedan-silver-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "BMW",
    model: "M4",
    year: 2023,
    color: "Brooklyn Gray Metallic",
    miles: 962,
    category: "Hatchback",
    drive: "Manual", 
    country: "Germany", 
    img_url: "../public/car_images/2023-BMW-4_Series-gray-full_color-driver_side_front_quarter.png"
)

Car.create(
    make: "Audi",
    model: "RS3",
    year: 2023,
    color: "Daytona Gray",
    miles: 996,
    category: "Sedan",
    drive: "Automatic", 
    country: "Germany", 
    img_url: "../public/car_images/2023-Audi-RS_3-gray-full_color-driver_side_front_quarter.png"
)

puts "✅ Done seeding!"