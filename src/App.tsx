import './App.css';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Iconify from './icon';
import profile1 from './assets/images/WhatsApp Image 2025-01-15 at 15.10.17_364c1a94.jpg';
import profile2 from './assets/images/WhatsApp Image 2025-01-15 at 15.10.17_f0b0e1ad.jpg';
import image1 from './assets/images/WhatsApp Image 2025-01-23 at 19.25.58_0bb895fd.jpg';
import image2 from './assets/images/WhatsApp Image 2025-01-23 at 19.25.36_9a217c26.jpg';
import emailjs from '@emailjs/browser';
import {toast, Toaster} from 'sonner'





const projects = [
  {
    title: "URL Shortener Service",
    description: "A Node.js application that simplifies long URLs into short, shareable links.",
    features: [
      "URL shortening and redirection.",
      "Analytics to track the number of clicks.",
      "Database integration using MongoDB for persistent storage."
    ],
    tools: "Express.js, Mongoose, Nanoid, and EJS.",
    outcome: "Demonstrates the ability to design, implement, and deploy backend solutions.",
    image: image1,
    github:"https://github.com/Temiloluwa16/url-shortener"
  },
  {
    title: "Socks Shop Microservices Deployment on Kubernetes",
    description: "Deployed a microservices-based e-commerce application on a Kubernetes cluster.",
    features: [
      "Automated infrastructure setup using Terraform and Ansible.",
      "Monitoring and logging with Prometheus and Grafana.",
      "Secured communication with Let’s Encrypt SSL."
    ],
    tools: "Terraform, Ansible, Prometheus, Grafana, Kubernetes.",
    outcome: "Showcases expertise in cloud engineering, automation, and DevOps practices.",
    image: image2,
    github:"https://github.com/Temiloluwa16/AltSchool-Capstone-Project"
  }
];


function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const form:any = useRef();
  const [submitting, setSubmitting] = useState(false)
  const [email, setEmail]= useState('')
  const [text, setText] = useState('')
  const [name, setNamae]= useState('')

  const openModal = (project:any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };


  const scrollToSection = (id: string | null) => {
    const element = id ? document.getElementById(id) : null;
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  
    setIsNavOpen(false); // Close dropdown on click
  };

   const downloadAsset = (fileName: string): void => {
    const filePath = `/assets/${fileName}`; 
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  

  
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          variants={modalVariants}
          onClick={handleOverlayClick}
        >
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleOverlayClick}></div>
          <div className="bg-white rounded-lg p-6 max-w-md w-full z-10 shadow-lg md:max-w-lg lg:max-w-xl">
            <h2 className="text-xl font-semibold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="mb-4 w-full h-auto max-h-64 object-cover rounded" />
            <p className="mb-4">{selectedProject.description}</p>
            <ul className="list-disc list-inside mb-4">
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="mb-4">Tools: {selectedProject.tools}</p>
            <p className="mb-4">Outcome: {selectedProject.outcome}</p>
            <div className="flex justify-end gap-4">
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                GitHub
              </a>
              <button 
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const sendEmail = (e:any) => {
  e.preventDefault();
  setSubmitting(true);
  emailjs.sendForm('service_rrvdz74', 'template_2msx0or', form.current, 'JhaEaGwJtyxJxVDUp')
    .then((result) => {
      if(result.text === 'OK') {
        toast.success('Message sent successfully!', {
          style: {
            background: '#4caf50',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        });
        setEmail('');
        setNamae('');
        setText('');
      }
      


      setSubmitting(false);
    }, (error) => {
      if(error)
      toast.error('Something went wrong', {
        style: {
          background: '#f44336',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      });
      setSubmitting(false);
    });
};



  
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: 'custom-toast',
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        }}
      />
     <div className={'dark'}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 dark:bg-gray-900 dark:text-white">
          {/* Navbar */}
          <motion.nav
            className="flex justify-between py-6 items-center sticky top-0 bg-white dark:bg-gray-900 z-50 shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl font-bold text-blue-500 hover:text-blue-600 transition-all">Laura</div>
            <div className="hidden lg:flex gap-8 font-medium">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition-all">About</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-blue-500 transition-all">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition-all">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-all">Contact</button>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-2xl">
                {isNavOpen ? '✕' : '☰'}
              </button>
            </div>
          </motion.nav>

          {/* Mobile Dropdown Menu */}
          {isNavOpen && (
            <motion.div
              className="lg:hidden flex flex-col bg-white p-4 gap-4 shadow-md rounded-lg dark:bg-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => scrollToSection('about')} className="text-gray-800 dark:text-white">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-800 dark:text-white">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-800 dark:text-white">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-800 dark:text-white">Contact</button>
            </motion.div>
          )}

          {/* Hero Section */}
          <motion.section
            className="flex flex-col items-center text-center py-16 min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${profile1})` }}
            id="hero"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hello, I'm Laura</h1>
            <h2 className="text-2xl text-gray-500 mt-2 dark:text-gray-300">Backend Developer</h2>
            <p className="text-gray-600 mt-4 max-w-2xl dark:text-gray-300">
              Passionate about building scalable backend systems and delivering robust solutions.
            </p>
          </motion.section>

          <motion.section
            id="button"
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                onClick={() => downloadAsset('Bolade.pdf')}
                className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Download CV
              </motion.button>
              <motion.button
                className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                GitHub
              </motion.button>
            </div>
          </motion.section>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-300 mt-8">
            <motion.div 
              className='hover:cursor-pointer'
              onClick={() => window.open('https://www.linkedin.com/in/laura-bolade', '_blank', 'noopener,noreferrer')}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}>
                <Iconify icon="mdi:linkedin" />
            </motion.div>
            <motion.div 
            className='hover:cursor-pointer'
            onClick={() => window.open('https://github.com/Temiloluwa16', '_blank', 'noopener,noreferrer')}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}>
              <Iconify icon="mdi:github" />
            </motion.div>
            <motion.div
              className='hover:cursor-pointer'
              onClick={() => window.open('https://x.com/berrypringles?t=9FoUIpEBJHa8B3OiD4TMVg&s=08', '_blank', 'noopener,noreferrer')}
                whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Iconify icon="mdi:twitter" />
            </motion.div>
          </div>

          {/* About Section */}
          <motion.section
            id="about"
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center">
              <motion.img
                src={profile2}
                alt="About"
                className="rounded-lg h-[25rem] w-[20rem] shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="max-w-xl">
                <p>
                  I am a skilled backend developer with 2+ years of experience in building efficient and scalable backend
                  systems. Let’s build something amazing together!
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="experience"
            className="py-16 bg-gray-100 dark:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
            <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center">
              <motion.div
                className="bg-white shadow-md rounded-xl p-6 w-full  dark:bg-gray-700 hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I have six months of hands-on experience in backend development and AWS. During this time, I developed and deployed scalable backend systems using Node.js and Express.js, created RESTful APIs, and managed databases with MongoDB. I focused on building efficient server-side logic to ensure seamless application performance.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In addition, I worked extensively with AWS services such as EC2, S3, and CloudFormation to deploy and manage cloud-based applications. I also implemented monitoring solutions to enhance system reliability and scalability. My experience combines backend development expertise with cloud integration to deliver robust and efficient solutions.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => openModal(project)}
                className="bg-white shadow-lg rounded-xl p-6 w-80 hover:scale-105 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-xl mb-4" />
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="py-16 bg-gray-100 dark:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
            <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
            <form
              onSubmit={sendEmail}
              ref={form}
              className="mt-12 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 dark:bg-gray-700"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 dark:text-white text-center">
                Get in Touch
              </h2>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setNamae(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows={5}
                />
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.section>
        </div>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
     </div>
    </>
  );
}

export default App;
