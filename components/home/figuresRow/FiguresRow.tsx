import Card from "@/components/common/Card";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";

export default function FiguresRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Title title="Let our numbers do the talking" />
      <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="flex flex-col items-center justify-center text-center">
          <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
          <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center">
          <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            Public repositories
          </dd>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center">
          <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            Open source projects
          </dd>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center">
          <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
          <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
        </Card>
      </dl>
    </ContainerWrapper>
  );
}
