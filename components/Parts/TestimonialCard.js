import Image from "next/image";
import {BsFillChatLeftQuoteFill} from "react-icons/bs";

export default function TestimonialCard({body, name, img}){
    return (
            <div className="flex justify-center items-center sm:flex-row flex-col">
                        <div className="max-w-[500px] w-full text-right">
                            <BsFillChatLeftQuoteFill className="text-secondary block mb-5 text-4xl"  />
                            <p className="text-md leading-[26px] font-normal mb-4 text-text-light">
                                {body}
                            </p>
                            <h6 className="mb-2 text-[16px] leading-[28px] font-extrabold uppercase text-primary">
                                - {name}
                            </h6>
                        </div>
                        <div className="sm:ml-[25px]">
                            <div className="inline-block z-50 overflow-hidden sm:w-[520px] w-[310px] h-[134px] sm:h-[342px] relative rounded-md shadow-2xl">
                                <Image src={img} width={520} height={342}  />
                            </div>
                        </div>
                </div>
    )
}