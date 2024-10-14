import ReviewsListItems from "./ReviewsListItems";
import { TFormData } from "./OfferReviews";

type TReviewsList = {
  listReviews: TFormData[];
}

export default function ReviewsList({listReviews}: TReviewsList) {
  return (
    <ul className="reviews__list">
      {listReviews.map((review: TFormData) => <ReviewsListItems key={review.id} reviewData={review} />)}
    </ul>
  )
}