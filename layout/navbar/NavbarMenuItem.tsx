import Link from "next/link";

interface INavbarMenuItem {
  objMenuItem: {
    name: string;
    path: string;
  };
  isActive?: boolean;
  onClick: () => void;
}

export default function NavbarMenuItem(props: INavbarMenuItem) {
  return (
    <li onClick={props.onClick}>
      <Link
        href={props.objMenuItem.path}
        className={`block py-2 pl-3 pr-4 md:p-0 ${
          props.isActive
            ? "text-accent font-semibold bg-primary md:bg-transparent"
            : "md:text-white text-gray-700"
        } md:hover:underline md:hover:underline-offset-4`}
        aria-current="page"
      >
        {props.objMenuItem.name}
      </Link>
    </li>
  );
}
