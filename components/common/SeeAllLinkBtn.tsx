import Link from "next/link";

interface ISeeAllLinkBtn {
  btnText?: string;
  href: string;
}

export default function SeeAllLinkBtn(props: ISeeAllLinkBtn) {
  return (
    <Link
      href={props.href}
      className="items-center mx-auto bg-gray-100 text-primary font-bold w-fit py-3 px-6 hover:bg-gray-200 flex !mt-12"
    >
      {props.btnText || "See All"}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </span>
    </Link>
  );
}
