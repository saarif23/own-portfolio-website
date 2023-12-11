/* eslint-disable react/no-unescaped-entities */

import Container from "./Container";

const Banner = () => {
    return (
        <Container>
            <div className="flex items-center justify-center h-[100vh]">
                <div className="space-y-3">
                    <p className="text-[#9AA115]">----  Hello</p>
                    <h3 className="text-3xl font-extrabold">I'am <span className="text-[#9AA115]">Arif </span> Hossain</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non tenetur ducimus eos molestias quo temporibus quod? Esse, reprehenderit harum.</p>
                    <div className="pt-5" >
                        <button className="bg-[#9AA115] text-black font-semibold w-2/5 py-3 px-5 rounded-md">Download Resume</button>
                    </div>
                </div>
                <div className="h-full w-full">
                    <img className="h-full w-full "  src="https://i.ibb.co/NZ6nCnk/men5.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;