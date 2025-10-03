"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { actorData } from '@/data/actor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  project: z.string().optional(),
  budget: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // In a real implementation, this would send the form data to your backend
      console.log('Form submitted:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Project inquiry or general message"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type (Optional)
                      </label>
                      <select
                        {...register('project')}
                        id="project"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="film">Film</option>
                        <option value="television">Television</option>
                        <option value="theater">Theater</option>
                        <option value="commercial">Commercial</option>
                        <option value="voice-over">Voice Over</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range (Optional)
                      </label>
                      <select
                        {...register('budget')}
                        id="budget"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under £5,000</option>
                        <option value="5k-10k">£5,000 - £10,000</option>
                        <option value="10k-25k">£10,000 - £25,000</option>
                        <option value="25k-50k">£25,000 - £50,000</option>
                        <option value="50k-plus">£50,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Tell me about your project or how I can help..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center text-green-600 bg-green-50 p-3 rounded-md"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center text-red-600 bg-red-50 p-3 rounded-md"
                    >
                      <AlertCircle className="h-5 w-5 mr-2" />
                      There was an error sending your message. Please try again.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a 
                        href={`mailto:${actorData.email}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {actorData.email}
                      </a>
                    </div>
                  </div>
                  {actorData.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a 
                          href={`tel:${actorData.phone}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {actorData.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{actorData.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Representation */}
            {actorData.agent && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Representation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">{actorData.agent.name}</p>
                      <p className="text-gray-600">{actorData.agent.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Agent Email</p>
                      <a 
                        href={`mailto:${actorData.agent.email}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {actorData.agent.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Agent Phone</p>
                      <a 
                        href={`tel:${actorData.agent.phone}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {actorData.agent.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Social Media */}
            {actorData.socialMedia && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Follow & Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {actorData.socialMedia.instagram && (
                      <a
                        href={`https://instagram.com/${actorData.socialMedia.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <span className="font-medium">Instagram</span>
                        <span>{actorData.socialMedia.instagram}</span>
                      </a>
                    )}
                    {actorData.socialMedia.imdb && (
                      <a
                        href={`https://imdb.com/name/${actorData.socialMedia.imdb}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <span className="font-medium">IMDb</span>
                        <span>View Profile</span>
                      </a>
                    )}
                    {actorData.socialMedia.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${actorData.socialMedia.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <span className="font-medium">LinkedIn</span>
                        <span>Connect</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
