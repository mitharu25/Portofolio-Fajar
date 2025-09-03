import React from 'react';
import { FileCode } from "lucide-react";
import { Linkedin, Download, Menu, X, Github, Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import pictUser from './Image/Fajar.jpg';
import ContactChar from './ContactChar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(true);
  const [charIndex, setCharIndex] = React.useState(0);
  const [selectedCertificate, setSelectedCertificate] = React.useState<any>(null);
  
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700/50">
        <nav className="container mx-auto px-8 lg:px-16 xl:px-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
              MyPortofolio.
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4 mt-4">
                {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Home Section */}
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
              <button className="mr-5 inline-flex items-center space-x-2 bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 transform hover:scale-105">
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

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 mt-14 mb-14">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">
                My <span className="text-yellow-400">Skills</span>
              </h2>
            </div>

            {/* Skills Categories */}
            <div className="space-y-12">
              {/* Frontend Development */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Frontend & Backend Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: 'Python', color: 'from-blue-700 to-blue-800', iconPath: '/Icons/python.png' },
                    { name: 'JavaScript', color: 'from-amber-600 to-red-700', iconPath: '/Icons/java-script.png' },
                    { name: 'C++', color: 'from-blue-700 to-blue-800', iconPath: '/Icons/c-.png' },
                    { name: 'React', color: 'from-cyan-800 to-teal-900', iconPath: '/Icons/sciene.png' },
                    { name: 'HTML5', color: 'from-orange-600 to-red-700', iconPath: '/Icons/html5.png' },
                    { name: 'CSS3', color: 'from-blue-700 to-blue-800', iconPath: '/Icons/css3.png' },
                    { name: 'PHP', color: 'from-black-400 to-blue-500', iconPath: '/Icons/php.png' },
                    { name: 'CodeIgniter4', color: 'from-orange-700 to-red-800', iconPath: '/Icons/CI4.png' },
                    { name: 'MySQL', color: 'from-cyan-500 to-cyan-500', iconPath: '/Icons/mysql.png' }
                  ].map((skill, index) => (
                    <div key={index} className="group">
                      <div className="bg-slate-700/50 rounded-lg p-6 text-center hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white p-2`}>
                          <img 
                            src={skill.iconPath} 
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Science & ML */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Data Science & Machine Learning</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: 'Pandas', color: 'from-indigo-400 to-pink-500', iconPath: '/Icons/pandas.png' },
                    { name: 'NumPy', color: 'from-blue-800 to-indigo-900', iconPath: '/Icons/numpy.png' },
                    { name: 'Scikit-Learn', color: 'from-blue-600 to-blue-700', iconPath: '/Icons/scikit-learn.png' },
                    { name: 'TensorFlow', color: 'from-orange-600 to-orange-700', iconPath: '/Icons/tensorflow.png' },
                    { name: 'Matplotlib', color: 'from-blue-600 to-blue-700', iconPath: '/Icons/math.png' }
                  ].map((skill, index) => (
                    <div key={index} className="group">
                      <div className="bg-slate-700/50 rounded-lg p-6 text-center hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white p-2`}>
                          <img 
                            src={skill.iconPath} 
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Others */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Tools & Others</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: 'Git', color: 'from-orange-800 to-orange-900', iconPath: '/Icons/git.png' },
                    { name: 'VS Code', color: 'from-purple-800 to-blue-900', iconPath: '/Icons/vscode.png' },
                    { name: 'Figma', color: 'from-purple-800 to-purple-800', iconPath: '/Icons/figma.png' },
                    { name: 'Jupyter Notebook', color: 'from-orange-800 to-orange-800', iconPath: '/Icons/jupyter.png' },
                    { name: 'XAMPP', color: 'from-orange-600 to-orange-700', iconPath: '/Icons/xampp.png' },
                    { name: 'Firebase', color: 'from-yellow-500 to-red-600', iconPath: '/Icons/firebase.png' }
                  ].map((skill, index) => (
                    <div key={index} className="group">
                      <div className="bg-slate-700/50 rounded-lg p-6 text-center hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white p-2`}>
                          <img 
                            src={skill.iconPath} 
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 mt-14 mb-14">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">
                My <span className="text-blue-400">Projects</span>
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Cake",
                  description: "This full-stack project e-commerce application web based development for selling cakes, this project helps Wulan Cookies (UMKM) to sell and order cakes. It offers users a wide range of features, from a shopping cart to payment for orders.",
                  fullDescription: "This cake e-commerce application is to help sell products at Wulan Cookies (UMKM). The web-based application uses languages ​​and frameworks, namely Html, PHP, Javascript, CSS (Boostrap 5 + custom), MySQL, and CodeIgniter 4. This application has 2 users, namely Buyer and Admin. The features offered by the buyer user include ordering products, shopping carts, order payments, and setting user profiles. The features offered by the admin user are of course managing data on everything in the application and having a dashboard, in addition there is a feature to export order and sales data reports using Microsoft Excel format.",
                  image: '/Image/Cake/Capture1.PNG',
                  images: [
                    "/Image/Cake/Capture1.PNG",
                    "/Image/Cake/Capture2.PNG",
                    "/Image/Cake/Capture3.PNG",
                    "/Image/Cake/Capture4.PNG",
                    "/Image/Cake/Capture5.PNG",
                    "/Image/Cake/Capture6.PNG",
                    "/Image/Cake/Capture7.PNG",
                    "/Image/Cake/Capture8.PNG"
                  ],
                  technologies: ["CodeIgniter 4", "HTML", "JavaScript", "Boostrap 5", "PHP", "MySQL"],
                  category: "Full Stack",
                  features: ["User Authentication (login)", "Shopping Cart", "Payment Order",  "Management Data Product", "Management Data Order", "Management Data User", "Management Data Payment", "Data Dashboard (Chart)", "Export Report Data (Excel Format)"]
                },
                {
                  title: "E-commerce Car",
                  description: "A simple full-stack project e-commerce application web based development for car sales, featuring purchasing and payment for purchased cars and several data management features. The application has two users with different access rights.",
                  fullDescription: "This is a simple project (a major college assignment) to create a web-based car e-commerce application. This application features car purchasing and payment. It has two users: the buyer and the admin. The admin user can only manage product (car), purchase, and user data. The application was created using CodeIgniter 3, HTML, PHP, JavaScript, and a MySQL database.",
                  image: '/Image/Car/ACapture.PNG',
                  images: [
                    "/Image/Car/ACapture.PNG",
                    "/Image/Car/ACapture2.PNG",
                    "/Image/Car/ACapture3.PNG",
                    "/Image/Car/ACapture4.PNG",
                    "/Image/Car/ACapture5.PNG",
                    "/Image/Car/ACapture6.PNG",
                    "/Image/Car/ACapture7.PNG"
                  ],
                  technologies: ["CodeIgniter 3", "HTML", "JavaScript", "Boostrap 5", "PHP", "MySQL"],
                  category: "Full Stack",
                  features: ["User Authentication (login)", "Purchase", "Payment", "Management Data Product", "Management Data Purchasing", "Management Data User"]
                },
                {
                  title: "Flood Tracker",
                  description: "A full-stack flood tracker project (geographic information system) to monitor flooding in an area. This application uses leaflet colored with polygons to identify flood-affected areas. It also features to add flood reports by marking them on the map.",
                  fullDescription: "This full-stack project is the development of a geographic information system (flood tracker) application for flood tracker in Bandung Regency. This application displays a map with various colored polygons, each color representing a different area status. Of course, there are maker points to mark the location of the flood event along with information about the event. The application was built using HTML, PHP, JavaScript, Leaflet (as a map), a MySQL database, and was built without a framework (Native). This project is only a prototype and can be developed further.",
                  image: '/Image/FloodTracker/Capture1.PNG',
                  images: [
                    "/Image/FloodTracker/Capture1.PNG",
                    "/Image/FloodTracker/Capture2.PNG",
                    "/Image/FloodTracker/Capture3.PNG",
                    "/Image/FloodTracker/Capture4.PNG",
                    "/Image/FloodTracker/Capture5.PNG",
                    "/Image/FloodTracker/Capture6.PNG"
                  ],
                  technologies: ["Native", "Leaflet", "HTML", "JavaScript", "Boostrap 5", "PHP", "MySQL"],
                  category: "Full Stack",
                  features: ["User Authentication (login)", "Automatic Polygon Colour Area", "Maker Location", "Management Data Report Flood", "Management Data User", "Data Dashboard (Chart)", "Export Report Data (Excel Format)"]
                },
                {
                  title: "Recommendation College Major",
                  description: "This project develops a college major recommendation model using the Gaussian Naive Bayes algorithm. The accuracy score reached 88%, while the average precision, recall, and F1-score were 89%. These results indicate that the model performs quite well.",
                  fullDescription: "This project is a thesis undertaken to obtain a Bachelor of Computer Science degree, focusing on the development of a college major recommendation model using the Gaussian Naive Bayes algorithm. The variables used as model training features include the average high school subject grades from semesters 1 to 6, interests and aptitudes (using RIASEC), and the field of study. Meanwhile, the college major serves as the target label. The dataset consists of synthetic (artificial) data generated through rule-based synthetic data generation, where each data point was designed based on specific scenarios to form patterns toward certain college majors. A total of 40 classes (scenarios) were used, each containing 190 data points, resulting in a dataset of 7,600 records in total. The evaluation results show that the model achieved an accuracy score of 88%, with average precision, recall, and F1-score reaching 89%. The cross-validation result yielded 0.8878 with a normal learning curve, indicating that the model is not overfitting. The confusion matrix also shows a predominantly normal distribution. Overall, this model performs quite well and has the potential to be further developed. After that, the model is implemented in the prototype web application.",
                  image: '/Image/RekomendasiJurusan/Capture0.PNG',
                  images: [
                    "/Image/RekomendasiJurusan/Capture1.PNG",
                    "/Image/RekomendasiJurusan/Capture2.PNG",
                    "/Image/RekomendasiJurusan/Capture3.PNG",
                    "/Image/RekomendasiJurusan/Capture0.PNG",
                    "/Image/RekomendasiJurusan/Capture4.PNG",
                    "/Image/RekomendasiJurusan/Capture5.PNG",
                  ],
                  technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Flask", "HTML", "Boostrap 5"],
                  category: "Machine Learning",
                  features: ["Input Subject Grades", "Test RIASEC", "Recommendation College Major", "Result Chart"]
                }
              ].map((project, index) => (
                <div key={index} className="group">
                  <div 
                    className="bg-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed text-justify">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-600/50 text-cyan-400 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={closeProjectModal}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image Carousel */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-slate-700">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Carousel Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-cyan-400' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Description & Features */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Project Description</h4>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Technologies & Links */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-slate-600/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Section - Placeholder */}
      <section id="certificates" className="min-h-screen flex bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 mt-14 mb-1">
          <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">
                My <span className="text-orange-400">Certificates</span>
              </h2>
            </div>

            {/* Certificates Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image: '/Image/Sertifikat/Belajar_Dasar_ManPro.PNG',
                  title: "Belajar Dasar Manajemen Proyek"
                },
                {
                  image: '/Image/Sertifikat/soon.PNG',
                  title: "Soon"
                },
                {
                  image: '/Image/Sertifikat/soon.PNG',
                  title: "Soon"
                },
                {
                  image: '/Image/Sertifikat/soon.PNG',
                  title: "Soon"
                },
                {
                  image: '/Image/Sertifikat/soon.PNG',
                  title: "Soon"
                },
              ].map((certificate, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => openCertificateModal(certificate)}>
                  <div className="bg-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeCertificateModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
              
              {/* Certificate Image */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}

      {/* Contact Section - Placeholder */}
      <section id="contact" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="space-y-16">
            {/* Contact Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-white mb-8">Contact Me</h3>
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

    </div>
  );
}

export default App;