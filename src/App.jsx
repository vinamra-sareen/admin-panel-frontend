import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import Header from "./components/header.jsx";
import IntroSection from "./components/sections/intro.jsx";
import EventCard from "./components/Card";

const App = () => {
  const cardsData = [
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg",
      headerTitle: "bg_traditions",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 174,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg",
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg",
      headerTitle: "bg_mountains",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg",
      headerTitle: "bg_traditions",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 174,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg",
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg",
      headerTitle: "bg_mountains",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg",
      headerTitle: "bg_traditions",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 174,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg",
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg",
      headerTitle: "bg_mountains",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg",
      headerTitle: "bg_mountains",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      url:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
    },
  ];

  return (
    <>
      <Header />
      <IntroSection />
      <div className="container p-5 bg-white text-center">
        <h1 className="text-4xl font-lighter">Current Events</h1>
        <input
          className="mt-12 focus:border-charity focus:ring-1 focus:ring-charity focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-500 rounded-md py-2 pl-10 w-full sm:w-3/6"
          type="text"
          aria-label="Filter Events"
          placeholder="Search ongoing charity events by name, location, creator and sponosors."
          autoFocus="autofocus"
        />
        <div className="mt-12 w-full flex justify-center ">
          <div className="flex flex-wrap justify-evenly w-8/12">
            {cardsData.map((card, index) => {
              return (
                <div key={index}>
                  <EventCard card={card} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-semibold p-5">
        @ 2021 - CharitAble. All rights reserved
      </div>
    </>
  );
};

export default App;
