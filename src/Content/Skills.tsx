export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 mt-14 mb-14">
          <div className="space-y-16">

            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="items-center text-4xl font-bold text-white mb-6">
                My <span className="text-yellow-400">Skills</span>
              </h2>
            </div>

            {/* Skills Categories */}
            <div className="space-y-12">
              {/* Frontend & Backend Development */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Frontend & Backend Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: 'Python', color: 'from-blue-700 to-blue-800', iconPath: '/Icons/python.png' },
                    { name: 'Java', color: 'from-blue-700 to-teal-800', iconPath: '/Icons/java.png' },
                    { name: 'JavaScript', color: 'from-amber-600 to-red-700', iconPath: '/Icons/java-script.png' },
                    { name: 'C & C++', color: 'from-blue-700 to-blue-800', iconPath: '/Icons/c-.png' },
                    { name: 'NodeJS', color: 'from-green-500 to-green-600', iconPath: '/Icons/nodejs.png' },
                    { name: 'Haskell', color: 'from-indigo-400 to-fuchsia-500', iconPath: '/Icons/haskell.png' },
                    { name: 'SQL', color: 'from-amber-700 to-blue-800', iconPath: '/Icons/sql-server.png' },
                    { name: 'HTML5', color: 'from-orange-600 to-red-700', iconPath: '/Icons/html5.png' },
                    { name: 'CSS3', color: 'from-blue-700 to-blue-800', iconPath: '/Icons/css3.png' },
                    { name: 'PHP', color: 'from-black-400 to-blue-500', iconPath: '/Icons/php.png' },
                    { name: 'CodeIgniter4', color: 'from-orange-700 to-red-800', iconPath: '/Icons/CI4.png' },
                    { name: 'React', color: 'from-cyan-800 to-teal-900', iconPath: '/Icons/sciene.png' },
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
                    { name: 'NetBeans', color: 'from-blue-700 to-purple-900', iconPath: '/Icons/NetBeans.png' },
                    { name: 'Jupyter Notebook', color: 'from-orange-800 to-orange-800', iconPath: '/Icons/jupyter.png' },
                    { name: 'MySQL', color: 'from-cyan-500 to-cyan-500', iconPath: '/Icons/mysql.png' },
                    { name: 'PostgreSQL', color: 'from-blue-500 to-cyan-600', iconPath: '/Icons/postgre.png' },
                    { name: 'Firebase', color: 'from-yellow-500 to-red-600', iconPath: '/Icons/firebase.png' },
                    { name: 'XAMPP', color: 'from-orange-600 to-orange-700', iconPath: '/Icons/xampp.png' },
                    { name: 'Figma', color: 'from-purple-800 to-purple-800', iconPath: '/Icons/figma.png' },
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
    );
}