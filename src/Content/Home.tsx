import React from 'react';
import { Linkedin, Download, Github } from 'lucide-react';
import pictUser from '../Image/Fajar.jpg';

export default function Home() {
  // Function
  const [displayText, setDisplayText] = React.useState('');
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);
  const [charIndex, setCharIndex] = React.useState(0);
  
  const professions = [
    "Software Engineer ⚙️",
    "Data Scientist 📊",
    "Data Analyst 📈",
    "Data Management 🗃️",
    "Web Developer 💻",
    "UI/UX Designer 🎨",
  ];

  React.useEffect(() => {
    const currentText = professions[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (isTyping) {
        // Typing animation
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait before starting to erase
          setTimeout(() => {
            setIsTyping(false);
          }, 1500); // Wait 1.5 seconds before erasing
        }
      } else {
        // Erasing animation
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to next text
          setCurrentTextIndex((prevIndex) => 
            (prevIndex + 1) % professions.length
          );
          setIsTyping(true);
        }
      }
    }, isTyping ? 100 : 50); // Typing speed: 100ms, Erasing speed: 50ms

    return () => clearTimeout(timeout);
  }, [currentTextIndex, charIndex, isTyping, professions]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/File/Mochammad Fajar Maulana_CV_ATS.pdf';
    link.download = 'Mochammad Fajar Maulana_CV_ATS.pdf';
    link.click();
  };

  // Content
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 mb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, It's Me
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 leading-tight">
                  Mochammad Fajar Maulana
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  And I'm a <span className="text-cyan-400 inline-block min-w-[280px]">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                I am a graduate with a Bachelor degree in Computer Science, focusing on the development and innovation of 
                digital technologies, including artificial intelligence. I continuously enhance my knowledge and skills in the latest 
                technological advancements to contribute significantly to technological progress in the era of Industry 4.0 and beyond.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: 'https://github.com/mitharu25' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/moch-fajar-maulana-cs' }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              {/* Download CV Button */}
              <button onClick={downloadCV} className="mr-5 inline-flex items-center space-x-2 bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 transform hover:scale-105">
                <Download size={25} />
                <span>Download CV</span>
              </button>
              <br />
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-700">
                    <img
                      src={pictUser}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-cyan-400/20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-teal-500/30 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}