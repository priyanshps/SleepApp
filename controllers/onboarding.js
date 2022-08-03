const Onboarding = require("../models/onboarding");

exports.createOnboarding = async (req, res) => {
  const {
    nickname,
    changesToSee,
    strugglingTime,
    gotoBedTime,
    getOutBedTime,
    hoursOfSleep,
  } = req.body;
  const data = {
    nickname,
    changesToSee,
    strugglingTime,
    gotoBedTime,
    getOutBedTime,
    hoursOfSleep,
  };
  const onboardingData = new Onboarding(data);
  return onboardingData.save().then(() => {
    return res.status(200).json({message: 'Onboarding Done'})
  }).catch(e => {
    return res.status(400).json({
        message:e.message
    })
  });
};

exports.all = async(req, res) =>{
    try {
        const data = await Onboarding.find();
        return res.status(200).json({message: data})
    } catch (error) {
        return res.status(400).json({message: error})
    }
   
}