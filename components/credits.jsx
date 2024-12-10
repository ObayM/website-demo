import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Obay Rashad',
    linkedin: 'https://www.linkedin.com/in/obay-dev',
    role: 'Lead Developer',
    description: 'Obay created the user interface, brought this website to life, and led the team in producing this excellent work.',
    image: '/team/obay.jpeg',
  },
  {
    name: 'Ziad Elkafoury',
    linkedin: 'https://www.linkedin.com/in/ziad-elkafoury',
    role: 'Data Scientist & Backend Developer',
    description: 'Ziad handled all data-related tasks, including data gathering, processing, and visualization. He also created the backend for the "Imagine a Planet" tool.',
    image: '/team/ziad.jpeg',
  },
];

const PersonCard = ({ name, linkedin, role, description, image }) => (
  <motion.div
    className="relative p-8 rounded-lg bg-gray-800 shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
    <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        className="relative z-10 text-white text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 relative w-48 h-48 mx-auto rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-lg mt-1 text-purple-300">{role}</p>
        <p className="text-base mt-4 text-gray-300">{description}</p>
      </motion.div>
    </Link>
  </motion.div>
);

const Section = ({ title, people }) => (
  <div className="mb-16">
    <motion.h2
      className="text-5xl font-bold mb-12 text-center text-white"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {people.map((person, index) => (
        <PersonCard key={index} {...person} />
      ))}
    </motion.div>
  </div>
);

const CreditsSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-stars" />
          <div className="relative z-10">
            <Section title="Who is behind this?" people={teamMembers} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreditsSection;
