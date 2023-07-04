const express = require("express");
const router = express.Router();

//bring information of controllers
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
//remove this because we add controllers
// router.route('/').get((req,res) => {
//     res.send('all items')
// })

module.exports = router;
