/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import Button from "./Button";

interface IRenderButtonArgs {
  btnText?: string;
  onClick?: () => void;
  renderBtn?: () => ReactNode;
}

interface IHero extends IRenderButtonArgs {
  imgSrc: string;
  imgAlt: string;
  hasContent?: boolean;
  title?: string;
  description?: string;
}

function renderButton(args: IRenderButtonArgs) {
  if (args.renderBtn) {
    return args.renderBtn();
  } else if (args.onClick && args.btnText) {
    <Button className="mt-10 !w-fit mx-auto" onClick={args.onClick}>
      {args.btnText}
    </Button>;
  }
  return null;
}

export default function Hero(props: IHero) {
  const { imgAlt, imgSrc, description, hasContent, title, ...btnArgs } = props;
  return (
    <div className="h-[60vh] w-full overflow-hidden relative">
      <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
      {hasContent && (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-center w-full p-4 lg:w-[50%] lg:p-0">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white text-lg md:text-2xl">{description}</p>
            {renderButton(btnArgs)}
          </div>
        </>
      )}
    </div>
  );
}
