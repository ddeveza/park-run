import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <Image
        src="/parkrun-hills.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="parkrun hills background"
        className="w-full h-auto"
      />
      <div className="bg-[#C4CA34] flex flex-col justify-center items-center p-8">
        <p className="text-[#ECECEC] text-xs font-bold">MyWebTop Pty Ltd</p>
        <p className="text-white text-xs">Copyright ©2023</p>
      </div>
    </div>
  );
};

export default Footer;
