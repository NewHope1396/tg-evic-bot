const createMessage = require("../services/createMessage");
const writeMessage = require("../services/botWriteMessage");

const sendData = async (req, res, next) => {
  try {
    const data = req.body;
    const message = createMessage(data);
    writeMessage(message);
    res.json({
      message: message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = sendData;
