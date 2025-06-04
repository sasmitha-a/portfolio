"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "CleanSight",
      description: [
        "A Data Quality and Preprocessing Tool",
        "Developed a tool for automated data cleaning, imputation, encoding, and scaling.",
        "Implemented outlier detection using Isolation Forest and generated detailed PDF profiling reports with visual insights.",
        "Tech Stack: FastAPI, Pandas, scikit-learn, React (Next.js), TypeScript, Tailwind CSS, Shadcn UI"],
      image: "/Cleansight.jpeg?height=600&width=1200",
      link: "https://github.com/sasmitha-a/CleanSight",
    },
    {
      id: 2,
      title: "Employee Attrition Prediction",
      description: ["Employee attrition, the departure of employees from an organization, presents a significant challenge for businesses.",
        "This project delves into the application of advanced unsupervised learning techniques—Isolation Forest and Gaussian Mixture Model (GMM)—to uncover patterns and factors contributing to employee attrition.",
      "Tech Stack: Python, Scikit-learn, Pandas, Seaborne, Streamlit"],
      image: "/emp-attrition.png?height=600&width=1000",
      link: "https://github.com/sasmitha-a/Employee-Attrition",
    },
    {
      id: 3,
      title: "Job Recommendation System",
      description: ["A Flask web application that utilizes machine learning to categorize resumes into different job categories.",
        "Smart Resume Categorization: Predicts the most suitable job category for a given resume using a trained machine learning model, supporting roles like Python Developer, Data Scientist, Web Designer, and more.",
        "Text Preprocessing for Accuracy: Cleans the input resume text by removing noise such as URLs, mentions, and special characters to improve prediction performance.",
         "Tech Stack: Python, Excel, Jupyter Notebook" ],
      image: "/job-rec.png?height=600&width=900",
      link: "https://github.com/sasmitha-a/Job_Recommendation_System",
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-10 py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column */}
          <div className="flex-1 text-white flex flex-col justify-center items-start text-left px-4">
            <h1 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h1>
              <ul className="list-disc pl-5 text-white/80 mb-6 space-y-2">
      {projects[currentProject].description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
            <Button asChild>
              <a
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative w-full h-72 md:h-96">
            <Image
              src={projects[currentProject].image || "/placeholder.svg"}
              alt={projects[currentProject].title}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProject ? "bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
