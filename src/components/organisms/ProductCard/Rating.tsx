import { useState } from "react";

interface RatingProps {
  rating: number;
  numReviews: number;
}

const Rating = (props: RatingProps) => {
  const [iconSize, setIconSize] = useState("14px");
  return <div>Rating</div>;
};

export default Rating;
