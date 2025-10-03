"use client"

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Ready to collaborate? Let&apos;s discuss your next project
        </p>
        
        <div className="grid grid-cols-2 gap-16">
          <div className="card">
            <h3 className="card-title">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  required
                />
              </div>
              
              <button type="submit" className="button button-primary">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="card">
              <h3 className="card-title">Contact Information</h3>
              <div className="card-content">
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Email</h4>
                  <p style={{ color: '#6b7280' }}>hello@sethkarallis.com</p>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Phone</h4>
                  <p style={{ color: '#6b7280' }}>+44 7911 123456</p>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Location</h4>
                  <p style={{ color: '#6b7280' }}>London, UK</p>
                </div>
                
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Representation</h4>
                  <p style={{ color: '#6b7280', marginBottom: '4px' }}>Talent Agency UK</p>
                  <p style={{ fontSize: '14px', color: '#9ca3af' }}>agent@talentagency.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}