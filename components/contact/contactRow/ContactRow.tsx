import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-gray-50">
      <Title title="Let's Get In Touch" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ContactInfo />
        <ContactForm />
      </div>
    </ContainerWrapper>
  );
}
