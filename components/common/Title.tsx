interface ITitle {
  title: string;
  description?: string;
  className?: string;
}

export default function Title(props: ITitle) {
  return (
    <div
      className={`text-center mb-8 lg:mb-16 ${
        props.className ? props.className : ""
      }`}
    >
      <h2 className="text-3xl md:text-4xl mb-4">{props.title}</h2>
      {props.description && <p className="text-lg">{props.description}</p>}
    </div>
  );
}
