import { Ripple } from "@progress/kendo-react-ripple";

const Events = () => {
  return (
    <>
      <div className="container m-5 sm:m-10 w-11/12">
        <div className="text-right sm:mt-5">
          <Ripple>
            <button
              className="bg-charity text-white p-2 rounded-full
              text-xs sm:font-bold sm:text-sm"
            >
              <span className="k-icon k-i-plus"></span> Create Fundraiser{" "}
            </button>
          </Ripple>
        </div>
        <hr className="mt-5" />
        <div className="created h-52 sm:h-96">
          <h2 className="font-semibold leading-6 mt-5 text-xl sm:m-5 sm:text-2xl">
            Created By you{" "}
          </h2>
        </div>
        <hr />
        <div className="donated h-52 sm:h-96">
          <h2 className="font-semibold leading-6 text-xl mt-5 sm:m-5 sm:text-2xl">
            Contributions
            <span className="k-icon k-i-heart text-red-500"></span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Events;
