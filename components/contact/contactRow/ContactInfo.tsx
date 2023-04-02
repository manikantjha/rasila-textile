import Card from "@/components/common/Card";

export default function ContactInfo() {
  return (
    <Card>
      <div className="grid grid-rows-[1fr_auto] gap-8 h-full">
        <div>
          <h2 className="text-3xl mb-4">{"How can we help you?"}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            quisquam pariatur. Commodi quam voluptate minima ipsam reiciendis,
            natus autem facilis provident. Itaque molestiae qui eligendi.
          </p>
        </div>
        <div className="space-y-1">
          <div>example@gmail.com</div>
          <div>+91 55555 66666</div>
          <div>+91 55555 66666</div>
        </div>
      </div>
    </Card>
  );
}
