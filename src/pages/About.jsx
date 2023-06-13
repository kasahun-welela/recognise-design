import React from "react";
import Card from "../components/Card";

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
    <div className="">
      <h1 className="mt-32 mb-4 text-center text-2xl">
        About <span className="text-blue-600 font-semibold">Us</span>{" "}
      </h1>
      <div className=" mx-7 flex flex-col gap-3  ">
        <div>
          <p className="font-bold text-center text-xl">
            Where innovation fires inspiration and challenges the norm.
          </p>
        </div>
        <div>
          <img className="md:w-2/4" src="./aboutUs.png" />
        </div>
      </div>
      <div className="mx-7">
        <h1>
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
      <div className="m-7 lg:mx-40 md:mx-24 md:grid grid-cols-2 lg:grid-cols-3 gap-4">
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
      <div className="mx-7">
        <div>
          <h1>Our Process</h1>
          <img src="./processSmall.png" alt="process" />
          <p>
            Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
            Tristique est tellus non maecenas in egestas aliquam. Eget dolor
            pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
          </p>
        </div>
        <div>
          <div className="text-center">
            <img src="./discovery.png" alt="icon" />
            <h3 className="font-bold ">Discovery</h3>
            <p>
              Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc
              est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet
              malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
            </p>
          </div>
          <div>
            <img src="./plan.png" alt="icon" />
            <h3 className="font-bold ">Plan</h3>
            <p>
              Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat
              cras tempus vitae. Ipsum consectetur quis diam hendrerit pharetra
              amet scelerisque. Elementum risus aliquam quam etiam. Eget eu
              risus dui lacus, orci. Cras ultricies posuere adipiscing faucibu.
            </p>
          </div>
          <div>
            <img src="./execute.png" alt="icon" />
            <h3 className="font-bold ">Execute</h3>
            <p>
              Congue ridiculus at tortor mattis turpis bibendum at pulvinar
              viverra. Ultrices morbi amet quam nisl risus libero, sodales nibh
              faucibus. Sed gravida elementum auctor fermentum id sem
            </p>
          </div>
          <div>
            <img src="./deliver.png" alt="icon" />
            <h3 className="font-bold ">Deliver</h3>
            <p>
              Pellentesque id pharetra, semper neque purus. Ante lacinia in ut
              sagittis sed sapien. In facilisi in a diam. Pellentesque arcu
              faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi
              malesuada convallis velit viverra odio. Senectus consectetur fames
              in sed velit, ornare. Sed arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
