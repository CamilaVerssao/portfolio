import { ChevronRight, Github } from "lucide-react"

const projects = [
    { 
        id: 1, 
        title: 'SneakerHead E-Commerce', 
        description: 'An E-Commerce page for selling good sneakers using only HTML, CSS and JS.',
        image: '/projects/project1.png',
        tags: ['HTML', 'CSS', 'JS'],
        githubUrl: 'https://github.com/CamilaVerssao/SneakerHead-Ecommerce?tab=readme-ov-file'
    },
    { 
        id: 2, 
        title: 'Nutriplan', 
        description: 'A website designed to help people manage their dietary and nutritional health, offering guidance and resources for better eating habits.',
        image: '/projects/project2.png',
        tags: ['Vue', 'Nuxt.js', 'Node.js', 'Tailwind', 'Docker'],
        githubUrl: 'https://github.com/tcc-nutricao/nutriplan'
    },
    { 
        id: 3, 
        title: 'NewSEPT', 
        description: 'A project aimed at enhancing the design and user experience of the UFPR SEPT website.',
        image: '/projects/project3.png',
        tags: ['HTML', 'CSS', 'Tailwind'],
        githubUrl: 'https://github.com/CamilaVerssao/newSept'
    }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured 
                <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-centertext-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span className="px-2 border py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl text-start px-6 font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm px-6 text-justify">{project.description}</p>
                        <div className="flex items-center p-6">
                            <div className="flex space-x-3">
                                <a 
                                    target="_blank" 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                    href={project.githubUrl}
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/CamilaVerssao" 
                    target="_blank"
                >
                    Check My GitHub <ChevronRight size={16} />
                </a>
            </div>
        </div>
      
    </section>
  )
}

export default ProjectsSection
