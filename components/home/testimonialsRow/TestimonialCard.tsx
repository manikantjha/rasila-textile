/* eslint-disable @next/next/no-img-element */
import Card from "@/components/common/Card";

interface ITestimonialCard {
  objTestimonial: {
    id: number;
    title: string;
    description: string;
    objClient: {
      imgSrc: string;
      name: string;
      designation: string;
    };
  };
}

export default function TestimonialCard(props: ITestimonialCard) {
  return (
    <Card>
      <figure className="flex flex-col items-center justify-center text-center bg-white">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {props.objTestimonial.title}
          </h3>
          <p className="my-4">{props.objTestimonial.description}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div>{props.objTestimonial.objClient.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {props.objTestimonial.objClient.designation}
            </div>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
}
