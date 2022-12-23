import { BottomNavigation, Typography, Link } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CopyRight () {
    return (
        <BottomNavigation>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Green0640?tab=repositories">
                <GitHubIcon></GitHubIcon>
                Green0640
            </Link>{' '}
            {'2022 開發中'}
          </Typography>
        </BottomNavigation>
      );
}