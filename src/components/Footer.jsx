import logo from "../assets/5110680-ai (2).png";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col  justify-center items-center">
        <div className="w-full bg-gray-900 flex flex-col md:flex-row  justify-center items-center  text-white">
          <div className="h-full w-1/2  flex justify-center items-center">
            <img src={logo} className="h-24 w-24" alt="" />
            <p className="text-4xl font-normal">ePlataforma</p>
          </div>
          <div className="h-full w-1/2 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-start gap-3">
              <div className=" flex justify-center items-start  text-left gap-2">
                <span className="text-2xl">
                  <BsTelephoneFill />
                </span>
                <span>(41) 99106-6737</span>
              </div>
              <div className=" flex justify-center items-center gap-2 pb-3">
                <span className="text-2xl">
                  <MdEmail />
                </span>
                <span>bh2.eplataforma@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-900 text-white w-full flex justify-center items-center p-3">
          <div className="h-full w-40 flex justify-center items-center text-4xl border-t gap-3 py-2">
            <div className="">
              <RiInstagramFill />
            </div>
            <div>
              <RiFacebookCircleFill />
            </div>
            <div>
              <RiLinkedinBoxFill />
            </div>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center p-1">
          <span>ePlataforma </span>
          &copy; 2023
        </div>
      </div>
    </>
  );
}
