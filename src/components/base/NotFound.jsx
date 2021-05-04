import NotFoundImg from "../../assets/404.svg";

const NotFound = () => {
  return (
    <>
      <div className="container mx-auto flex items-center flex-col">
        <img src={NotFoundImg} alt="Not Found" className="m-5 w-1/3" />
        <h1 className="leading-8 text-2xl font-semibold m-16">
          Oops, I apologize we forgot to create a page with such amazing name
        </h1>
      </div>
    </>
  );
};

export default NotFound;
