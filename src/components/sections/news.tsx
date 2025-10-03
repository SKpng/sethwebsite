"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Star, Award, Film } from 'lucide-react'
import { newsItems } from '@/data/actor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'

export function News() {
  const getIconForType = (type: string) => {
    switch (type) {
      case 'booking':
        return <Film className="h-5 w-5" />
      case 'award':
        return <Award className="h-5 w-5" />
      case 'news':
        return <Star className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'booking':
        return 'New Booking'
      case 'award':
        return 'Award'
      case 'news':
        return 'News'
      default:
        return 'Update'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'bg-blue-100 text-blue-800'
      case 'award':
        return 'bg-yellow-100 text-yellow-800'
      case 'news':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-6">
            News & Updates
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-lg transition-shadow duration-300 ${
                item.featured ? 'ring-2 ring-gray-900' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getIconForType(item.type)}
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                    {item.featured && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <CardTitle className="text-lg font-serif">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-serif mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Follow Seth for the latest news, projects, and behind-the-scenes content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://instagram.com/sethkarallis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Follow on Instagram
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Get In Touch
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
