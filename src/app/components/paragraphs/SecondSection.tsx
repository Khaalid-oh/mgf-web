import React from "react";
import Image from "next/image";
import image2 from "../words/image-2.png";
import CircleSVG from "../words/CircleSVG";
import NestSVG from "../words/NestSVG";
import Dotted from  "../words/Dotted.png"

function SecondSection() {
  return (
    <div className="flex flex-col mt-32 gap-8">
      <div className="flex gap-8">
        <div className="relative w-[30rem] h-[25rem]">
          <CircleSVG />
          <div className="absolute left-[17rem] top-4 z-50">
            <NestSVG />
          </div>
          <Image
            className="z-10 absolute h-[19.4375rem] w-[19.375rem] top-10 left-10"
            src={image2}
            height={310}
            width={343}
            alt="one black dude and a happy kid"
          />
          <div className="absolute top-[13rem] ">
            <Image src={Dotted} height={174} width={174} alt="dotted" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <span className="font-bold text-3xl">Introduction</span>
          <p className="w-[31.5rem]">
            In Saudi Arabia, rare diseases remain a largely unfamiliar concept.
            Many of the population have never heard of them, let alone
            understand the implications.​ The country is not well-equipped to
            diagnose and treat these diseases, leaving many people in the dark
            about their health.​
          </p>
          <p className="w-[31.5rem]">
            The lack of resources and awareness makes it difficult for those
            suffering from rare diseases to find proper care and support.​
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[64.4375rem]">
        <p className="w-[90%]">
          The medical community in Saudi Arabia is still in the early stages of
          understanding rare diseases. There are no reliable statistics on the
          prevalence of these conditions.​ The lack of knowledge and resources
          makes it difficult to diagnose and treat patients, leaving many of
          them with no answers.​
        </p>
        <p className="w-[90%]">
          The government is beginning to take steps to improve the situation,
          but much remains to be done.​ Despite the challenges, there is hope
          that the situation will improve. The government has begun to invest in
          research and awareness campaigns to raise awareness of rare diseases.​
        </p>
        <button className="px-6 py-2 rounded-md text-white w-[8.5625rem]  bg-green-700 hover:bg-green-600 transition-all mt-4">
          Read more
        </button>
      </div>
    </div>
  );
}

export default SecondSection;
