import { getAllPostsMeta } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { Github, Linkedin } from "lucide-react";

export const dynamic = 'force-static';

export default async function Home() {
  const projects = getAllPostsMeta();

  return (
    <div className="flex flex-col lg:h-[calc(100vh-8rem)] lg:min-h-0">
      {/* Hero Section */}
      <section className="flex-shrink-0 space-y-8 animate-fade-in-up mb-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-fade-in">
            Hi, I&apos;m Sisilia!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            A technologist and creative blending code, music, and art to build meaningful experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/sisiliasinaga" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 hover:bg-primary-50 dark:hover:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 hover:border-primary-300 dark:hover:border-primary-600 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:shadow-soft group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/sisilia-sinaga-a34069123/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 hover:bg-primary-50 dark:hover:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 hover:border-primary-300 dark:hover:border-primary-600 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:shadow-soft group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
          {/*<a 
            href="https://soundcloud.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 hover:bg-primary-50 dark:hover:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 hover:border-primary-300 dark:hover:border-primary-600 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:shadow-soft group"
          >
            <Music2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>SoundCloud</span>
          </a> */}
        </div>
      </section>

      {/* Two Column Layout: About (Left) and Projects (Right) with Independent Scrolling */}
      {/* On mobile, this will stack and scroll normally. On desktop, each column scrolls independently */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in-up lg:overflow-hidden lg:min-h-0" style={{ animationDelay: '0.1s' }}>
        {/* About Section - Left - Scrollable on desktop */}
        <section className="flex flex-col lg:overflow-hidden lg:min-h-0">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex-shrink-0">About</h2>
          <div className="flex-1 lg:overflow-y-auto lg:scrollbar-thin lg:pr-2 lg:-mr-2">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hi! I&apos;m Sisilia — a technologist and creative with roots in computer science, mathematics, and the arts. I&apos;m passionate about 
                blending technology and art to create meaningful experiences and enrich the communities around me.
              </p>
              <p>
                I graduated from Northwestern University in 2022 (go &apos;cats!) with double majors in computer science and mathematics. During my time there,
                I was an undergraduate researcher in the <a href="https://www.sralab.org/research/labs/assistive-robotics" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors font-medium" target="_blank" rel="noopener noreferrer">
                Assistive & Rehabilitation Robotics Laboratory (argallab)</a> under Professor <a href="https://www.argallab.northwestern.edu/people/brenna/" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors font-medium" target="_blank" rel="noopener noreferrer">
                Brenna Argall</a>. My work focused on using machine learning and statistical methods along with developing software for robotic 
                systems to improve the lives of stroke patients and patients with spinal cord injuries. You can learn more about one of the projects I contributed to <a 
                href="https://arxiv.org/pdf/2203.10704" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors font-medium" target="_blank" rel="noopener noreferrer">here</a>, which I also presented at the 2022 International Conference on Rehabilitation Robotics (ICORR) in Rotterdam, Netherlands. 
              </p>
              <p>
                After college, I worked as a software engineer at Microsoft under Mixed Reality, where I was part of the development team for the 
                Microsoft HoloLens 2 and the IVAS (Integrated Visual Augmentation System) program. During my time there, I explored 
                the intersection of software, hardware, and human-computer interaction for both enterprise and government applications, helping to 
                build immersive applications that seamlessly bridged physical and digital experiences. In 2023, I was honored to speak at the annual Grace Hopper 
                Conference in Orlando, FL, where I helped lead a workshop on introductory game design for extended reality (XR).
              </p>
              <p>
                Currently, I am a founding engineer at a startup called InZone, a social media platform dedicated to creating a healthier and more sustainable social media ecosystem for Gen Z. 
                As a founding engineer, I lead design and development of the 3D avatar system, which is a key component of the platform. While the avatar system is still in development,
                the app itself is live and in use by the public - check it out on the App Store and Google Play Store!
              </p>
              <p>
                Creativity and the arts have always been core to who I am. I started playing the violin when I was 4 years old and continued to play in 
                orchestras and ensembles throughout my life. While I don&apos;t currently play music professionally, I still enjoy writing and producing music 
                in my free time and writing very enthusiastic reviews about new releases and albums I like (you can read a few of these here). I also enjoy dancing, 
                which I only started getting into during my time in college, and I was also a member of <a 
                href="https://www.instagram.com/newagetheatrics/?hl=en" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors font-medium" target="_blank" rel="noopener noreferrer">New Age Theatrics</a>, a performing arts dance company located in the Bay Area. Check 
                out our <a href="https://www.youtube.com/watch?v=ORIN3kuINkQ&pp=ygURbmV3IGFnZSB0aGVhdHJpY3M%3D" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline transition-colors font-medium" target="_blank" rel="noopener noreferrer">first-place set at World of Dance 
                Bay Area 2025</a>!
              </p>
              <p>
                While I&apos;ve always loved pursuing my creative passions on the side, I always knew I wanted to do something more with these 
                interests, which has led me to my current goal of exploring music technology and computational arts in a deeper, more research-driven way. 
                I&apos;m now trying to reconnect with my interdisciplinary interests in music, code, and interaction by exploring music technology and computational arts in a deeper, more research-driven way. I&apos;m actively preparing 
                for a PhD program in media arts and music technology. My long-term goal is to build tools and experiences that empower artistic 
                expression and musical performance through technology — whether that&apos;s through audio software, immersive interfaces, or other creative tools.
              </p>
              <p>
                In the meantime, I&apos;m developing creative personal projects, brushing up on DSP and audio programming, and looking to collaborate with others 
                who share a passion for merging code, creativity, and culture. I&apos;ll be blogging about my experiences and thoughts on this journey here on 
                this site. Feel free to follow along if you&apos;d like, and I&apos;m always open to chatting about new projects or ideas and meeting new people, 
                especially other creatives and technologists (or both)!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section - Right - Scrollable on desktop */}
        <section className="flex flex-col lg:overflow-hidden lg:min-h-0">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex-shrink-0">Projects</h2>
          <div className="flex-1 lg:overflow-y-auto lg:scrollbar-thin lg:pr-2 lg:-mr-2">
            <div className="space-y-6">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <PostCard key={project.slug} post={project} basePath="/projects" />
                ))
              ) : (
                <p className="text-muted-foreground">No projects yet. Check back soon!</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
