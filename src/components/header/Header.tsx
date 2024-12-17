//import { Fragment } from "react/jsx-runtime";

const Header = () => {
  return (
    <div className=" px-11 flex items-center justify-between py-[5px] px-30 min-h-[60px] bg-[#ffffff6e] sticky w-full top-0 backdrop-blur-[10px] z-30  ">
      <div className=" relative flex items-center">
        <i className="fa-solid fa-magnifying-glass text-black"></i>

        <input
          type="search"
          placeholder="Type A Keyword"
          className="ml-4 focus:placeholder-transparent focus search-bar py-[9px] pl-[20px] max-w-[19em] min-w-[15em] text-[14px] rounded-[39px]"
          id="search-bar"
        />
        <label htmlFor=" search-bar ">
          <i className="fa-solid fa-xmark hidden absolute top-[27%] right-[14px]"></i>
        </label>
      </div>

      <div className=" flex flex-row-reverse items-center ">
        <p className="text-black text-[30px] font-['anton'] text-nowrap ">
          très chic
        </p>
        <img className="w-[64px]" src="./imgs/logo.png" alt="" />
      </div>

      <div className="flex justify-between items-center ">
        <a
          className="rounded-lg flex items-center no-underline content-between text-white font-semibold bg-messenger-gradient cursor-pointer px-[18px] py-[12px] h-12"
          href="https://m.me/61566390514830?text=Hello%20I%20need%20help"
          target="_blank"
        >
          <i className="fa-brands fa-facebook-messenger ml-3 text-[25px] cursor-pointer mr- "></i>
          <p>Messenger تواصل معنا عبر</p>
        </a>
      </div>
    </div>
  );
};
export default Header;
