import { companyName } from "@/data/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-neutralDark shadow border-t">
      <div className="w-full mx-auto container md:py-6 py-4 px-5 md:px-0 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            {companyName}™
          </Link>
          . All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-200 sm:mt-0">
          <li>
            <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
