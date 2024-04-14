import Image from "next/image";
import HERObg from "@/assets/HERO-bg.jpg";

const Page = () => {
  return (
    <div className="">
      <div className="inset-0">
        <Image src={HERObg} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Page;
