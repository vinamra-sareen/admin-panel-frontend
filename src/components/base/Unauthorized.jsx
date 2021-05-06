import Img from "../../assets/authentication.svg";

const NotFound = () => {
  return (
    <>
      <div className="container mx-auto flex items-center flex-col">
        <img src={Img} alt="Unauthorized" className="m-5 w-1/3" />
        <h1 className="leading-8 text-2xl font-semibold m-16">
          Mate, you ain't got a access to this page .. !
        </h1>
      </div>
    </>
  );
};

export default NotFound;
