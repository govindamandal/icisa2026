export default function HeroSection() {
  return (
    <section
      className="bg-no-repeat bg-cover relative h-[calc(100vh-120px)]"
      id="hero"
      style={{
        backgroundImage:
          'linear-gradient(rgba(233, 233, 245, 0.7), rgba(233, 233, 245, 0.8)), url("/assets/hero-bg.jpg")'
          
      }}
    >
      <div className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-0 md:justify-start">
        <div className="flex flex-col mb-8 mx-auto items-center">
          <div className="flex flex-col items-center mb-2">
            <div className="flex flex-col mx-auto md:mx-0">
              <p className="font-bold text-4xl text-center md:text-5xl">
                1<sup>st</sup>
              </p>

              <p className="text-4xl text-center md:text-5xl font-bold">
                <span className="text-blue-800">I</span>nternational{" "}
                <span className="text-blue-800">C</span>onference
              </p>
              <p className="font-bold text-center text-lg text-black md:text-xl my-2">
                on
              </p>
              <h1 className="text-center text-2xl text-black md:text-3xl mt-4">
                <span className="font-[Ananda] font-semibold">
                  Pioneering Developments in
                </span>
              </h1>
              <h1 className="text-center text-3xl text-black md:text-5xl mt-4">
                <p className="font-bold mt-4">
                  <span className="text-blue-800">I</span>ntelligent{" "}
                  <span className="text-blue-800">S</span>ystem{" "}
                    <p className="font-bold text-center text-lg text-black md:text-xl my-2">
                        and
                    </p>
                  <span className="text-blue-800">A</span>pplications <br />
                </p>
              </h1>
              <p className="font-bold text-center text-lg text-black md:text-2xl mt-4 mb-2">
                29 <sup>th</sup> - 31 <sup>st</sup> May, 2026
              </p>
              <p className="text-center text-base text-black md:text-lg">
              <span>National Institute of Technology Delhi, </span>
              <span>New Delhi, India</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </section>
  );
}