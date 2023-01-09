import React from "react";
import AnimatedRoutes from "../../../Components/AnimatedRoutes";
import "./Inspirations.css";
import { Grid } from "@mui/material";

function Inspirations(props) {
  return (
    <AnimatedRoutes>
      <div>
        <div className="inspoHero">
          <div className="inspoHeroImage">
            <div className="inspoHeroText">
              <h1>
                Moments that last forever
              </h1>
            </div>
          </div>
        </div>

        <div className="latestEvents">
            <h1>Our Latest Events</h1>
            <p>
                A curated list of our latest and favorite events to date
            </p>
            <div className="inspoGrid1">
                <Grid container spacing={1} columns={16}>
                    <Grid item xs={8}>
                        <img src="/images/MB2.png" alt="" />
                        <p>Event 1</p>
                    </Grid>
                    <Grid item xs={8}>
                        <img src="images/MB5.png" alt="" />
                        <p>Event 2</p>
                    </Grid>
                </Grid>
            </div>
            <div className="inspoGrid2">
                <Grid container spacing={1} columns={16}>
                    <Grid item xs={8}>
                        <img src="/images/MB2.png" alt="" />
                        <p>Event 1</p>
                    </Grid>
                    <Grid item xs={8}>
                        <img src="images/MB5.png" alt="" />
                        <p>Event 2</p>
                    </Grid>
                </Grid>
            </div>
        </div>
      </div>
    </AnimatedRoutes>
  );
}

export default Inspirations;
