// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        After going through many ups and downs in my studies and life, I <b className="font-medium">found my passion for programming in 2020</b>.
        I graduated and have gained <b className="font-medium">2 years of experience in Front-end development</b>,
        working on projects using <b className="font-medium">PHP Laravel, Express.js</b> with <b className="font-medium">MySQL</b>
        and <b className="font-medium">MongoDB</b>. On the Front-end side, I have worked with <b className="font-medium">React,
        Next.js, Vue, Nuxt.js,</b> and <b className="font-medium">TypeScript</b>.
        I enjoy exploring new technologies and frameworks.
        My goal is to become a Full-stack Developer in the next 2 years.
      </p>
      <p>
        If you ask me what I would do if I were not a programmer, I would still pursue programming until I am 70 years old
      </p>
      <p>
        Besides programming, I enjoy going to the gym <i className="italic">(to strengthen my health and reduce back pain)</i>, cooking, traveling to experience life in different places, and meeting new people. I also enjoy watching football, playing a bit of video games, billiards, and swimming.
      </p>
      <p>
        In short, <b className="font-medium">I love my current life</b>, and it would be even better if I had the opportunity to meet and work with you. I may not be the best, but I will certainly not disappoint you.
      </p>
      <p>
        <b className="font-semibold italic">Thank you for reading this far.</b>
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
