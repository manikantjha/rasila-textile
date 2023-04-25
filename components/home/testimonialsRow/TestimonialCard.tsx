/* eslint-disable @next/next/no-img-element */
import Card from "@/components/common/Card";
import Rating from "./Rating";

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
      <div className="flex flex-col items-center justify-center text-center bg-white">
        <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-4">
          <div className="flex justify-center">
            <Rating />
          </div>
          <p className="my-4">{props.objTestimonial.description}</p>
        </div>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0 text-left">
            <div className="font-medium">
              {props.objTestimonial.objClient.name}
            </div>
            <div className="text-sm text-gray-500">
              {props.objTestimonial.objClient.designation}
            </div>
          </div>
        </figcaption>
      </div>
    </Card>
  );
}
