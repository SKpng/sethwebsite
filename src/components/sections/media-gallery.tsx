"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import { headshots, demoReels } from '@/data/actor'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedReel, setSelectedReel] = useState<string | null>(null)

  const openLightbox = (imageId: string) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const openReelModal = (reelId: string) => {
    setSelectedReel(reelId)
  }

  const closeReelModal = () => {
    setSelectedReel(null)
  }

  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-6">
            Media Gallery
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Demo Reels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Demo Reels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {demoReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        onClick={() => openReelModal(reel.id)}
                      >
                        <Play className="h-6 w-6 mr-2" />
                        Play Reel
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {reel.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{reel.title}</h4>
                    <p className="text-gray-600 text-sm">{reel.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Headshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Headshots</h3>
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-200 rounded-lg p-1">
              {['all', 'commercial', 'theatrical', 'character'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200 hover:bg-white hover:text-gray-900"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Headshot Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {headshots.map((headshot, index) => (
              <motion.div
                key={headshot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(headshot.id)}
              >
                <Image
                  src={headshot.src}
                  alt={headshot.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {headshot.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={headshots.find(h => h.id === selectedImage)?.src || ''}
                  alt={headshots.find(h => h.id === selectedImage)?.alt || ''}
                  width={800}
                  height={1200}
                  className="object-contain max-h-[90vh] rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reel Modal */}
        <AnimatePresence>
          {selectedReel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeReelModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-full w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={demoReels.find(r => r.id === selectedReel)?.src}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20"
                  onClick={closeReelModal}
                >
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
