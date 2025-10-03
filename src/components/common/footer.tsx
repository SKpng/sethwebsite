"use client"

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react'
import { actorData } from '@/data/actor'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">Seth Karallis</h3>
            <p className="text-gray-300 mb-4">
              Professional actor based in London, bringing authenticity and depth to every role.
            </p>
            <div className="flex space-x-4">
              {actorData.socialMedia?.instagram && (
                <a
                  href={`https://instagram.com/${actorData.socialMedia.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {actorData.socialMedia?.linkedin && (
                <a
                  href={`https://linkedin.com/in/${actorData.socialMedia.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {actorData.socialMedia?.imdb && (
                <a
                  href={`https://imdb.com/name/${actorData.socialMedia.imdb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="IMDb"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#media" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="#resume" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-gray-300 hover:text-white transition-colors duration-200">
                  News
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a 
                  href={`mailto:${actorData.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {actorData.email}
                </a>
              </div>
              {actorData.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a 
                    href={`tel:${actorData.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {actorData.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{actorData.location}</span>
              </div>
            </div>
          </div>

          {/* Representation */}
          {actorData.agent && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Representation</h3>
              <div className="space-y-2">
                <p className="text-gray-300">{actorData.agent.name}</p>
                <p className="text-gray-300">{actorData.agent.company}</p>
                <a 
                  href={`mailto:${actorData.agent.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {actorData.agent.email}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Seth Karallis. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
