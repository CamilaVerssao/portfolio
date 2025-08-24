import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

const ContactSection = () => {
    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In 
                    <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 border-b border-b-primary/40 pb-3"> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-start font-medium">Email</h4>
                                    <a href="mailto:camila.verssao@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        camila.verssao@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-start font-medium">Phone</h4>
                                    <a href="tel:+5541991085236" className="text-muted-foreground hover:text-primary transition-colors">
                                        +55 41 99108-5236
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-start font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Curitiba, PR, Brazil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a 
                                    target="_blank" 
                                    href="https://www.linkedin.com/in/camila-isabella-verss%C3%A3o-882056230/"
                                >
                                    <Linkedin />
                                </a>
                                <a 
                                    target="_blank" 
                                    href="https://www.instagram.com/heycamih/?theme=dark"
                                >
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6 border-b border-b-primary/40 pb-3"> Send a Message</h3>

                        <form className="space-y-6" action="">
                            <div>
                                <label className="text-start block text-sm font-medium mb-2" htmlFor="name"> Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Type your name..."
                                />
                            </div>

                            <div>
                                <label className="text-start block text-sm font-medium mb-2" htmlFor="email"> Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="email@gmail.com..."
                                />
                            </div>

                            <div>
                                <label className="text-start block text-sm font-medium mb-2" htmlFor="message"> Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />

                            </div>

                            <button type="submit" className={
                                `cosmic-button w-full flex items-center justify-center gap-2`
                            }>
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default ContactSection
