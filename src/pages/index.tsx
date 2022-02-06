import { Hero } from "../components/Hero";
import { Experiences } from '../components/Experiences';
import { About } from '../components/About';

import { GetStaticProps } from 'next/types';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { Projects } from "../components/Projects";

type Experience = {
  company: string,
  role: string,
  description: string,
  period: string
}

type Project = {
  thumbnail: string,
  title: string,
  description: string,
  tech: string,
  demo_link: string,
  repo_link: string
}

interface ExperiencesProps {
  experiences: Experience[],
}

interface ProjectsProps {
  projects: Project[],
}

export default function Home({ experiences, projects, resume }) {
  return (
    <>
      <main>
        <Hero />
        <About resume={resume} />
        <Experiences experiences={experiences} />
        <Projects projects={projects} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query<any>(
    [Prismic.predicates.any('document.type', ['experience', 'projects', 'resume'])], 
    {
      orderings: '[document.last_publication_date desc]'
    }
  );

  const filterExperiences = response.results.filter(res => res.type === 'experience').map(res => res.data);
  const filterProjects = response.results.filter(res => res.type === 'projects').map(res => res.data);
  const filterResume = response.results.filter(res => res.type === 'resume').map(res => res.data.resume);

  const experiences = filterExperiences.map(experience => {
    return {
      company: RichText.asText(experience.company),
      role: RichText.asText(experience.role),
      description: RichText.asText(experience.description),
      period: RichText.asText(experience.period)
    }
  });

  const projects = filterProjects.map(project => {
    return {
      thumbnail: project.thumbnail.url,
      title: RichText.asText(project.title),
      description: RichText.asText(project.description),
      tech: project.tech,
      demo_link: project.demo_link.url ?? null,
      repo_link: project.repo_link.url
    }
  });  

  const resume = filterResume.map(resume => resume.url);
 
  return {
    props: { 
      experiences,
      projects,
      resume
    }
  }
}

