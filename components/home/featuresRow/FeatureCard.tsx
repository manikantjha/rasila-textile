import Card from "@/components/common/Card";

interface IFeatureCard {
  objFeature: {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
  };
}

export default function FeatureCard(props: IFeatureCard) {
  return (
    <Card className="text-center">
      <div className="mx-auto w-fit">{props.objFeature.icon}</div>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.objFeature.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {props.objFeature.description}
      </p>
    </Card>
  );
}
