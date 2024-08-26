import express from "express";
import { AppDataSource } from "./data-source";
import { Airport } from "./entity/Airport";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    app.get("/airport/:iata_code", async (req, res) => {
      const iataCode = req.params.iata_code;
      const airport = await AppDataSource.getRepository(Airport)
        .createQueryBuilder("airport")
        .leftJoinAndSelect("airport.city", "city")
        .leftJoinAndSelect("city.country", "country")
        .where("airport.iata_code = :iata_code", { iata_code: iataCode })
        .getOne();

      if (airport) {
        res.json({ airport });
      } else {
        res.status(404).json({ message: "Airport not found" });
      }
    });

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));
