import projectOne from './assets/project1.png';
import projectTwo from './assets/project2.png';
import projectThree from './assets/project3.png';
import projectFour from './assets/project4.png';
import projectFive from './assets/project5.png';
import projectSix from './assets/project6.png';
import projectSeven from './assets/project7.png';
import projectEight from './assets/project8.png';
import projectNine from './assets/project9.png';
import projectTen from './assets/project10.webp';
import projectEleven from './assets/project11.png';
import projectTwelve from './assets/project12.png';
import projectThird from './assets/project13.png';

export const skills = [
  {
    id: 1,
    name: 'JavaScript',
    percentage: 90,
    description:
      'La gran mayoria de mis trabajos y proyectos personales fueron realizados con JS.'
  },
  {
    id: 2,
    name: 'React',
    percentage: 80,
    description: 'Mi framework por excelencia.'
  },
  {
    id: 3,
    name: 'Next.js',
    percentage: 65,
    description: 'Lo estoy aprendiendo actualmente y me encanta.'
  },
  {
    id: 4,
    name: 'Css / Scss',
    percentage: 85,
    description:
      'Me encanta el diseño y estas tecnologias, las prefiero sobre cualquier libreria de estilos.'
  },
  {
    id: 5,
    name: 'Node.js / Express',
    percentage: 80,
    description: 'Todos los backends que he realizado han sido con Node.js.'
  },
  {
    id: 8,
    name: 'Python',
    percentage: 75,
    description: 'He desarrollado un juego bellisimo con Python.'
  },
  {
    id: 7,
    name: 'MongoDB',
    percentage: 70,
    description: 'Mi base de datos preferida!'
  },
  {
    id: 8,
    name: 'Styled-Components',
    percentage: 85,
    description:
      'Estoy comenzando a implementarlo en todos mis proyectos (este portafolio por ejemplo).'
  },
  {
    id: 9,
    name: 'Socket.io',
    percentage: 75,
    description: 'Mi proyecto mas importante fue realizado con esta tecnologia.'
  }
];

export const projects = [
  {
    id: 1,
    img: projectOne,
    category: 'React',
    title: 'ESDev',
    description: 'Landing page esdev-arg.com (dada de baja)',
    href: 'https://esdev-7irx5lsn4-leanarbelo22.vercel.app/'
  },
  {
    id: 2,
    img: projectTwelve,
    category: 'React',
    title: 'Salsacate',
    description: 'Pagina para la secretaria de turismo de salsacate',
    href: 'https://secretaria-turismo-salsacate.vercel.app/'
  },
  {
    id: 3,
    img: projectThird,
    category: 'React',
    title: 'Buscador',
    description:
      'Desafio React para proceso de seleccion. Utilizando Next.js y Redux.',
    href: 'https://buscador-dun.vercel.app/'
  },
  {
    id: 4,
    img: projectTwo,
    category: 'Python',
    title: 'GOSH!',
    description:
      'Proyecto final de Bootcamp: juego realizado con Pygame, quedo entre los 3 mejores.',
    href: 'https://github.com/LeanArbelo22/GOSH-Proyecto-CodigoFacilito'
  },
  {
    id: 5,
    img: projectThree,
    category: 'Full Stack',
    title: 'Smart Effortless Filter',
    description:
      'Aplicación de escritorio para empresas, para gestionar ventas y conversaciones de WhatsApp de vendedores, además un bot que automatiza las respuestas y filtra clientes. El deploy es privado.',
    href: 'https://github.com/matiml/SEF-frontend/tree/pruebas_lean'
  },
  {
    id: 6,
    img: projectFour,
    category: 'React',
    title: 'Cinematics',
    description: 'Desafio de React para proceso de selección.',
    href: 'https://desafio-react-movies.vercel.app/'
  },
  {
    id: 7,
    img: projectFive,
    category: 'JavaScript',
    title: 'Vanilla JS Course',
    description: 'Curso Vainilla JavaScript.',
    href: 'https://leanarbelo22.github.io/VanillaJS30/'
  },
  {
    id: 8,
    img: projectSix,
    category: 'JavaScript',
    title: 'Instagram Card',
    description: 'Desafio JavaScript, CSS y HTML para proceso de selección.',
    href: 'https://frontend-test-larbelo.surge.sh/'
  },
  {
    id: 9,
    img: projectSeven,
    category: 'JavaScript',
    title: 'Gestion de notas',
    description:
      'Trabajo practico de informatica, para gestionar notas de alumnos.',
    href: 'https://leanarbelo22.github.io/gestion-notas-alumnos/'
  },
  {
    id: 10,
    img: projectEight,
    category: 'React',
    title: 'Digitall-E Ecommerce',
    description: 'Modelo de E-commerce para tienda de tecnologia.',
    href: 'https://digitall-e-a5kp.vercel.app/'
  },
  {
    id: 11,
    img: projectNine,
    category: 'Full Stack',
    title: 'Frog Maxishop',
    description: 'Trabajo final para curso full stack.',
    href: 'https://frog-react.vercel.app/'
  },
  {
    id: 12,
    img: projectTen,
    category: 'JavaScript',
    title: 'Bot Telegram',
    description: 'Bot de Telegram con chatGPT.',
    href: 'https://github.com/LeanArbelo22/TelegramBot'
  },
  {
    id: 13,
    img: projectEleven,
    category: 'React',
    title: 'Portafolio',
    description: 'Mi portafolio del 2022.',
    href: 'https://portfolio2023-bay.vercel.app/'
  }
];

export const curriculum = [
  {
    id: 1,
    title: 'Instituto Santo Domingo',
    subtitle: 'Tecnicatura en Desarrollo de Software',
    date: '08/2022 - Actualidad',
    description:
      'Java, MySQL, SQL Server, POO, Linux, Android, Python, JavaScrip, etc.',
    category: 'educacion'
  },
  {
    id: 2,
    title: 'Codigo Facilito',
    subtitle: 'Bootcamp Introduccion a la Programacion',
    date: '02/2022 - 05/2022',
    description:
      'Matematicas discretas, Fundamentos de programacion, Python, Programacion orientada a objetos (POO), Pygame',
    category: 'educacion'
  },
  {
    id: 3,
    title: 'UTN.BA',
    subtitle: 'Diplomatura en Desarrollo Web Full Stack',
    date: '04/2021 - 12/2021',
    description:
      'JavaScript, HTML, Css, Bootstrap, MySQL, MongoDB, Node.js + Express',
    category: 'educacion'
  },
  {
    id: 4,
    title: 'ESDev',
    subtitle: 'Desarrollador Full Stack',
    date: '09/2022 - 01/2023',
    description:
      'Comence trabajando como Desarrollador Frontend, para luego desempeñarme como Full Stack. Desarrollamos una aplicación de escritorio dirigida a empresas, para gestionar ventas y conversaciones de las cuentas de WhatsApp de los vendedores, además de un bot que automatiza las respuestas y filtra los potenciales clientes. Trabajamos con React, Electron, Node.js, PostgreSQL, Socket.io y Docker.',
    category: 'trabajo'
  },
  {
    id: 5,
    title: 'Telemercado - Banco de Córdoba',
    subtitle: 'Representante de Atención al Cliente',
    date: '10/2023 - Actualidad',
    description: 'Córdoba - Argentina',
    category: 'trabajo'
  },
  {
    id: 6,
    title: 'Frog Maxishop',
    subtitle: 'Cajero Especializado',
    date: '05/2019 - 06/2022',
    description: 'Montevideo - Uruguay',
    category: 'trabajo'
  },
  {
    id: 7,
    title: 'Clinica Chutro',
    subtitle: 'Secretario Administrativo',
    date: '05/2017 - 04/2018',
    description: 'Córdoba - Argentina',
    category: 'trabajo'
  }
];

export const links = [
  {
    name: 'Inicio',
    path: '#home'
  },
  {
    name: 'Skills',
    path: '#skills'
  },
  {
    name: 'Portafolio',
    path: '#portfolio'
  },
  {
    name: 'Curriculum',
    path: '#resume'
  },
  {
    name: 'Contacto',
    path: '#contact'
  }
];
