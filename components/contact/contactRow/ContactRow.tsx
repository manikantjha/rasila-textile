import ContainerWrapper from "../../common/ContainerWrapper";
import Title from "../../common/Title";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactRow() {
  return (
    <ContainerWrapper containerWrapperClassName="bg-white">
      <Title title="Let's Get In Touch" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-neutral p-4 max-w-6xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </ContainerWrapper>
  );
}
