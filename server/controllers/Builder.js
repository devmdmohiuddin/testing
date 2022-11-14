const ErrorHandler = require("../utils/errorHandler");
const AsyncErrorHandler = require("../middleware/catchAsyncError");
const Builder = require("../Model/Builder");
const mongoose = require("mongoose");

const builderCtrl = {

  getAll: AsyncErrorHandler(async (req, res, next) => {
    const allBuilder = await Builder.find({});
    res.status(200).json({ builders: allBuilder });
  }),

  create: AsyncErrorHandler(async (req, res, next) => {
    const { name } = req.body;
    // console.log('req.body', req.body)
    if (name) {
      const builder = new Builder({
        name
      });
      await builder
        .save()
        .then((data) =>
          res.status(201).json({ data, message: "Builder created successfully" })
        )
        .catch((err) => res.status(400).json({ message: "Failed to create builder" }));
    } else {
      return next(new ErrorHandler("Something wrong!", 500));
    }
  }),

  delete: AsyncErrorHandler(async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(
        new ErrorHandler(`No builder found with id:${req.params.id}`, 400)
      );
    }
    await Builder.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "builder deleted successfully" });
  }),
};
module.exports = builderCtrl;
