import { Box, Button, Card, CardHeader, Checkbox, createStyles, Grid, makeStyles, Menu, MenuItem, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GradeIcon from '@material-ui/icons/Grade';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function Review() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box className={classes.main}>
            <Card className={classes.cardMain}>
                <CardHeader className={classes.cardTitle} title="Review Title"/>
                <Grid
                container
                direction='column'
                alignItems="center"
                wrap="nowrap"
                className={classes.gridMain}
                >
                    <Grid item direction='row'>
                        <Box>
                            <AccountCircleIcon fontSize="large"/>
                        </Box>
                        <Box>
                            <Typography>Student Name</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography>Company X</Typography>
                    </Grid>
                    <Grid item direction="row">
                        <Grid item>
                            <Typography>Date</Typography>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Checkbox disabled/>
                            </Box>
                            <Box>
                                <Typography>No offer</Typography>
                            </Box> 
                        </Grid>
                        <Grid item>
                            <Box>
                                <Checkbox disabled/>
                            </Box>
                            <Box>
                                <Typography>Accepted but declined</Typography>
                            </Box> 
                        </Grid>
                        <Grid item>
                            <Box>
                                <Checkbox disabled checked/>
                            </Box>
                            <Box>
                                <Typography>Worked</Typography>
                            </Box>  
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Card className={classes.cardInner1}>
                            <Grid item direction="row">
                                <Grid item direction="column">
                                    <Grid item>
                                        <Typography>Location</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Duration</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Salary</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item direction="column">
                                    <Grid item>
                                        <Typography>Degree</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Work Type</Typography>
                                    </Grid>
                            </Grid>
                            </Grid>
                            <Card className={classes.cardInner2}>
                                <CardHeader className={classes.cardSubtitle} title="Interview"/>
                                <Grid item >
                                    <Button
                                    aria-controls="customized-menu"
                                    aria-haspopup="true"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick}
                                    >
                                    Interview Questions
                                    </Button>
                                    <Menu
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Q1</MenuItem>
                                        <MenuItem onClick={handleClose}>Q2</MenuItem>
                                        <MenuItem onClick={handleClose}>Q3</MenuItem>
                                    </Menu>
                                </Grid>
                                <Grid item >
                                    <Typography>Recommendations and Tips</Typography>
                                </Grid>
                                <Grid item direction='row'>
                                    <Typography>Interview Difficulty: </Typography>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                </Grid>
                            </Card>
                        </Card>
                        <Grid item direction='row'>
                            <Grid item direction='row'>
                                <Button>
                                    <ArrowDownward fontSize="large"/>
                                </Button>
                                <Typography># Downvotes</Typography>
                            </Grid>
                            <Grid item direction='row'>
                                <Button>
                                    <ArrowUpward fontSize="large"/>
                                </Button>
                                <Typography># Upvotes</Typography>
                            </Grid>
                            <Grid item>
                                <Button>
                                    <Typography>Report</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )  
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {

        },
        cardMain: {

        },
        gridMain: {

        },
        cardTitle: {

        },
        cardInner1: {

        },
        cardInner2: {

        },
        cardSubtitle: {

        },

    }))