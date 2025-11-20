import { Mail, Github, Linkedin, Music2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-muted-foreground mb-6">
        Whether you want to collaborate, have questions, or just want to say hi — I'm always happy to connect!
      </p>

      <div className="flex items-center gap-2 mb-6">
        <Mail className="w-5 h-5 text-muted-foreground" />
        <a href="mailto:sisilia770@gmail.com" className="text-primary hover:underline">
          sisilia770@gmail.com
        </a>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/sisiliasinaga" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-primary" />
        </a>
        <a href="https://www.linkedin.com/in/sisilia-sinaga-a34069123/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-primary" />
        </a>
        <a href="https://soundcloud.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Music2 className="w-5 h-5 hover:text-orange-500" />
        </a>
      </div>
    </div>
  );
}
