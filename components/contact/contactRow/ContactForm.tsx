import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function ContactForm() {
  return (
    <Card>
      {/* <p className="mb-4 text-3xl  text-gray-700">Enquiry Form</p> */}
      <form className="grid grid-cols-1 gap-4">
        <div className="">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300">
              @
            </span>
            <input
              type="text"
              id="website-admin"
              className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Your Contact Number"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-primary focus:border-primary"
            placeholder="Your enquiry..."
          />
        </div>

        <Button
          type="submit"
          icon={
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          }
        >
          Send
        </Button>
      </form>
    </Card>
  );
}
