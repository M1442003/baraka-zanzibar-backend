import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create sample tours
  const tours = await prisma.tour.createMany({
    data: [
      {
        title: "Stone Town Cultural Tour",
        description: "Explore the historic Stone Town with its narrow streets, Arabic architecture, and rich history. Visit the House of Wonders, Old Fort, and Freddie Mercury Museum.",
        duration: "4 hours",
        price: 45,
        maxGroup: 12,
        location: "Stone Town",
        images: ["/images/tours/stone-town-1.jpg", "/images/tours/stone-town-2.jpg"],
        inclusions: ["Professional guide", "Entrance fees", "Bottled water", "Walking tour"],
        exclusions: ["Lunch", "Transportation", "Tips"],
        available: true,
      },
      {
        title: "Prison Island Day Trip",
        description: "Visit Prison Island, see giant tortoises, and enjoy snorkeling in crystal clear waters. Perfect for families and nature lovers.",
        duration: "6 hours",
        price: 75,
        maxGroup: 15,
        location: "Prison Island",
        images: ["/images/tours/prison-island-1.jpg", "/images/tours/prison-island-2.jpg"],
        inclusions: ["Boat transfer", "Snorkeling gear", "Guide", "Tortoise sanctuary entry"],
        exclusions: ["Lunch", "Sunscreen", "Underwater camera"],
        available: true,
      },
      {
        title: "Spice Farm Tour",
        description: "Discover Zanzibar's spice heritage with a guided tour of a working spice farm. Taste and smell various spices and learn about their uses.",
        duration: "3 hours",
        price: 35,
        maxGroup: 20,
        location: "Spice Farms",
        images: ["/images/tours/spice-farm-1.jpg", "/images/tours/spice-farm-2.jpg"],
        inclusions: ["Guide", "Spice tasting", "Bottled water", "Fresh fruit tasting"],
        exclusions: ["Transportation", "Lunch", "Spice purchases"],
        available: true,
      },
    ],
  });

  // Create sample hotels
  const hotels = await prisma.hotel.createMany({
    data: [
      {
        name: "Zanzibar Sunrise Resort",
        description: "Beautiful beachfront resort with stunning ocean views, infinity pool, and world-class spa services.",
        location: "Nungwi",
        address: "Nungwi Beach, Zanzibar",
        pricePerNight: 150,
        amenities: ["Pool", "Spa", "Restaurant", "WiFi", "Beach access", "Bar", "Room service"],
        images: ["/images/hotels/sunrise-resort-1.jpg", "/images/hotels/sunrise-resort-2.jpg"],
        rating: 4.5,
        available: true,
      },
      {
        name: "Stone Town Hotel",
        description: "Historic hotel in the heart of Stone Town, featuring traditional architecture and modern comforts.",
        location: "Stone Town",
        address: "Kelele Square, Stone Town",
        pricePerNight: 95,
        amenities: ["Restaurant", "WiFi", "Air conditioning", "24-hour front desk", "Tour desk"],
        images: ["/images/hotels/stone-town-hotel-1.jpg", "/images/hotels/stone-town-hotel-2.jpg"],
        rating: 4.0,
        available: true,
      },
      {
        name: "Blue Bay Beach Resort",
        description: "Luxury resort with private beach and water sports. All-inclusive options available.",
        location: "Kiwengwa",
        address: "Kiwengwa Beach, Zanzibar",
        pricePerNight: 120,
        amenities: ["Pool", "Spa", "Restaurant", "Bar", "Water sports", "Kids club", "Gym"],
        images: ["/images/hotels/blue-bay-1.jpg", "/images/hotels/blue-bay-2.jpg"],
        rating: 4.8,
        available: true,
      },
    ],
  });

  console.log('✅ Seeding completed!');
  console.log(`📊 Created tours and hotels`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
