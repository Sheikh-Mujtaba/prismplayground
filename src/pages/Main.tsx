import React from "react";

interface MainProps {
  bgColor: string;
  txtColor: string;
  primaryColor: string;
  secondaryColor: string;

  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setTxtColor: React.Dispatch<React.SetStateAction<string>>;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
  setSecondaryColor: React.Dispatch<React.SetStateAction<string>>;
}

const Main: React.FC<MainProps> = ({
  bgColor,
  setBgColor,
  txtColor,
  setTxtColor,
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
}) => {
  const handleBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };
  const handleTxtColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxtColor(e.target.value);
  };
  const handlePrimaryColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(e.target.value);
  };
  const handleSecondaryColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(e.target.value);
  };

  return (
    <>
      {/* Full Page Wrapper */}
      <div className="w-full h-full" style={{ backgroundColor: bgColor }}>
        {/* Main Content */}
        <div className="px-[10vw] py-[1vh] h-[95vh]">
          <div
            className="h-[100%] flex justify-between items-center"
            style={{ color: txtColor }}
          >
            {/* Main Text */}
            <div className="flex flex-col items-start gap-[3rem]">
              <p className="text-7xl font-bold text-start">
                Visualize Your <br />
                <span style={{ color: primaryColor }}>Colors</span> & Fonts{" "}
                <br /> On a Real Site
              </p>
              <p className="text-xl text-start">
                Choosing colors or typography for your website? <br /> Use the
                Toolbar below to realize your choices.
              </p>

              <button
                className="px-[2rem] py-[1rem] rounded text-white text-l"
                style={{ backgroundColor: primaryColor }}
              >
                Get Started
              </button>
            </div>

            {/* Color Boxes */}
            <div className="flex flex-col gap-[2rem]">
              <div className="flex gap-[2rem]">
                <div
                  className="w-[20rem] h-[20rem] rounded"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="w-[5rem] h-[20rem] rounded"
                  style={{ backgroundColor: secondaryColor }}
                />
              </div>
              <div className="flex gap-[1rem]">
                <div
                  className="w-[10rem] h-[10rem] rounded"
                  style={{ backgroundColor: secondaryColor }}
                />
                <div
                  className="w-[10rem] h-[10rem] rounded"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="w-[5rem] h-[10rem] rounded"
                  style={{ backgroundColor: secondaryColor }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Realtime Colors Section */}
        <div className="h-[100vh] px-[10vw] py-[4vh]" style={{ color: txtColor }}>
          <div className="flex flex-col gap-[5rem]">
            <p className="text-5xl font-bold">Why Realtime Colors?</p>

            <div className="flex justify-between">
              <div className="w-[30rem] h-[18rem] bg-black bg-opacity-20 rounded py-[1.3rem] px-[2rem] flex flex-col justify-around border">
                <p className="text-2xl">Save Time</p>
                <p className="text-xl text-start">
                  No need to spend hours implementing different variations of
                  colors. Decide right away!
                </p>
              </div>

              <div className="w-[30rem] h-[18rem] bg-black bg-opacity-20 rounded py-[1.3rem] px-[2rem] flex flex-col justify-around border">
                <p className="text-2xl">It’s Realistic</p>
                <p className="text-xl text-start">
                  Color Palettes make it hard to pick. This tool distributes the
                  colors on a real website.
                </p>
              </div>

              <div className="w-[30rem] h-[18rem] bg-black bg-opacity-20 rounded py-[1.3rem] px-[2rem] flex flex-col justify-around border ">
                <p className="text-2xl">It’s Simple</p>
                <p className="text-xl text-start">
                  Push a few buttons, and there you have it! Your very own
                  branding colors, ready to export.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Picker */}
        <div
          className="fixed top-[90%] w-[50%] left-[25%] px-[2vw] py-[2vh] bg-black text-white flex justify-around items-center rounded mx-auto border"
        >
          <label>
            Background Color
            <input
              type="color"
              aria-label="Choose Background Color"
              onChange={handleBgColor}
            />
          </label>
          <label>
            Text Color
            <input
              type="color"
              aria-label="Choose Text Color"
              onChange={handleTxtColor}
            />
          </label>
          <label>
            Primary Color
            <input
              type="color"
              aria-label="Choose Primary Color"
              onChange={handlePrimaryColor}
            />
          </label>
          <label>
            Secondary Color
            <input
              type="color"
              aria-label="Choose Secondary Color"
              onChange={handleSecondaryColor}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Main;
