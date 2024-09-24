import { ArrowRight, ChevronRight, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

import eSparkLogo from '@/assets/images/eSpark.png';
import rocketshipLogo from '@/assets/images/rocketship.png';
import stanfordLogo from '@/assets/images/stanford.png';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
      <a
        href="#"
        className="mb-7 inline-flex items-center rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200"
        role="alert"
      >
        <span className="mr-3 rounded-full bg-primary px-4 py-1.5 text-xs text-white">
          New
        </span>
        <span className="text-sm font-medium">
          Spark Space is out! See what's new
        </span>
        <ChevronRight className="ml-5 h-4 w-4" />
      </a>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Revolutionize Your Essay Grading
      </h1>
      <p className="mb-8 text-lg text-gray-500 sm:px-16 lg:text-xl xl:px-48">
        <span className="font-bold text-primary">Spark Space</span> leverages
        cutting-edge technology to provide an efficient and accurate essay
        grading platform, saving you time and enhancing the learning experience.
      </p>
      <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
        <Button>
          <Link to="#">Get started for free</Link>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">
          <Video className="mr-2 h-4 w-4" />
          <Link to="#">Watch video</Link>
        </Button>
      </div>
      <div className="px-4 text-center">
        <span className="font-semibold uppercase text-gray-400">
          Created by
        </span>
        <div className="flex w-full items-center justify-between gap-10 lg:justify-center lg:gap-20">
          <div className="max-w-[200px] flex-1">
            <img src={eSparkLogo} alt="eSpark" />
          </div>
          <div className="max-w-[200px] flex-1">
            <img src={stanfordLogo} alt="Stanford" />
          </div>
          <div className="max-w-[200px] flex-1">
            <img src={rocketshipLogo} alt="RocketShip" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
