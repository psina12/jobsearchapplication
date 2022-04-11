const express = require("express");
const router = express.Router();

const jobcontroller = require("../controller/jobcontroller");

router.route("/jobs")
  .get(jobcontroller.getAll)
  .post(jobcontroller.AddOneJob);

router.route("/jobs/:jobId")
     .get(jobcontroller.getOne)
     .delete(jobcontroller.deleteOne)
     .put(jobcontroller.fullUpdateOne)
     .patch(jobcontroller.partialUpdateOne);

//   router.route("jobs/:jobId/")

module.exports=router;
