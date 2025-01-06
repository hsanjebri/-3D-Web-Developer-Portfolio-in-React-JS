import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name, // Certificate title
  description, // Certificate description
  image, // Certificate image
  link, // Certificate link
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="relative w-full h-[230px]">
      <img
        src={image}
        alt={`certificate-${name}`}
        className="w-auto h-full object-contain rounded-xl"
      />
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-2 block"
        >
          View Certificate
        </a>
      )}
    </div>
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            name={testimonial.name}
            description={testimonial.testimonial}
            image={testimonial.image}
            link={testimonial.link} // Pass the link here
          />
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Feedbacks, "");
