import { useState } from "react"

const skills = [
    { name: 'Vue', level: 90, category: 'frontend'},
    { name: 'React', level: 50, category: 'frontend'},
    { name: 'Angular', level: 20, category: 'frontend'},
    { name: 'HTML/CSS', level: 90, category: 'frontend'},
    { name: 'Nuxt.js', level: 50, category: 'frontend'},
    { name: 'Tailwind CSS', level: 90, category: 'frontend'},
    { name: 'Bootstrap', level: 70, category: 'frontend'},
    { name: 'JavaScript', level: 90, category: 'frontend'},

    { name: 'Node.js', level: 90, category: 'backend'},
    { name: 'Laravel', level: 30, category: 'backend'},
    { name: 'Spring Boot', level: 20, category: 'backend'},
    { name: 'Knex', level: 80, category: 'backend'},
    { name: 'Prisma', level: 60, category: 'backend'},
    { name: 'Express', level: 70, category: 'backend'},
    { name: 'MySQL', level: 90, category: 'backend'},
    { name: 'PostgresSQL', level: 40, category: 'backend'},

    { name: 'Git', level: 80, category: 'tools'},
    { name: 'Docker', level: 20, category: 'tools'},
    { name: 'Figma', level: 30, category: 'tools'},
    { name: 'VSCode', level: 90, category: 'tools'}
]

const SkillsSection = () => {
    const categories = ['all', ...new Set(skills.map(skill => skill.category))]
    const [activeCategory, setActiveCategory] = useState('all')
    const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory)

    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-2-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My 
                    <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                px-5 py-2 rounded-full transition-color duration-300 capitalize
                                ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div className="bg-card p-6 rounded-lg shadow-xs card-hover" key={index}>
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                    style={{width: skill.level + "%"}} 
                                />
                            </div>
                            
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level + '%'}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
