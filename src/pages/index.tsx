import { Hero } from "../components/Hero";
import { Experiences } from '../components/Experiences';
import { About } from '../components/About';

import { GetStaticProps } from 'next/types';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Experience = {
  company: string,
  role: string,
  description: string,
  period: string
}

interface ExperiencesProps {
  experiences: Experience[],
}

export default function Home({ experiences}: ExperiencesProps) {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experiences experiences={experiences} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query<any>(
    [Prismic.predicates.at('document.type', 'experience')],
    {
      fetch: ['experience.company', 'experience.role',
        'experience.description', 'experience.period'
      ],
      pageSize: 100,
    }
  );

  const experiences = response.results.map(experience => {
    return {
      company: RichText.asText(experience.data.company),
      role: RichText.asText(experience.data.role),
      description: RichText.asText(experience.data.description),
      period: RichText.asText(experience.data.period)
    }
  });

  console.log(experiences);
  

  return {
    props: { experiences }
  }
}

