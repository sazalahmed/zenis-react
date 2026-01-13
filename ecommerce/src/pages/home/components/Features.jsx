import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto mt-6.25">
      <div className="grid grid-cols-4 gap-6.25">
        <div className="bg-[#fff2da] p-10 ml-10 mt-6.25 rounded-2xl relative">
          <div className="icon p-2 bg-primary rounded-2xl absolute w-22.5 h-22.5 -left-10 top-1/2 -translate-y-1/2">
            <img
              src="https://html.narzotech.com/zenis/assets/images/feature-icon_1.svg"
              alt="icon"
            />
          </div>
          <div className="text pl-7">
            <h3 className="text-xl font-semibold! mb-1">Return & refund</h3>
            <p className="text-paraColor">Money back guarantee</p>
          </div>
        </div>

        <div className="bg-[#DCF6FB] p-10 ml-10 mt-6.25 rounded-2xl relative">
          <div className="icon p-2 bg-[#16C4E3] rounded-2xl absolute w-22.5 h-22.5 -left-10 top-1/2 -translate-y-1/2">
            <img
              src="https://html.narzotech.com/zenis/assets/images/feature-icon_3.svg"
              alt="icon"
            />
          </div>
          <div className="text pl-7">
            <h3 className="text-xl font-semibold! mb-1">Quality Support</h3>
            <p className="text-paraColor">Always online 24/7</p>
          </div>
        </div>
        <div className="bg-[#EAF9E8] p-10 ml-10 mt-6.25 rounded-2xl relative">
          <div className="icon p-2 bg-[#71D863] rounded-2xl absolute w-22.5 h-22.5 -left-10 top-1/2 -translate-y-1/2">
            <img
              src="https://html.narzotech.com/zenis/assets/images/feature-icon_2.svg"
              alt="icon"
            />
          </div>
          <div className="text pl-7">
            <h3 className="text-xl font-semibold! mb-1">Secure Payment</h3>
            <p className="text-paraColor">30% off by subscribing</p>
          </div>
        </div>
        <div className="bg-[#D9F5F3] p-10 ml-10 mt-6.25 rounded-2xl relative">
          <div className="icon p-2 bg-[#00BBAE] rounded-2xl absolute w-22.5 h-22.5 -left-10 top-1/2 -translate-y-1/2">
            <img
              src="https://html.narzotech.com/zenis/assets/images/feature-icon_4.svg"
              alt="icon"
            />
          </div>
          <div className="text pl-7">
            <h3 className="text-xl font-semibold! mb-1">Daily Offers</h3>
            <p className="text-paraColor">20% off by subscribing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
