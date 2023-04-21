import React from "react";
import logo from "../../assets/MedBio.png";
import { Button } from "../../components";
import icons from "../../ultil/icons";
const { AiOutlinePlusCircle } = icons;

const Header = () => {
  return (
    <div className="w-1100 flex item-center justify-between bg-slate-400">
      <img
        src={logo}
        alt="logo"
        className="w-[250px] h-[100px] object-contain"
      />
      <div className="flex items-center gap-3">
        <small className="text-[#000]">
          Chào mừng bạn đến với bình nguyên vô tận!
        </small>
        <Button text={"Đăng Nhập"} textColor="text-white" bgColor="bg-[#000]" />
        <Button text={"Đăng Ký"} textColor="text-white" bgColor="bg-[#000]" />
        <Button
          text={"Đăng Tin Mới"}
          textColor="text-white"
          bgColor="bg-[#000]"
          IcAfter={AiOutlinePlusCircle}
        />
      </div>
    </div>
  );
};

export default Header;
