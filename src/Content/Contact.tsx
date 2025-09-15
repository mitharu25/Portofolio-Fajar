import { Linkedin, Github, Mail, Clock, Phone } from 'lucide-react';
import ContactChar from '../ContactChar';

export default function Contact() {
    return(
        <section id="contact" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="space-y-16">
            {/* Contact Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <Phone size={40} className="text-blue-200" />
                    <h3 className="text-4xl font-bold text-white">Contact Me</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I'm always open to discussing new opportunities, creative projects, 
                    or potential collaborations. Don't hesitate to reach out!
                  </p>
                </div>

                {/* Contact Information */}
                <div className="flex justify-center">
                  <ContactChar />
                </div>

                <div className="bg-gradient-to-r from-cyan-400/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="text-cyan-400" size={20} />
                    <span className="text-cyan-400 font-semibold">Quick Response</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Actions */}
              <div className="space-y-8">
                {/* Main Email Button */}
                <div className="bg-slate-700/50 rounded-2xl p-8 text-center space-y-6 hover:bg-slate-600/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="text-slate-900" size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Send Me an Email</h3>
                    <p className="text-gray-300">
                      Click the button below to open Gmail and send me a message directly
                    </p>
                  </div>
                  <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=fajamaulana1010@gmail.com&su=Hello%20from%20your%20Portofolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:from-cyan-300 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Mail size={24} />
                  <span>Send Email</span>
                </a>
                </div>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-2 gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/mitharu25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-black to-black rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Github className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-semibold">GitHub</h4>
                    <p className="text-gray-400 text-sm mt-1">Projects</p>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/moch-fajar-maulana-cs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <p className="text-gray-400 text-sm mt-1">Professional</p>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
}