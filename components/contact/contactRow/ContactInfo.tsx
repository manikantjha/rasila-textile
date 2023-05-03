/* eslint-disable @next/next/no-img-element */
import Card from "@/components/common/Card";
import { objContactInfo } from "@/data/data";

export default function ContactInfo() {
  return (
    <Card>
      <div className="grid grid-rows-[1fr_auto] gap-8 h-full">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            {objContactInfo.title}
          </h2>
          <p className="text-gray-500">{objContactInfo.descrption}</p>
        </div>
        <div className="space-y-1 font-semibold">
          {objContactInfo.lstDetails.map((item) => (
            <div className="flex items-center" key={item.id}>
              {item.icon}
              <p>{item.value}</p>
            </div>
          ))}
          <div className="flex">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/919737259259"
              className="block mt-1"
            >
              <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.svg" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
