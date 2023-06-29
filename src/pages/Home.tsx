import React from "react";
import SocialButton from "../../components/SocialButton";
import Dribble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";

export default function Home() {
  // md gap 4
  // gap y 12
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-y-12 md:gap-4 mt-[10px] md:my-[20px] pb-[56px] ">
      <div className="h-[36rem] lg:h-[28rem] rounded-3xl p-10 flex flex-col gap-12 bg-[url('/gradient-bg.jpg')] bg-cover">
        <h1 className="text-4xl font-semibold dark:text-black">
          Hello, I'm a Product Manager with 7 years of experience.
        </h1>
        <p className="flex-1 dark:text-black">
          I care a lot about using design for positive impact anda enjoy
          creating user-centric, delightfull, and human experiences.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
          <button className="bg-black  text-white font-medium py-3  rounded-full w-[60%] lg:w-full ">
            Contact me
          </button>
          <div className="flex items-center gap-4  lg:mb-0">
            <SocialButton bgColor="dribble">
              <Dribble />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <Instagram />
            </SocialButton>
            <SocialButton bgColor="twitter">
              <Twitter />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <Linkedin />
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="h-[36rem] lg:h-[28rem] rounded-3xl p-8 bg-[url('/profile.jpg')] bg-cover bg-center"></div>
    </section>
  );
}
