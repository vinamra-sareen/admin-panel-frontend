import {
  Card,
  CardHeader,
  CardBody,
  CardActions,
  CardImage,
} from "@progress/kendo-react-layout";
import ArcGaugeComponent from "./ArcGauge";

const EventCard = ({ card }) => {
  return (
    <Card className="w-auto shadow-md mt-1 my-5">
      <CardHeader className="k-hbox bg-transparent" style={{ padding: "0" }}>
        <CardImage
          src={card.url}
          className="h-32 sm:h-44 min-w-full max-w-full"
        />
      </CardHeader>

      <CardBody>
        <div className="w-full">
          <span className="text-base sm:text-xl font-bold">
            {card.headerTitle &&
              (card.headerTitle.length > 10
                ? card.headerTitle.substring(0, 25) + " ..."
                : card.headerTitle)}
          </span>
          <div className="mt-8 w-full flex">
            <div className="w-3/6">
              <ArcGaugeComponent />
              <span className="text-sm sm:text-base font-semibold text-blueGray-900">
                $40,000
              </span>
              <br />
              <span className="text-xs sm:text-sm font-normal">Raised</span>
            </div>
            <div className="w-3/6 text-left">
              <span className="ml-4 text-xs sm:text-sm">Created By</span>
              <br />
              <span className="ml-4 text-sm sm:text-base">Vinamra Sareen</span>
              <div>
                <CardActions>
                  <button className="k-button k-flat">
                    <img
                      src="https://img.icons8.com/dusk/64/26e07f/donate.png"
                      className="w-8 sm:w-10"
                    />
                  </button>
                  <button className="k-button k-flat">
                    <img
                      src="https://img.icons8.com/android/24/000000/more.png"
                      className="w-4 sm:w-6"
                    />
                  </button>
                </CardActions>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventCard;
