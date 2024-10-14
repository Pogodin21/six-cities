import { useState } from "react";
import CommentSubmissionForm from "./CommentSubmissionForm";
import ReviewsList from "./ReviewsList";
import { reviews } from '../../mocks/reviews'

export type TFormData = {
  id: string
  comment: string
  date: string
  rating: number | null
  user: User
}

export type User = {
  name: string
  avatarUrl: string
  isPro: boolean
}


export function OfferReviews() {
  const [listReviews, setListReviews] = useState<TFormData[]>(reviews);
  const [formData, setFormData] = useState<TFormData>({
    id: '',
    comment: '',
    date: '',
    rating: 0,
    user: {
      name: 'Эдуард',
      avatarUrl: '',
      isPro: false
    }
  });

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList listReviews={listReviews} />
      <CommentSubmissionForm formData={formData} setFormData={setFormData} setListReviews={setListReviews} listReviews={listReviews} />
    </section>
  )
}