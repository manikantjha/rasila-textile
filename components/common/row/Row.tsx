/* eslint-disable @next/next/no-img-element */
import ContainerWrapper from "../ContainerWrapper";
import LeftColumn, { ILeftCoumn } from "./LeftColumn";
import RightColumn, { IRightColumn } from "./RightColumn";

interface IRow extends ILeftCoumn, IRightColumn {
  isMirrored?: boolean;
  containerWrapperClassName?: string;
}

export default function Row(props: IRow) {
  function renderColumns() {
    if (props.isMirrored) {
      return (
        <>
          <RightColumn
            renderRightColumn={props.renderRightColumn}
            title={props.title}
            description={props.description}
            rightColumnContainerClassName={props.rightColumnContainerClassName}
          />
          <LeftColumn
            renderLeftColumn={props.renderLeftColumn}
            imgSrc={props.imgSrc}
            imgAlt={props.imgAlt}
          />
        </>
      );
    }
    return (
      <>
        <LeftColumn
          renderLeftColumn={props.renderLeftColumn}
          imgSrc={props.imgSrc}
          imgAlt={props.imgAlt}
        />
        <RightColumn
          renderRightColumn={props.renderRightColumn}
          title={props.title}
          description={props.description}
          rightColumnContainerClassName={props.rightColumnContainerClassName}
        />
      </>
    );
  }

  return (
    <ContainerWrapper
      containerWrapperClassName={props.containerWrapperClassName}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {renderColumns()}
      </div>
    </ContainerWrapper>
  );
}
