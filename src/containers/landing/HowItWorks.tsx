import { Link } from 'react-router-dom';

import TestEssayForm from '@/components/forms/TestEssayForm';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col gap-10 px-4 py-8 md:flex-row md:gap-0">
      <div className="w-full space-y-6 pr-0 md:w-1/2 md:pr-10 lg:w-7/12">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight sm:text-3xl lg:text-5xl xl:text-6xl">
          How Our Autograding System Works
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
          Our autograding system is powered by cutting-edge AI technologies that
          leverage advanced algorithms to provide accurate and efficient grading
          of essays. It saves educators time and provides students with detailed
          feedback to enhance their learning experience.
        </p>
        <div className="flex gap-4">
          <Link to="/">
            <Button>Learn more</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">Speack to Teachers</Button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-5/12">
        <TestEssayForm />
      </div>
    </section>
  );
};

export default HowItWorks;
