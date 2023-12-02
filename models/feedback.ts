import mongoose, { model, models } from "mongoose";

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    email: String,
    msg: String,
    img: String,
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
