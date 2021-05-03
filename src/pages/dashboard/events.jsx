import { Ripple } from "@progress/kendo-react-ripple";
import { useEffect, useState } from "react";
// import { getByUsername } from "../../_services/events";
// import EventCard from "../../components/Card";

const Events = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   getByUsername()
  //     .then((res) => {
  //       if (res.status === 200) {
  //         const { events } = res.data;
  //         setEvents(events);
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

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
          <div className="mt-12 w-full flex justify-center ">
            <div className="flex flex-wrap justify-evenly w-full sm:w-8/12">
              {events.map((card, index) => {
                return <div key={index}>{/* <MiniEventCard /> */}</div>;
              })}
            </div>
          </div>
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
