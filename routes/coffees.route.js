const { Router } = require("express");
const { coffeesController } = require("../controllers/coffees.controller.js")

const router = Router();
router.get("/coffee/:id", coffeesController.getCoffeId)
router.get("/coffee-", coffeesController.getCoffeInstock)
router.get("/coffee", coffeesController.getCoffee);
router.post("/coffee", coffeesController.postCoffee);
router.delete("/coffee/:id", coffeesController.deleteCoffeeId);
router.patch("/coffee/:id", coffeesController.patchCoffeeId)



module.exports = router;