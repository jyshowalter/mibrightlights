import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="join join-vertical w-full pt-36">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Is the price per person or per vehicle?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              The price is per vehicle. You can bring as many people as legally
              allowed in your vehicle.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is the maximum vehicle height?
          </div>
          <div className="collapse-content">
            <p className="text-success">Details coming soon.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are bathrooms available?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              Yes, porta potties are available in the Santa Land area.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is there music?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              Yes, tune your car stereo to X.XX FM to listen to our show.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I stop and take pictures?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              You can take as many pictures as you like while driving through,
              but stopping is not allowed. You can visit Santa Land for a
              walk-through display with additional photo opportunities.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do I need to purchase tickets in advance?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              Yes, it is highly recommended to purchase tickets online in
              advance to guarantee entry. We expect to sell out during the
              season, and drive-up ticket sales may not be available.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do the bracelets work?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              You can purchase bracelets online here. They will automatically
              sync with the show as you drive through.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer group rates?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              Please email us for information on group rates.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Does the show run in the rain/snow?
          </div>
          <div className="collapse-content">
            <p className="text-success">Yes, the show runs rain or shine.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you accept cash/cards at the gate?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              Yes, both cash and cards are accepted.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can we drive an RV, limo, or bus through the show?
          </div>
          <div className="collapse-content">
            <p className="text-success">No, these vehicles are not allowed.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is there a speed limit?
          </div>
          <div className="collapse-content">
            <p className="text-success">
              There is no specific speed limit, but you must keep pace with the
              vehicle in front of you. No stopping is allowed.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are we allowed re-entry?
          </div>
          <div className="collapse-content">
            <p className="text-success">No, tickets are single-use only.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
