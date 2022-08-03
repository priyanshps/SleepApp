const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    changesToSee: [
      {
        type: String,
        required: true,
      },
    ],
    strugglingTime: {
      type: String,
      required: true,
    },
    gotoBedTime: {
      type: String,
      required: true,
    },
    getOutBedTime: {
      type: String,
      required: true,
    },
    hoursOfSleep: {
      type: String,
      required: true,
    },
   
  }
 
);
module.exports = mongoose.model("Onboarding", onboardingSchema);
