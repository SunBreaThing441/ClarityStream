import React, { useEffect, useState } from "react";
import Container from "../../../Utilities/Container";
import SectionTitle from "../../../Utilities/SectionTitle";
import { motion } from "framer-motion";

const successStories = [
  {
    id: 1,
    name: "Alice Johnson",
    course: "Computer Science",
    university: "Harvard University",
    message: "ClarityStream helped me find a scholarship that covered all my tuition. I’m so grateful for this platform!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    course: "Engineering",
    university: "MIT",
    message: "I got a scholarship to study abroad thanks to the curated listings. Highly recommend ClarityStream!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Marcus Vance",
    course: "Artificial Intelligence",
    university: "Oxford University",
    message: "The application process became effortless with ClarityStream's guided workflow. I secured my dream scholarship.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 4,
    name: "David Park",
    course: "Medical Science",
    university: "Stanford University",
    message: "Without ClarityStream’s guidance, I would’ve missed out on my dream scholarship. Life-changing!",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Fatima Noor",
    course: "Data Science",
    university: "University of Toronto",
    message: "ClarityStream made the entire scholarship search so seamless. I found exactly what I needed.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Lucas Meyer",
    course: "Architecture",
    university: "ETH Zurich",
    message: "Amazing experience! I found multiple scholarships and finally secured one with full funding.",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
];

const SuccessStories = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((i) => (i + 2) % successStories.length);
  };

  const prevSlide = () => {
    setIndex((i) => (i - 2 + successStories.length) % successStories.length);
  };

  // Auto Play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle
          sectionName={
            <>
              Success <span className="text-accent-content">Stories</span>
            </>
          }
        />

        <div className="relative w-full overflow-hidden mt-10">
          {/* Slider container */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {successStories
                .slice(index, index + 2)
                ?.map(({ id, avatar, name, course, university, message }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}      // triggers animation when in viewport
                    viewport={{ once: true, amount: 0.3 }} // animate once, when 30% visible
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={avatar}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-primary">
                          {name}
                        </h4>
                        <p className="text-sm text-secondary">
                          {course}, <span className="font-semibold text-accent!">{university}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-secondary">{message}</p>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="mt-3 flex justify-center gap-3">
            <button
              onClick={prevSlide}
              className=" bg-primary text-white px-4 py-2 rounded-full transition-colors duration-300 ease-linear hover:bg-accent hover:text-black font-bold"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className=" bg-primary text-white px-4 py-2 rounded-full transition-colors duration-300 ease-linear hover:bg-accent hover:text-black font-bold"
            >
              ❯
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStories;
