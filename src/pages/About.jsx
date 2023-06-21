import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Collaboration from "../components/Collaboration";

function About() {
  const coreValue = [
    {
      id: 1,
      title: "Efficency",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh dignissim in eu dolor mattis id mi pellentesque. Et massa nunc nullam magna ut quis cursus quam. Odio sit phasellus aliquet mattis etiam ornare.",
      img: "./desktop.png",
      cssClass: "bg-violet-100",
    },
    {
      id: 2,
      title: "Accountablity",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh dignissim in eu dolor mattis id mi pellentesque. Et massa nunc nullam magna ut quis cursus quam. Odio sit phasellus aliquet mattis etiam ornare.",
      img: "./desktop.png",
      cssClass: "bg-lime-100",
    },
    {
      id: 3,
      title: "Efficency",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh dignissim in eu dolor mattis id mi pellentesque. Et massa nunc nullam magna ut quis cursus quam. Odio sit phasellus aliquet mattis etiam ornare.",
      img: "./desktop.png",
      cssClass: "bg-rose-50",
    },
  ];
  return (
    <div className="mx-7">
      <h1 className="mt-32 mb-4 text-center text-2xl">
        About <span className="text-blue-600 font-semibold">Us</span>{" "}
      </h1>
      <div className=" md:flex gap-3 md:w-3/4 mx-auto  ">
        <div>
          <p className="font-bold text-center md:text-start text-xl md:text-4xl">
            Where innovation fires inspiration and challenges the norm.
          </p>
        </div>
        <div>
          <img className="" src="./aboutUs.png" />
        </div>
      </div>
      <div className="text-center mt-3">
        <h1 className="text-3xl">
          Who <span className="text-blue-600 font-semibold">we are...</span>{" "}
        </h1>
        <p className="mt-4">
          We are driven by values <br></br> We strive to be a company that has
          strong and long lasting bond with their clients and work along side
          them for the same goal.Through teamwork we make continous endeavors to
          establish a well-organized and professional online image for your
          company.
        </p>
      </div>

      <h1 className="text-3xl font-bold text-center mt-5">Core Values</h1>
      <div className="my-7 lg:mx-40 md:mx-24 md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {coreValue.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            description={value.description}
            img={value.img}
            cssClass={value.cssClass}
          />
        ))}
      </div>
      <h1 className="mt-32 mb-4 text-center text-2xl font-bold">Our Process</h1>
      <div className="md:flex gap-7 md:w-4/5 md:justify-center">
        <div className="md:w-1/2 md:flex justify-end">
          <img src="./processSmall.png" className="md:h-full " alt="process" />
        </div>
        <div className="md:w-1/2 basis-2/4  ">
          <div>
            <p>
              Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
              Tristique est tellus non maecenas in egestas aliquam. Eget dolor
              pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
            </p>
          </div>
          <div className="md:flex ">
            <div className="flex justify-center ">
              <img
                src="./discovery.png"
                className="md:h-12 md:w-24"
                alt="icon"
              />
            </div>
            <div className="md:ml-3">
              <h3 className="font-bold text-center md:text-start ">
                Discovery
              </h3>
              <p className="text-justify">
                Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut
                nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam.
                Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
              </p>
            </div>
          </div>

          <div className="md:flex">
            <div className="flex justify-center">
              <img src="./plan.png" className="md:h-12 md:w-24" alt="icon" />
            </div>
            <div className="md:ml-3">
              <h3 className="font-bold text-center md:text-start">Plan</h3>
              <p className="text-justify">
                Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat
                cras tempus vitae. Ipsum consectetur quis diam hendrerit
                pharetra amet scelerisque. Elementum risus aliquam quam etiam.
                Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing
                faucibu.
              </p>
            </div>
          </div>
          <div className="md:flex">
            <div className="flex justify-center">
              <img src="./execute.png" className="md:h-12 md:w-24" alt="icon" />
            </div>

            <div className="md:ml-3">
              <h3 className="font-bold text-center md:text-start">Execute</h3>
              <p className="text-justify">
                Congue ridiculus at tortor mattis turpis bibendum at pulvinar
                viverra. Ultrices morbi amet quam nisl risus libero, sodales
                nibh faucibus. Sed gravida elementum auctor fermentum id sem
              </p>{" "}
            </div>
          </div>
          <div className="md:flex">
            <div className="flex justify-center">
              <img src="./deliver.png" className="md:h-12 md:w-24" alt="icon" />
            </div>
            <div className="md:ml-3">
              <h3 className="font-bold text-center md:text-start">Deliver</h3>
              <p className="text-justify">
                Pellentesque id pharetra, semper neque purus. Ante lacinia in ut
                sagittis sed sapien. In facilisi in a diam. Pellentesque arcu
                faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi
                malesuada convallis velit viverra odio. Senectus consectetur
                fames in sed velit, ornare. Sed arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Collaboration />
    </div>
  );
}

export default About;
