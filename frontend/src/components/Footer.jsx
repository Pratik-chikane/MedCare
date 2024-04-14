import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid items xs={12} sm={6} md={3}>
          <Typography className="pd-5" variant="h6">
            company
          </Typography>
          <div className="pt-5">
            <Button className="pd-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Partners
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Press
            </Button>
          </div>
        </Grid>

        <Grid items xs={12} sm={6} md={3}>
          <Typography className="pd-5" variant="h6">
            Solutions
          </Typography>
          <div className="pt-5">
            <Button className="pd-7" variant="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>

        <Grid items xs={12} sm={6} md={3}>
          <Typography className="pd-5" variant="h6">
            Documentation
          </Typography>
          <div className="pt-5">
            <Button className="pd-5" variant="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              API Status
            </Button>
          </div>
        </Grid>

        <Grid items xs={12} sm={6} md={3}>
          <Typography className="pd-5" variant="h6">
            Legal
          </Typography>
          <div className="pt-5">
            <Button className="pd-5" variant="h6">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pd-5" variant="h6">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20 pb-5" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 MedCare. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
