import { Github, Linkedin, Music2 } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="mt-4 flex flex-col gap-2">
                <a href="https://github.com/sisiliasinaga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/sisilia-sinaga-a34069123/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://soundcloud.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                    <Music2 className="w-5 h-5" />
                    <span>SoundCloud</span>
                </a>
            </div>
            <p>
                Hi! I&apos;m Sisilia — a technologist and creative with roots in computer science, mathematics, and the arts. I&apos;m passionate about 
                blending technology and art to create meaningful experiences and enrich the communities around me.
            </p>
            <p>
                I graduated from Northwestern University in 2022 (go &apos;cats!) with double majors in computer science and mathematics. During my time there,
                I was an undergraduate researcher in the <a href="https://www.sralab.org/research/labs/assistive-robotics" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                Assistive & Rehabilitation Robotics Laboratory (argallab)</a> under Professor <a href="https://www.argallab.northwestern.edu/people/brenna/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                Brenna Argall</a>. My work focused on using machine learning and statistical methods along with developing software for robotic 
                systems to improve the lives of stroke patients and patients with spinal cord injuries. You can learn more about one of the projects I contributed to <a 
                href="https://arxiv.org/pdf/2203.10704" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">here</a>, which I also presented at the 2022 International Conference on Rehabilitation Robotics (ICORR). 
            </p>
            <p>
                After college, I worked as a software engineer at Microsoft under Mixed Reality, where I was part of the development team for the 
                Microsoft HoloLens 2 and the IVAS (Integrated Visual Augmentation System) program. During my time there, I explored 
                the intersection of software, hardware, and human-computer interaction for both enterprise and government applications, helping to 
                build immersive applications that seamlessly bridged physical and digital experiences. In 2023, I was honored to speak at the annual Grace Hopper 
                Conference in Orlando, FL, where I helped lead a workshop on introductory game design for extended reality (XR).
            </p>
            <p>
                Creativity and the arts have always been core to who I am. I started playing the violin when I was 4 years old and continued to play in 
                orchestras and ensembles throughout my life. While I don't currently play music professionally, I still enjoy writing and producing music 
                in my free time and writing very enthusiastic reviews about new releases and albums I like (you can read a few of these here). I also enjoy dancing, 
                which I only started getting into during my time in college, and I'm currently a member of <a 
                href="https://www.instagram.com/newagetheatrics/?hl=en" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">New Age Theatrics</a>, a performing arts dance company located in the bay area. Check 
                out our <a href="https://www.youtube.com/watch?v=ORIN3kuINkQ&pp=ygURbmV3IGFnZSB0aGVhdHJpY3M%3D" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">recent first-place set at World of Dance 
                Bay Area 2025</a>!
            </p>
            <p>
                While I've always loved pursuing my creative passions on the side, I always knew I wanted to do something more with these 
                interests, which has led me to my current goal of exploring music technology and computational arts in a deeper, more research-driven way. 
                Following a recent layoff from Microsoft, I'm currently seeking new job opportunities (please reach out if you have any leads!) — but more 
                importantly, I'm also using this time to reconnect with my interdisciplinary interests in music, code, and interaction. I'm actively preparing 
                to apply to PhD programs in music technology and computational arts. My long-term goal is to build tools and experiences that empower artistic 
                expression through technology — whether that's through audio software, immersive interfaces, or other creative tools.
            </p>
            <p>
                In the meantime, I'm developing creative personal projects, brushing up on DSP and audio programming, and looking to collaborate with others 
                who share a passion for merging code, creativity, and culture. I'll be blogging about my experiences and thoughts on this journey here on 
                this site. Feel free to follow along if you'd like, and I'm always open to chatting about new projects or ideas and meeting new people, 
                especially other creatives and technologists (or both)!
            </p>
        </section>
    )
}