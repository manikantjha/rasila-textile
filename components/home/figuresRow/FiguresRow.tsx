import Card from "@/components/common/Card";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import { lstFigures } from "@/data/data";

export default function FiguresRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Title title="Let our numbers do the talking" />
      <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lstFigures.map((item, index) => (
          <Card
            key={item.id}
            className="flex flex-col items-center justify-center text-center"
          >
            <dt className="mb-2 text-3xl font-extrabold">{item.figure}</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              {item.description}
            </dd>
          </Card>
        ))}
      </dl>
    </ContainerWrapper>
  );
}
