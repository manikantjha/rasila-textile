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
      <h3 className="mb-2 text-2xl font-semibold text-gray-900">
        {props.objFeature.title}
      </h3>
      <p className="font-normal text-gray-500">
        {props.objFeature.description}
      </p>
    </Card>
  );
}
