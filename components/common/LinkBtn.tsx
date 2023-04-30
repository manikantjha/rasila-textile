import Link from "next/link";

interface ISeeAllBtn {
  href: string;
  text?: string;
}

export default function LinkBtn(props: ISeeAllBtn) {
  return (
    <Link
      href={props.href}
      className="block mx-auto text-center p-2 font-bold bg-accent text-gray-900 !w-[200px] hover:bg-accentDark hover:shadow-sm"
    >
      {props.text || "See All"}
    </Link>
  );
}
