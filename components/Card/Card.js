import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

const Card = () => {
    return (
        <div className=" p-4 pl-2 pr-2 m-1 mt-4 font-bold bg-white w-[100%] text-black border-b-[5px] border-r-[5px] border-solid border-gray-400 border-opacity-50 rounded-[14px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-4 max-[570px]:gap-0">
                    <div className="max-[740px]:w-[50px]">
                        <img src="/images.png" alt="user-logo" height={50} width={50} />
                    </div>
                    <p className=" font-bold max-[740px]:text-[16px]">Lorem Ipsum</p>
                    <span className="bg-blue-700 text-stone-50 text-[17px] max-[740px]:text-[10px] ml-6  max-[1150px]:ml-0 rounded-[14px] pl-10 pt-[3px] pb-[3px] pr-10 max-[520px]:hidden">
                        Sector
                    </span>
                </div>
                <div className="">
                    <span className="text-[15px] max-[740px]:text-[13px] text-sky-500">2 min age</span>
                </div>
            </div>
            <div className="ml-14 max-[740px]:text-[13px] text-black text-[17px]">
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Unde eligendi eaque
                    nostrum quo earum sequi rem labore vero,
                </p>
                <div className="flex mt-2 mr-10 items-center text-[17px] max-[430px]:flex-wrap max-[740px]:text-[13px] justify-between">
                    <span className="flex items-center gap-1">
                        <FaRegHeart className="w-[24px] h-[24px] max-[740px]:w-[20px] max-[740px]:h-[20px] font-bold"/>
                        <p>2k</p>
                    </span>
                    <span className="flex items-center gap-1">
                        <FiEye className="w-[24px] h-[24px] max-[740px]:w-[20px] max-[740px]:h-[20px]"/>
                        <p>2k</p>
                    </span>
                    <span className="flex items-center gap-1">
                        <FaRegCommentAlt className="w-[22px] h-[22px] max-[740px]:w-[20px] max-[740px]:h-[20px]"/>
                        <p>2k<span className="max-[570px]:hidden"> Comments</span></p>
                    </span>
                    <span className="flex items-center gap-1">
                        <FaShareNodes className="w-[24px] h-[24px] max-[740px]:w-[20px] max-[740px]:h-[20px]"/>
                        <p>Shear</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card