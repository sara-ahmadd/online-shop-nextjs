import mongoose, { model, models } from "mongoose";

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  email: { type: String },
  msg: { type: String },
});

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
