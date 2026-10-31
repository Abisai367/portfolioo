import Navbar from "./navbar.jsx";
import { GitHubCalendar } from "react-github-calendar";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
import { FaGithub, FaLinkedin} from 'react-icons/fa';
export default function Home(){
    return(
   
<motion.body className="bg-gray-900 text-white font-sans antialiased"
    initial={{ opacity: 0  }}
    whileInView={{ opacity: 1}}
    transition={{duration: 3, ease: "easeOut"}} >

    <Navbar/>
  <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center md:text-left md:pt-32 md:pb-24">
    <motion.span className="inline-flex items-center px-3 py-1 text-lg font-medium text-green-700 bg-blue-70 rounded-full mb-4"
    initial={{ opacity: 0, y: '-100%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 3, ease: "easeOut"}}>
      Available for freelance & full-time roles
    </motion.span>
    <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-50 leading-tight" 
    initial={{ opacity: 0, x: '100%' }}
    whileInView={{ opacity: 1, x: 0}}
    transition={{duration: 2, ease: "easeOut"}}>
      Hi, I'm <span className="text-green-600">Dickson Abisai.</span><br/> <br/>
      I build websites that help people and organisation scale up
    </motion.h1>

    <motion.p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"     
    initial={{ opacity: 0, x: '-100%' }}
    whileInView={{ opacity: 1, x: 0}}
    transition={{duration: 2, ease: "easeOut"}}>
      I am a fullstack web developer building web applications that are not only responsive to all devices but also secure hence ensuring user data and organisation data are protected from unauthorised access
    </motion.p>
    <motion.div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
    initial={{ opacity: 0, x: '100%' }}
    whileInView={{ opacity: 1, x: 0}}
    transition={{duration: 2, ease: "easeOut"}}>
      <Link to="/project" className="inline-flex items-center justify-center px-6 h-12 font-medium text-white active:scale-80 bg-green-600 hover:bg-green-800 rounded-xl transition shadow-sm">
        View My Work
      </Link>
      <a href="WEBDEVABISAICV.pdf" target='blank' className="inline-flex items-center justify-center hover:bg-green-800 active:scale-80 hover:text-gray-100 px-6 h-12 font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition">
        Download CV
      </a>
    </motion.div>
  </section>

  <motion.section id="work" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100"
    initial={{ opacity: 0, y: '20%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}>
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">

      <motion.div 
    initial={{ opacity: 0, y: '50%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}
      >
        <h2 className="text-2xl font-bold tracking-tight text-green-400 sm:text-3xl">Selected Projects</h2>
        <p className="mt-2 text-gray-100 font-bold text-3xl">A handpicked selection of my recent work.</p>
      </motion.div>
      
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <motion.div className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition"
    initial={{ opacity: 0, y: '50%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}
      >
        <div className="aspect-video bg-gray-100 w-full overflow-hidden">
          <img src="qrcode.png" alt="Project Thumbnail" className="w-full h-full object-cover group-hover:scale-102 transition duration-300"/>
        </div>
        <motion.div className="p-6 flex flex-col flex-1"
    initial={{ opacity: 0, y: '100%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span>Free</span>  <span>Web App</span>
          </div>
          <h3 className="text-xl font-bold text-sky-200 mt-2 group-hover:text-blue-600 transition">
            <a href="https://qrcode-abisai.vercel.app/" target="blank">
              <span className="absolute inset-0"></span>
              QR Code generator
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-600 flex-1">
            Designed and engineered a QR Code to help people share links to their cite via a qrcode
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-500">
            <span className="px-2 py-1 bg-gray-100 rounded">React</span>
            <span className="px-2 py-1 bg-gray-100 rounded">Python</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition"
    initial={{ opacity: 0, y: '50%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}      
      >
        <div className="aspect-video bg-gray-100 w-full overflow-hidden">
          <img src="weatherapp.png" alt="Project Thumbnail" className="w-full h-full object-cover group-hover:scale-102 transition duration-300"/>
        </div>
        <motion.div className="p-6 flex flex-col flex-1"
    initial={{ opacity: 0, y: '100%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}       
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            <span>API</span> <span>Integration</span>
          </div>
          <h3 className="text-xl font-bold text-sky-200 mt-2 group-hover:text-blue-600 transition">
            <a href="https://abisai367.github.io/weather-app/" target="blank">
              <span className="absolute inset-0"></span>
              Weather App
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-600 flex-1">
            A weather App build to help users know about weather changes around them and even places away from them
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-500">
            <span className="px-2 py-1 bg-gray-100 rounded">JavaScript</span>
            <span className="px-2 py-1 bg-gray-100 rounded">HTML</span>
            <span className="px-2 py-1 bg-gray-100 rounded">CSS</span>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
    <motion.div
    initial={{ opacity: 0, y: '100%' }}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration: 2, ease: "easeOut"}}>
      <h3 className="text-xl font-bold text-sky-200 mt-2 group-hover:text-blue-600 transition">My GitHub Contributions</h3>
      <div className="w-full max-w-6xl p-6 bg-zinc-950 text-white border border-zinc-800 rounded-xl">
      <GitHubCalendar 
        username="Abisai367" 
        blockSize={11}
        blockMargin={3}
        colorScheme="dark"
      />
      </div>
    </motion.div>
  </motion.section>

  {/* <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
    <div className="grid md:grid-cols-3 gap-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-sky-200">Experience & Core Stack</h2>
        <p className="mt-2 text-sm text-gray-600">A brief history of my professional journey and the core technologies I lean into daily.</p>
      </div>
      <div class="md:col-span-2 space-y-8">
      
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 pb-6 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-sky-200">Cyber attendant</h3>
            <p className="text-sm text-gray-600">NCHAMBACYBER CYBER</p>
          </div>
          <span className="text-xs font-medium text-gray-400 sm:text-right">September, 2025 — Present</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 pb-6 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-sky-200">Cyber Attendant</h3>
            <p className="text-sm text-gray-600">KWADOMMY CYBER</p>
          </div>
          <span className="text-xs font-medium text-gray-400 sm:text-right">2022 — 2024</span>
        </div>
      </div>
    </div>
  </section> */}

  <footer id="contact" className="bg-slate-950 text-white mt-20">
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Let's build something beautiful together.</h2>
      <p className="mt-4 text-gray-400 max-w-md mx-auto text-sm">
        Whether you have a specific project framework in mind or just want to chat tech, drop me an email.
      </p>
      <div className="mt-8">
        <a href="mailto:webdevabisai@gmail.com" className="inline-flex items-center justify-center px-6 h-12 font-medium text-gray-950 bg-white hover:bg-gray-100 rounded-xl transition">
          webdevabisai@gmail.com
        </a>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p className='text-lg'> {new Date().getFullYear()} &nbsp;Dickson Abisai. All rights reserved.</p>
        <div className="flex space-x-6 text-lg" >
          <a href="https://github.com/Abisai367" target="blank" className="hover:text-white transition"><FaGithub/>GitHub</a>
          <div></div>
          <a href="https://www.linkedin.com/in/dickson-abisai-b17372416/" className="hover:text-white transition"><FaLinkedin/> LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>

</motion.body>


    )
}