"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { actorData, training, skills } from '@/data/actor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Star, MapPin, Mail, Phone } from 'lucide-react'

export function About() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-6">
            About Seth
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Professional Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {actorData.bio}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">{actorData.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <a 
                      href={`mailto:${actorData.email}`}
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {actorData.email}
                    </a>
                  </div>
                  {actorData.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">{actorData.phone}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Training */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2" />
                  Training & Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {training.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-gray-200 pl-4"
                    >
                      <h4 className="font-semibold text-gray-900">{item.institution}</h4>
                      <p className="text-gray-700">{item.program}</p>
                      {item.instructor && (
                        <p className="text-sm text-gray-600">with {item.instructor}</p>
                      )}
                      <p className="text-sm text-gray-500">{item.year}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif flex items-center">
                  <Star className="h-6 w-6 mr-2" />
                  Special Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-900 capitalize mb-2">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <span
                            key={skill.id}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
