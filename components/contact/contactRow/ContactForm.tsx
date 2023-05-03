/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Modal from "@/components/common/Modal";
import { IProduct } from "@/components/home/productsRow/ProductCard";
import { sendContactForm } from "@/services/api";
import { IContactForm } from "@/types/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup
      .string()
      .matches(phoneRegEx, "Enter a valid phone number")
      .required("Phone is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

interface IContactFormProps {
  objProduct?: IProduct;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function ContactForm(props: IContactFormProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IContactForm> = async (data, e) => {
    setLoading(true);
    try {
      await sendContactForm({
        ...data,
        productName: props.objProduct?.title || "",
      });
      setLoading(false);
      setError("");
      setIsOpen(true);
      reset();
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      setIsOpen(true);
    }
  };

  return (
    <Card>
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-700 mt-1 text-sm">{errors.name.message}</p>
          )}
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
              id="website-admin"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="Your email address"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-700 mt-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact Number
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Your contact number"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-700 mt-1 text-sm">{errors.phone.message}</p>
          )}
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
            placeholder="Your enquiry"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-700 mt-1 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        {error && (
          <p className="bg-red-700 px-3 py-1.5 font-semibold text-lg text-white mt-1 text-center">
            Oops! {error}
          </p>
        )}

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
          {loading && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          Send
        </Button>
      </form>
      {isOpen && (
        <Modal
          title={error ? "Failed" : "Success"}
          renderContent={() => {
            return error ? (
              <div className="grid grid-rows-[auto_1fr] gap-8 place-items-center text-center">
                <div className="grid grid-rows-[auto_auto] gap-4 w-full">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary w-full">
                      Sorry!
                    </h2>
                    <h2 className="text-3xl md:text-4xl text-primary w-full mt-2">
                      Failed to Send Message
                    </h2>
                  </div>
                  <p className="text-xl">Please try again later.</p>
                </div>
                <div>
                  <img
                    src="/error.svg"
                    alt="error"
                    className="w-[400px] h-auto my-2"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-rows-[auto_1fr] gap-8 place-items-center text-center">
                <div className="grid grid-rows-[auto_auto] gap-4 w-full">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary w-full">
                      Success!
                    </h2>
                    <h2 className="text-3xl md:text-4xl text-primary w-full mt-2">
                      Message Delivered
                    </h2>
                  </div>
                  <p className="text-xl">
                    Thank you for reaching out to us, we will reply you soon.
                  </p>
                </div>
                <div>
                  <img
                    src="/success.svg"
                    alt="success"
                    className="w-[400px] h-auto my-2"
                  />
                </div>
              </div>
            );
          }}
          handleClose={() => {
            setIsOpen(false);
            props.setIsOpen && props.setIsOpen(false);
          }}
          renderActions={() => (
            <Button
              onClick={() => {
                setIsOpen(false);
                props.setIsOpen && props.setIsOpen(false);
              }}
              className="w-full lg:w-[200px] mx-auto"
            >
              Ok
            </Button>
          )}
        />
      )}
    </Card>
  );
}
