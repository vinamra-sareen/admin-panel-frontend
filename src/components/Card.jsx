import {
  Card,
  CardHeader,
  CardTitle,
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
          className="h-32 sm:h-48 min-w-full max-w-full"
        />
      </CardHeader>
      <CardTitle className="px-4 text-left">{card.headerTitle}</CardTitle>

      <CardBody>
        <div className="w-full flex">
          <div className="w-3/6">
            <ArcGaugeComponent />
            <span className="text-base font-semibold text-blueGray-900">
              $40,000
            </span>
            <br />
            <span className="text-sm font-normal">Raised</span>
          </div>
          <div className="w-3/6 text-left">
            <span className="ml-4 text-xs sm:text-sm">Created By:</span>
            <br />
            <span className="ml-4 text-sm sm:text-base">Vinamra Sareen</span>
            <div>
              <CardActions>
                <button className="k-button k-flat">
                  <span
                    className={
                      card.postLiked
                        ? "k-icon k-i-heart"
                        : "k-icon k-i-heart-outline"
                    }
                  />
                </button>
                <button className="k-button k-flat">
                  <span className="k-icon k-i-comment" />
                </button>
                <button className="k-button k-flat">
                  <span className="k-icon k-i-share" />
                </button>
              </CardActions>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventCard;
