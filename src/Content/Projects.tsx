import React from 'react';
import { X, Github } from "lucide-react";

export default function Projects() {
    // Function
    const [selectedProject, setSelectedProject] = React.useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

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

    // Content
    return(
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
                    features: ["User Authentication (login)", "Shopping Cart", "Payment Order",  "Management Data Product", "Management Data Order", "Management Data User", "Management Data Payment", "Data Dashboard (Chart)", "Export Report Data (Excel Format)"],
                    gitLink: "https://github.com/mitharu25/ECommerce-Cake.git"
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
                    features: ["User Authentication (login)", "Purchase", "Payment", "Management Data Product", "Management Data Purchasing", "Management Data User"],
                    gitLink: "https://github.com/mitharu25/ECommerce-Car.git"
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
                    features: ["User Authentication (login)", "Automatic Polygon Colour Area", "Maker Location", "Management Data Report Flood", "Management Data User", "Data Dashboard (Chart)", "Export Report Data (Excel Format)"],
                    gitLink: "https://github.com/mitharu25/Flood-Tracker.git"
                    },
                    {
                    title: "Recommendation College Major",
                    description: "This project develops a college major recommendation model using the Gaussian Naive Bayes algorithm. The Accuracy score reached 88,2%, while the average Precision 89%, Recall, and F1-Score were 88%, then Cross-Validation 88,1%. These results indicate that the model performs quite well.",
                    fullDescription: "This project is a thesis undertaken to obtain a Bachelor of Computer Science degree, focusing on the development of a college major recommendation model using the Gaussian Naive Bayes algorithm. The variables used as model training features include the average high school subject grades from semesters 1 to 6, interests and aptitudes (using RIASEC), and the field of study. Meanwhile, the college major serves as the target label. The dataset consists of synthetic (artificial) data generated through rule-based synthetic data generation, where each data point was designed based on specific scenarios to form patterns toward certain college majors. A total of 40 classes (scenarios) were used, each containing 190 data points, resulting in a dataset of 7,600 records in total. The evaluation results show that the model achieved an Accuracy score of 88,2%, with average Precision 89%, Recall, and F1-Score reaching 88%. The cross-validation result yielded 88,1% with a normal Learning Curve, indicating that the model is not overfitting. The Confusion Matrix also shows a predominantly normal distribution. Overall, this model performs quite well and has the potential to be further developed. After that, the model is implemented in the prototype web application.",
                    image: '/Image/RekomendasiJurusan/Capture0.PNG',
                    images: [
                        "/Image/RekomendasiJurusan/Capture1.PNG",
                        "/Image/RekomendasiJurusan/Capture2.PNG",
                        "/Image/RekomendasiJurusan/Capture3.PNG",
                        "/Image/RekomendasiJurusan/Capture0.PNG",
                        "/Image/RekomendasiJurusan/Capture3,5.PNG",
                        "/Image/RekomendasiJurusan/Capture4.PNG",
                        "/Image/RekomendasiJurusan/Capture5.PNG",
                    ],
                    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Flask", "HTML", "Boostrap 5"],
                    category: "Machine Learning",
                    features: ["Input Subject Grades", "Test RIASEC", "Recommendation College Major", "Result Chart"],
                    gitLink: "https://github.com/mitharu25/Recommendation-Collage-Major.git"
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

                    <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Project Links</h4>
                        <div className="space-y-3">
                        <a
                            href={selectedProject.gitLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 w-full justify-center"
                        >
                            <Github size={20} />
                            <span>View Source Code</span>
                        </a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            )}
        </section>
    );
}