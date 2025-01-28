import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "so_long",
      description: "A small 2D game developed as part of 42 curriculum using the MinilibX graphics library. The game involves collecting items and finding the exit while avoiding obstacles.",
      technologies: ["C", "MinilibX", "Game Development"],
      githubUrl: "https://github.com/GustaDNS/so_long",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "push_swap",
      description: "An efficient sorting algorithm implementation that sorts data on a stack, with a limited set of instructions, using the lowest possible number of actions.",
      technologies: ["C", "Algorithms", "Data Structures"],
      githubUrl: "https://github.com/GustaDNS/push_swap",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "minitalk",
      description: "A small data exchange program using UNIX signals, implementing client-server communication between two programs.",
      technologies: ["C", "UNIX Signals", "IPC"],
      githubUrl: "https://github.com/GustaDNS/minitalk",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] min-h-screen text-white">
      {/* Hero Section with Animated Background */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl shadow-primary/20 border-2 border-primary/20">
                <img
                  src="https://i.imgur.com/557dNoD.png"
                  alt="Gustavo Siqueira"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="inline-block">
                  <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-purple-300 text-transparent bg-clip-text">
                    Gustavo Siqueira
                  </h1>
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-purple-300 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-300 mb-8 mt-4">
                  Software Developer | Technology Enthusiast | E2S Student
                </p>
                <div className="flex justify-center md:justify-start gap-6">
                  <a href="https://github.com/GustaDNS" target="_blank" rel="noopener noreferrer" 
                     className="bg-dark-light p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-dark-light/80 transition-all transform hover:-translate-y-1">
                    <Github size={24} />
                  </a>
                  <a href="mailto:gsengdaniel@gmail.com" 
                     className="bg-dark-light p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-dark-light/80 transition-all transform hover:-translate-y-1">
                    <Mail size={24} />
                  </a>
                  <a href="https://linkedin.com/in/gusdns" target="_blank" rel="noopener noreferrer" 
                     className="bg-dark-light p-3 rounded-lg text-gray-300 hover:text-primary hover:bg-dark-light/80 transition-all transform hover:-translate-y-1">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-purple-300 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="bg-dark-light/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Olá! Meu nome é Gustavo Siqueira, tenho 20 anos e sou estudante na E2S. Minha paixão por tecnologia me guia para explorar suas inúmeras aplicações em áreas como a indústria biomédica, eletrotécnica e desenvolvimento de software. Acredito que a tecnologia, quando bem aplicada, pode transformar vidas e moldar o futuro.
              </p>
              <p>
                Além disso, sou um entusiasta da filosofia, buscando compreender o mundo e os desafios que enfrentamos de maneira mais profunda. Nos momentos livres, dedico-me ao desporto, com um carinho especial pelo volleyball, que me ensina disciplina, trabalho em equipe e superação.
              </p>
              <p>
                Atualmente, estou direcionando meus estudos para o fascinante ramo da saúde, onde pretendo combinar tecnologia e conhecimento humano para criar soluções que realmente façam a diferença.
              </p>
              <p>
                Este portfólio reflete minha jornada, projetos e habilidades desenvolvidas ao longo do tempo. Espero que você encontre inspiração e valor no que compartilho aqui!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-500/5 backdrop-blur-lg"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-purple-300 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-purple-300 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "C Programming",
              "Data Structures",
              "Algorithms",
              "UNIX Systems",
              "Problem Solving",
              "Git",
              "Shell Scripting",
              "Memory Management",
              "System Programming"
            ].map((skill) => (
              <div key={skill} 
                   className="bg-dark-light/50 backdrop-blur-lg p-6 rounded-xl text-center transform hover:-translate-y-1 transition-all hover:shadow-lg hover:shadow-primary/20 group">
                <Code2 className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-purple-300 transition-colors" />
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-light/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Gustavo Siqueira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;