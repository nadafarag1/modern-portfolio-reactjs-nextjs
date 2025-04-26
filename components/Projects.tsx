import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import cicdPic from '../public/images/cicdPic.jpg'
import ecommercePic from '../public/images/ecommercePic.jpg'
import djangoRestPic from '../public/images/djangoRestPic.jpg'
import mlopsPic from '../public/images/mlopsPic.jpg'
import airbyteAirflowPic from '../public/images/airbyteAirflowPic.jpg'
import portfolioPic from '../public/images/portfolioPic.jpg'

type Props = {}

function Projects({}: Props) {

  const projects = {
    1: {name:"Multi-branch CI-CD Pipeline", picture: cicdPic, description:"A Multi-branch CI-CD Pipeline Using Jenkins, Docker, AWS, Maven To Deploy an Odoo ERP custom module & a simple Java Maven web app.", link:"https://github.com/ahmedfarag9/CI-CD-Pipeline-Jenkins-Odoo-Project", preview: ''},
    2: {name:"E-Commerce MERN App", picture: ecommercePic, description:"Full E-commerce MERN STACK Web-app, deployed on AWS EKS, implemented with Github Actions CI-CD pipeline, using Docker and Kubernetes.", link:"https://github.com/ahmedfarag9/ecommerce-webapp-mern-stack", preview: 'https://e-commerce-app-test.netlify.app/'},
    3: {name:"Django REST-API Project", picture: djangoRestPic, description:"Built with Python 3.10, Django REST Framework and Docker. Configured with unit testing and deployed on Back4App container cloud hosting.", link:"https://github.com/ahmedfarag9/django-rest-framework-api-project", preview: ''},
    4: {name:"MLOPS CICD Housepricing", picture: mlopsPic, description:"A MLOPS CI-CD imlementaion of a Linear Regression ML Model that predicts house pricing. With a simple UI & API endpoint for testing. Dockerized & packaged by pickle. Deployed on Heroku using GitHub Actions.", link:"https://github.com/ahmedfarag9/mlops-cicd-bostonhousepricing", preview: 'https://mlopscicdbostonhousepricing-ahmedfaraga12.b4a.run/'},
    5: {name:"Airbyte Airflow Intergration", picture: airbyteAirflowPic, description:"Api integration using Airbyte-Airflow Mega Docker Cluster. Airbyte handles the Api connection & Airflow does the orchestration.", link:"https://github.com/ahmedfarag9/airbyte-airflow-api-intergration", preview: ''},
    6: {name:"Modern Portfolio Website", picture: portfolioPic, description:"The one you're reading now. Built with REACT.JS & NEXT.JS Using (JavaScript, TypeScript, Framer Motion, Tailwind CSS). Automatic deployment on Github Pages using Github Actions.", link:"https://github.com/ahmedfarag9/modern-portfolio-reactjs-nextjs", preview:''},
  }

  return (
<div className="h-screen relative flex overflow-hidden text-left flex-col
    max-w-full justify-evenly mx-auto items-center z-0 pr-3">

  <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400
      text-2xl'>
        Projects
  </h3>

  <div className='container mt-24 mb-5'>

  <ul className="cards">
    {Object.entries(projects).map(([key, project]) =>  (
      <li key={key} className="card">
        <div>
          <h3 className="card-title">{project.name}</h3>

          <div className='card-zoom'>
                <Image
                className='card-zoom-project-image '
                src={project.picture}
                alt='user profile picture'
                />
              </div>
            <div className="card-content">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a
              href={project.link}
              className="card-link mb-5"
              target="_blank"
              rel="noopener noreferrer">
                Github
            </a>
            {project.preview &&
            <a
              href={project.preview}
              className="card-link-with-preview m-5"
              target="_blank"
              rel="noopener noreferrer">
                Live Preview
            </a>
            }
          </div>
        </li>




        // <li key={key} className="card">
        //   <div>
        //     <h3 className="card-title">{project.name}</h3>
        //       <Image
        //       className='relative rounded-full h-40 w-40 mx-auto object-contain '
        //       src={project.picture}
        //       alt='user profile picture'
        //       />
        //     <div className="card-content">
        //       <p>{project.description}</p>
        //     </div>
        //   </div>
        //   <div className="card-link-wrapper">
        //     <a
        //       href={project.link}
        //       className="card-link"
        //       target="_blank"
        //       rel="noopener noreferrer">
        //         Read More
        //     </a>
        //   </div>
        // </li>  
      ))}

    </ul>
    
    </div>
  </div>
  )
}

export default Projects