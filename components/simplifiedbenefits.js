import Image from "next/image";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap bg-white shadow-lg border border-gray-200 rounded-lg" fullWidth>
        <div
          className={`flex flex-col items-center justify-center w-full lg:w-1/2 mt-4 p-8 ${
            props.imgPos === "left" ? "lg:order-1" : "lg:order-2"
          }`}>
          <div>
            <Image
              src={data.image}
              width="auto"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-col items-start justify-center w-full lg:w-1/2 mt-4 p-8 ${
            data.imgPos === "right" ? "lg:order-2" : "lg:order-1"  
          }`}>
          <div>
            <div className="flex flex-col w-full">
                          <h3 className=" text-3xl lg:text-4xl font-bold tracking-tight text-black dark:text-black">
                {data.title}
              </h3>

                          <p className="py-4 text-lg lg:text-xl text-black dark:text-black">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
    return (
        <>
            <div className="flex items-start mt-8">
                <div>
                    <h4 className="text-x1 font-medium text-black dark:text-black">
                        {props.title}
                    </h4>
                    <p className="mt-1 text-black dark:text-black">
                        {props.children}
                    </p>
                </div>
            </div>
        </>
    );
}


export default Benefits;
