import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-start justify-start px-4 sm:px-10 pt-6 sm:pt-10 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="container mx-auto px-4 py-24 sm:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto text-white flex flex-col items-start justify-center overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">Contact me</h1>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed mb-8 sm:mb-16">
            <p className="italic">I'd love to hear from you!</p>
            <p>
              Whether it's about a potential collaboration, a project idea, or a simple hello, feel free to reach out.
            </p>
          </div>

          <div className="flex space-x-4 sm:space-x-8">
            <a
              href="mailto:sasmitha2073@gmail.com"
              className="group transition-transform hover:scale-110"
              aria-label="Email"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sasmitha-a-85b023273"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </a>

            <a
              href="https://github.com/sasmitha-a"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
