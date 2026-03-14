import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Button from './button';
import { SiMinutemailer } from 'react-icons/si';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation", "Integrations", "Changelog"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Partners"]
    },
    {
      title: "Resources",
      links: ["Community", "Contact", "Support", "FAQ", "Newsletter"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Security"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/" },
    { icon: Twitter, label: "Twitter", href: "https://www.twitter.com/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/" },
   
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
                <div className='flex flex-row items-center mb-4'> 
                    <img src="img/logo.jpeg" alt="party logo" srcset="" className='rounded-4xl h-16 w-16 mx-4' />
                  <h2 className="text-white text-xl md:text-2xl font-zentry font-bold mb-4 uppercase">liberal democratic Party</h2>  
                  
                </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">

                LDP is structured like a modern institution, separating governance from politics for efficiency and accountability.<br />
                 Members of the administrative wing do not contest political seats while in office.
              </p>
               <p className="text-gray-400 mb-6 leading-relaxed">
                
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
              
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className=" font-robert-medium flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>libdemkenya@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+254 704768765</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4 uppercase font-robert-regular">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="text-white font-semibold mb-3">Subscribe to our newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Get the latest updates and news delivered to your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
               <Button
                  title="Subscribe"
                   containerClass="
                   mt-2
                   inline-flex items-center justify-center 
                   px-8 py-4 
                   !bg-green-400 text-black 
                   font-bold 
                   shadow-lg 
                   gap-2 
                   hover:bg-green-300 
                   transition
                   "
                   rightIcon={<SiMinutemailer />}
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Liberal Democratic Party. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}