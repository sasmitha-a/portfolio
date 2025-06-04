export default function AboutPage() {
  const skills = [
    { name: "Python", level: 95 },
    { name: "Scala", level: 90 },
    { name: "React, Next.js", level: 90 },
    { name: "SQL", level: 92 },
    { name: "MongoDB", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Azure Services", level: 85 },
  ]

 return (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">Hey there!</h1>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm Sasmitha, a<b> Decision Science student</b> with a passion for full-stack development, data analytics, and
                AI-driven solutions.
              </p>
              <p>
                I'm committed to creating impactful
                solutions that blend data science, AI, and user-centric design, with a strong foundation in <b>Python,
                React (Next.js), TypeScript, FastAPI, SQL, and cloud technologies</b>.
              </p>
              <p>
                I completed my internship as a <b>Data and AI Consultant at Thorogood Associates</b>, where I worked on data
                engineering solutions, system optimizations, and cross-team problem-solving using <b>SQL, Scala, and Azure
                services</b>.
              </p>
              <p>
                As an <b>Executive Director of the Women Empowerment Cell</b>, I bring leadership, flexibility, and teamwork
                alongside my technical skills.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
