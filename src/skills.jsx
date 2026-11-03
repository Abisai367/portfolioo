import React, { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';
import { motion } from "motion/react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import * as DiIcons from "react-icons/di";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

const getIconComponent = (iconName) => {
  if (!iconName) return null;

  // Determine which sub-library the icon belongs to based on its prefix
  if (iconName.startsWith("Fa")) return FaIcons[iconName];
  if (iconName.startsWith("Si")) return SiIcons[iconName];
  if (iconName.startsWith("Vsc")) return VscIcons[iconName];
  if (iconName.startsWith("Di")) return DiIcons[iconName];
  if (iconName.startsWith("Ri")) return RiIcons[iconName];
  if (iconName.startsWith("Cg")) return CgIcons[iconName];
  if (iconName.startsWith("Gi")) return GiIcons[iconName];
  if (iconName.startsWith("Io")) return IoIcons[iconName];

  return null;
};

const Skills = () => {
  const [coreSkills, setCoreSkills] = useState([]);
  const [secondarySkills, setSecondarySkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const [coreRes, secondaryRes] = await Promise.all([
          const baseUrl = typeof __API_URL__ !== 'undefined' ? __API_URL__ : '';
          fetch(`${baseUrl}/coreskills`)
          fetch(`${baseUrl}/secondaryskills`)

        ]);

        if (!coreRes.ok || !secondaryRes.ok) {
          throw new Error("Failed to fetch skills data from server.");
        }

        const coreData = await coreRes.json();
        const secondaryData = await secondaryRes.json();

        setCoreSkills(coreData);
        setSecondarySkills(secondaryData);
      } catch (err) {
        console.error("Error loading skills:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold tracking-wide animate-pulse">Loading Technical Skills...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-medium bg-red-950/30 border border-red-900/50 px-6 py-3 rounded-xl">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <Navbar />
      <motion.div className="max-w-5xl mx-auto w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }} 
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-green-500">
            My Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            These are the tools and languages I use 
          </p>
        </div>

        {/* Core Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-2">
            Core Development & Systems
          </h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: '50%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}       
          >
            {coreSkills.map((skill) => {
              const IconComponent = getIconComponent(skill.icon);
              return (
                <div key={skill.id || skill.name} className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      {IconComponent ? (
                        <IconComponent className="w-6 h-6 text-green-400 shrink-0" />
                      ) : (
                        <div className="w-6 h-6 bg-zinc-800 border border-zinc-700 rounded-md shrink-0 flex items-center justify-center text-[10px] text-zinc-500 font-bold">
                          {}
                        </div>
                      )}
                      <span className="text-lg font-semibold tracking-wide">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-green-400 bg-green-950 px-2 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Secondary Skills Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-2">
            Tools, Ecosystem & Continuous Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondarySkills.map((skill) => {
              const IconComponent = getIconComponent(skill.icon);
              return (
                <div key={skill.id || skill.name} className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      {IconComponent ? (
                        <IconComponent className="w-6 h-6 text-green-400 shrink-0" />
                      ) : (
                        <div className="w-6 h-6 bg-zinc-800 border border-zinc-700 rounded-md shrink-0"></div>
                      )}
                      <span className="text-lg font-semibold tracking-wide">{skill.name}</span>
                      {skill.label && (
                        <span className="text-xs font-medium bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
                          {skill.label}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold text-green-400 bg-green-950 px-2 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-green-600 h-3 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
