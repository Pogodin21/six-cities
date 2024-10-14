import { TFormData } from "./OfferReviews";
import { Months } from "../../const";

type TReviewsListItems = {
  reviewData: TFormData
}





export default function ReviewsListItems({reviewData}: TReviewsListItems) {
  const {date, rating, user, comment} =  reviewData;

  const reviewCreationDate = new Date(date);
  const year = reviewCreationDate.getFullYear()
  const month = reviewCreationDate.getMonth();
  const formattedDate = reviewCreationDate.toISOString().split('T')[0];

  const ratingPercentage = rating ? rating * 20 : 0 ;


  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingPercentage + "%"}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={formattedDate}>{`${Months[month]} ${year}`}</time>
      </div>
    </li>
  )
}