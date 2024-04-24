import Image from "next/image";
import HERObg from "@/assets/HERO-bg.jpg";

const Page = () => {
  return (
    <div className="">
      <div className=" absolute inset-0">
        <Image className="object-cover" src={HERObg} alt="" fill priority />
      </div>
    </div>
  );
};

export default Page;
