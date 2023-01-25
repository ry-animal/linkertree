import Image from "next/image";
import data from "./data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) {
  return (
    <a href={href} className="">
      <div className="flex items-center flex-col mx-auto w-full justify-center mt-16">
        {/* <Image src={image} alt={""} fill /> */}
        <h1 className="font-bold mt-4 text-xl">{title}</h1>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 mb-40">
      <Image
        className="rounded-full"
        src={data.avatar}
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.title} {...link} />
      ))}
    </div>
  );
}
