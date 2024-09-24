import QuoteIcon from '@/assets/icons/quote.svg?react';

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorPosition: string;
  authorImageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  authorName,
  authorPosition,
  authorImageSrc,
}) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
      <figure className="mx-auto max-w-screen-md">
        <QuoteIcon className="mx-auto h-12 w-12 text-gray-400" />
        <blockquote>
          <p className="text-2xl font-medium text-gray-900">"{quote}"</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <img
            className="!hidden h-6 w-6 rounded-full sm:!block"
            src={authorImageSrc}
            alt={`${authorName}'s profile picture`}
          />
          <div className="flex items-center divide-x-2 divide-gray-500">
            <div className="pr-3 font-medium text-gray-900">{authorName}</div>
            <div className="pl-3 text-sm font-light text-gray-500">
              {authorPosition}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonial;
