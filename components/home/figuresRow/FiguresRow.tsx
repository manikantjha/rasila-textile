import Card from "@/components/common/Card";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstFigures } from "@/data/data";

export default function FiguresRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-white">
      <Title title="Let our numbers do the talking" />
      <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstFigures.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <dt className="mb-2 text-4xl font-bold text-primary">
              {item.figure}
            </dt>
            <dd className="text-gray-500">{item.description}</dd>
          </Card>
        ))}
      </dl>
    </ContainerWrapper>
  );
}
