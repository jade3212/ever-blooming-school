import "dotenv/config";
import { db } from "@/db";
import {
  achievements,
  galleryImages,
  parents,
  students,
} from "@/db/schema";
import { hash } from "bcryptjs";
import { v4 as uuid } from "uuid";

async function seed() {
  console.log("🌱 Seeding database...");

  // Seed achievements
  await db.insert(achievements).values([
    {
      title: "Best School Award 2025",
      description:
        "Recognized as the Best Emerging English Medium School in Bijapur region by the District Education Board for academic excellence and holistic development.",
      date: "March 2025",
      icon: "trophy",
    },
    {
      title: "100% Result in Annual Exams",
      description:
        "All our students achieved outstanding results in the annual examinations with 85% scoring distinction across all subjects.",
      date: "April 2025",
      icon: "star",
    },
    {
      title: "District Level Science Exhibition Winners",
      description:
        "Our students secured first place at the District Level Science Exhibition with their innovative project on renewable energy solutions.",
      date: "February 2025",
      icon: "medal",
    },
    {
      title: "Sports Championship 2024",
      description:
        "Ever Blooming students clinched the overall championship trophy at the Inter-School Sports Meet held in Bijapur, winning 12 medals across various events.",
      date: "December 2024",
      icon: "trophy",
    },
    {
      title: "Cultural Fest Excellence",
      description:
        "Our school's cultural team won three first prizes at the Regional Cultural Fest in dance, debate, and folk music categories.",
      date: "November 2024",
      icon: "star",
    },
    {
      title: "Smart Classroom Initiative",
      description:
        "Successfully implemented smart digital classrooms across all grades with interactive learning technology, enhancing student engagement.",
      date: "October 2024",
      icon: "sparkles",
    },
  ]);

  // Seed gallery images with placeholder images
  await db.insert(galleryImages).values([
    {
      url: "/images/gallery/annual-day.jpg",
      title: "Annual Day Celebration 2025",
      description:
        "Students performing a colorful cultural dance during the Annual Day celebrations. The event showcased the rich talent and creativity of our young stars.",
    },
    {
      url: "/images/gallery/sports-day.jpg",
      title: "Sports Day Champions",
      description:
        "Our young athletes proudly displaying their medals after an exhilarating sports day filled with track events, relays, and team games.",
    },
    {
      url: "/images/gallery/science-exhibition.jpg",
      title: "Science Exhibition 2025",
      description:
        "Budding scientists explain their innovative projects at the school science exhibition. Students from Classes 5 to 8 presented working models.",
    },
    {
      url: "/images/gallery/classroom-learning.jpg",
      title: "Interactive Smart Classroom",
      description:
        "A glimpse into our modern smart classroom where digital tools and traditional teaching blend seamlessly for an enriched learning experience.",
    },
    {
      url: "/images/gallery/cultural-fest.jpg",
      title: "Cultural Fest Performance",
      description:
        "Students dressed in vibrant traditional attire performing at the inter-school cultural fest where our school won top honors in folk dance.",
    },
    {
      url: "/images/gallery/independence-day.jpg",
      title: "Independence Day Celebration",
      description:
        "The tricolor flies high as students and staff gather to celebrate Independence Day with patriotic songs, speeches, and a march past.",
    },
    {
      url: "/images/gallery/kindergarten-fun.jpg",
      title: "Kindergarten Fun Learning",
      description:
        "Our little ones from the Kindergarten section engaged in playful learning activities designed to spark curiosity and joy in early education.",
    },
    {
      url: "/images/gallery/teachers-workshop.jpg",
      title: "Teachers Training Workshop",
      description:
        "Our dedicated educators participating in a professional development workshop focused on modern teaching methodologies and child psychology.",
    },
  ]);

  // Create a demo parent account
  const passwordHash = await hash("demo123", 12);
  const [parent] = await db
    .insert(parents)
    .values({
      email: "parent@everblooming.edu.in",
      passwordHash,
      name: "Rajesh Kumar",
      phone: "9876543210",
    })
    .returning();

  if (parent) {
    await db.insert(students).values([
      {
        parentId: parent.id,
        name: "Ananya Kumar",
        class: "5th",
      },
      {
        parentId: parent.id,
        name: "Arjun Kumar",
        class: "3rd",
      },
    ]);
  }

  console.log("✅ Database seeded successfully!");
  console.log("📧 Demo parent login: parent@everblooming.edu.in / demo123");
}

seed().catch((err) => {
  console.error("❌ Seed error:", err);
  process.exit(1);
});
