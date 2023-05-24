import Image from "next/image";
import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-[#F0F8FF] w-[90px] h-screen space-y-4">
      {/* <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      /> */}
      <div className="text-[#004F95]">Vajra</div>
      <div className="flex flex-col space-y-8">
        <HomeIcon className=" text-white bg-[#004F95]  opacity-[0.85]" />
        <RiCompassFill className=" text-[#F78117] text-2xl" />
        <FaMicrophoneAlt className=" text-[#F78117] ml-1" />
        <ChartBarIcon className=" text-[#F78117]" />
        <ClockIcon className=" text-[#F78117]" />
        <DotsHorizontalIcon className=" text-[#F78117]" />
        <FaMicrophoneAlt className=" text-[#F78117] ml-1" />
        <ChartBarIcon className=" text-[#F78117]" />
        <ClockIcon className=" text-[#F78117]" />
        <DotsHorizontalIcon className=" text-[#F78117]" />
      </div>
    </section>
  );
}

export default Sidebar;
