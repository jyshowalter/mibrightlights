import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="join join-vertical w-full pt-36">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What are your hours?
          </div>
          <div className="collapse-content">
            <p>4pm to 9pm</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I bring outside food and drink?
          </div>
          <div className="collapse-content">
            <p>As long as you don't litter!</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I take pics and video?
          </div>
          <div className="collapse-content">
            <p>Of course, just please avoid flash.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
