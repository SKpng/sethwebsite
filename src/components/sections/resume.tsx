"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, User, Award } from 'lucide-react'
import { credits, training, skills, actorData } from '@/data/actor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Resume() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Credits' },
    { id: 'film', label: 'Film' },
    { id: 'tv', label: 'Television' },
    { id: 'theater', label: 'Theater' },
    { id: 'commercial', label: 'Commercial' }
  ]

  const filteredCredits = activeCategory === 'all' 
    ? credits 
    : credits.filter(credit => credit.type === activeCategory)

  const groupedCredits = filteredCredits.reduce((acc, credit) => {
    if (!acc[credit.status]) {
      acc[credit.status] = []
    }
    acc[credit.status].push(credit)
    return acc
  }, {} as Record<string, typeof credits>)

  const downloadResume = () => {
    // In a real implementation, this would download the actual PDF
    alert('Resume PDF download would be triggered here')
  }

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-6">
            Resume & Credits
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <Button
            onClick={downloadResume}
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Credits Section */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Credits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {Object.entries(groupedCredits).map(([status, statusCredits]) => (
                <div key={status}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                    {status === 'completed' ? 'Completed Projects' : 
                     status === 'upcoming' ? 'Upcoming Projects' : 
                     'In Production'}
                  </h3>
                  <div className="space-y-4">
                    {statusCredits.map((credit, index) => (
                      <motion.div
                        key={credit.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="hover:shadow-md transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">
                                {credit.title}
                              </h4>
                              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {credit.year}
                              </span>
                            </div>
                            <p className="text-gray-700 font-medium mb-2">
                              Role: {credit.role}
                            </p>
                            <div className="space-y-1 text-sm text-gray-600">
                              {credit.director && (
                                <p>Director: {credit.director}</p>
                              )}
                              {credit.production && (
                                <p>Production: {credit.production}</p>
                              )}
                              {credit.theater && (
                                <p>Theater: {credit.theater}</p>
                              )}
                            </div>
                            <div className="mt-3">
                              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                credit.status === 'completed' 
                                  ? 'bg-green-100 text-green-800'
                                  : credit.status === 'upcoming'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {credit.status}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Training */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Training & Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {training.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
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
            </motion.div>

            {/* Special Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Special Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(
                      skills.reduce((acc, skill) => {
                        if (!acc[skill.category]) acc[skill.category] = []
                        acc[skill.category].push(skill)
                        return acc
                      }, {} as Record<string, typeof skills>)
                    ).map(([category, categorySkills]) => (
                      <div key={category}>
                        <h4 className="font-medium text-gray-900 capitalize mb-2">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {categorySkills.map((skill) => (
                            <span
                              key={skill.id}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
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

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{actorData.location}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{actorData.email}</p>
                    </div>
                    {actorData.phone && (
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{actorData.phone}</p>
                      </div>
                    )}
                    {actorData.agent && (
                      <div>
                        <p className="text-sm font-medium text-gray-900">Representation</p>
                        <p className="text-gray-600">{actorData.agent.name}</p>
                        <p className="text-gray-600">{actorData.agent.company}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
