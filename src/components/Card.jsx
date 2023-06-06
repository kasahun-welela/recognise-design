import React from "react";

function Card() {
  return (
    <div className="m-7 md:grid grid-cols-2 lg:grid-cols-3 gap-4">
      {/* card one start here */}
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white">
        <div className="rounded-full w-16  p-3 bg-blue-900 hover:white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white "
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-xl">Mobile Application</h1>
        <p className="text-center">
          We help you develop creative ideas so that your business can grow more
          rapidly
        </p>

        <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white p-2 bg-blue"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* card one end here  */}

      {/* card 2 start here */}
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white">
        <div className="rounded-full w-16 p-3  bg-red-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" text-white "
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.92898 21.4821L10.775 15.636C11.4423 15.8142 12.1837 15.6416 12.7071 15.1181C13.4882 14.3371 13.4882 13.0707 12.7071 12.2897C11.9261 11.5086 10.6598 11.5086 9.87872 12.2897C9.35526 12.8132 9.18263 13.5546 9.36081 14.2218L3.51476 20.0679L2.4541 19.0072C5.28253 15.7074 6.34319 12.054 7.7574 5.92573L14.1214 5.21863L19.7783 10.8755L19.0711 17.2394C12.9429 18.6537 9.28947 19.7143 5.98964 22.5427L4.92898 21.4821ZM16.5962 2.03665L22.9428 8.38325C23.1381 8.57852 23.1381 8.8951 22.9428 9.09036C22.8679 9.16526 22.7712 9.21444 22.6665 9.23081L21.1924 9.46127L15.5356 3.80441L15.7477 2.31949C15.7868 2.04612 16.04 1.85617 16.3134 1.89523C16.4205 1.91053 16.5197 1.96015 16.5962 2.03665Z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-xl">UI/UX Design</h1>
        <p className="text-center">
          By bridging the gap between idea and implementation, we bring your
          vision to life through compelling visuals for your digital solutions.
        </p>

        <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white p-2 bg-blue"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* card 2 end here */}

      {/* card 3 start here */}
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white">
        <div className="rounded-full w-16 p-3 bg-green-500 hover:white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 5V14H20V5H4Z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-xl">Web Development</h1>
        <p className="text-center">
          We build web applications for efficient and smooth management of
          different business sectors. We apply smart interfaces to streamline
          workflow for systematic operation for businesses.
        </p>

        <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white p-2 bg-blue"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* card 3 end here */}

      {/* card 4 start here */}
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white">
        <div className="rounded-full w-16 p-3 bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-xl">Website Analytics</h1>
        <p className="text-center">
          By gathering, synthesizing and analyzing your website data, we can
          help you achieve your goal of improving your users website experience.
        </p>

        <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white p-2 bg-blue"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* card 4 end here */}

      {/* card 5 start here */}
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white">
        <div className="rounded-full w-16 p-3  bg-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.1595 10.0001C17.3358 7.6697 15.1133 6.00008 12.5009 6.00008C9.88846 6.00008 7.66598 7.6697 6.84231 10.0001H18.1595ZM6.58385 13.0001C7.05993 15.8378 9.5279 18.0001 12.5009 18.0001C14.698 18.0001 16.6193 16.8191 17.6647 15.0573H20.9683C20.9608 15.0783 20.953 15.0992 20.9451 15.1201C19.6766 18.5528 16.3746 21.0001 12.5009 21.0001C11.1084 21.0001 9.7898 20.6839 8.61295 20.1193C5.86915 21.6102 3.50024 21.9188 2.1909 20.6106C0.847101 19.2694 1.56267 15.7588 3.50394 12.2367C4.19428 10.9842 5.03962 9.7302 6.00247 8.57179C6.36179 8.13949 6.73747 7.72051 7.12757 7.31987C6.85302 7.37539 5.24718 8.17147 3.71617 10.0345C3.77393 9.77522 3.84289 9.52012 3.92249 9.26978C5.07865 5.63404 8.48217 3.00008 12.5009 3.00008C12.7308 3.00008 12.9586 3.0087 13.1842 3.02563C16.2787 1.62287 19.158 1.29938 20.3759 2.51465C21.5009 3.63795 21.4384 5.51011 20.5009 7.75671C20.4918 7.77847 20.4828 7.79991 20.4739 7.82104C21.1298 9.06983 21.5009 10.4916 21.5009 12.0001C21.5009 12.3381 21.4823 12.6718 21.446 13.0001H18.4179H6.58385ZM8.00613 19.7991C6.1803 18.7445 4.75932 17.0672 4.03351 15.0575C2.87291 17.3392 2.57399 19.2474 3.56507 20.237C4.37757 21.0491 6.00257 20.861 8.00257 19.801L8.00613 19.7991ZM20.1728 7.29218C20.178 7.28091 20.1832 7.26962 20.1884 7.2583C20.9384 5.63576 21.0009 4.26367 20.3134 3.4524C19.4442 2.58451 17.7732 2.70192 15.7906 3.62029C17.6193 4.33877 19.1559 5.63857 20.1728 7.29218Z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-xl">SEO</h1>
        <p className="text-center">
          By using SEO effectively, we can help your company’s online visibility
          increase within the algorithmic search related to your company.
          Through SEO we can increase the organic traffic towards your website
          and in turn increase your revenue.
        </p>

        <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white p-2 bg-blue"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* card 5 end here */}
      {/* card 6 start here */}
      <div className=" p-10 flex flex-col gap-5 justify-around items-center shadow-2xl rounded-2xl hover:bg-blue-700 hover:text-white">
        <div className="rounded-full w-16 p-3  bg-blue-700 hover:white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
          </svg>
        </div>
        <h1 className="font-bold text-xl">Web Optimization</h1>
        <p className="text-center">
          Through advanced strategies and tools, we improve your website
          performance further driving more organic traffic, increasing
          conversion rate and growing revenue.
        </p>

        <div className="rounded-full w-10  bg-gray-200 hover:bg-white">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white p-2 bg-blue"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* card 6 end here */}
    </div>
  );
}

export default Card;
