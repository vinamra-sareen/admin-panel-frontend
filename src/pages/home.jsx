import IntroSection from "../components/intro.jsx";
import EventCard from "../components/Card";
import random1 from "../assets/random-1.svg";
import random2 from "../assets/random-2.svg";
import random3 from "../assets/random-3.svg";
import random4 from "../assets/random-4.svg";
import random5 from "../assets/random-5.svg";

const Home = () => {
  const cardsData = [
    {
      thumbnailSrc: random1,
      headerTitle: "Help clean the enviroment , small donati-on matters to us",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 174,
      url: random1,
    },
    {
      thumbnailSrc: random2,
      headerTitle: "Help clean the enviroment , small donati-on matters to us",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url: random2,
    },
    {
      thumbnailSrc: random3,
      headerTitle: "Help clean the enviroment , small donati-on matters to us",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 174,
      url: random3,
    },
    {
      thumbnailSrc: random4,
      headerTitle: "Help clean the enviroment , small donati-on matters to us",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url: random4,
    },
    {
      thumbnailSrc: random5,
      headerTitle: "Help clean the enviroment , small donati-on matters to us",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 174,
      url: random5,
    },
    {
      thumbnailSrc: random1,
      headerTitle: "Help clean the enviroment , small donati-on matters to us",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url: random1,
    },
  ];

  return (
    <>
      <IntroSection />
      <hr />
      {/* <div className="container p-5 sm:py-12 sm:px-5 bg-white text-center">
        <h1 className="text-3xl sm:text-4xl font-lighter ">
          Current <span className="text-charity underline">Events</span>
        </h1>
        <input
          className="mt-12 focus:border-charity focus:ring-1 focus:ring-charity focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-500 rounded-md py-2 pl-10 w-full sm:w-3/6"
          type="text"
          aria-label="Filter Events"
          placeholder="Search ongoing charity events by name, location, creator and sponosors."
          autoFocus="autofocus"
        />
        <div className="mt-12 w-full flex justify-center ">
          <div className="flex flex-wrap justify-evenly w-full sm:w-8/12">
            {cardsData.map((card, index) => {
              return (
                <div key={index}>
                  <EventCard card={card} />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
