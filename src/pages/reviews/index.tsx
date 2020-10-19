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
                
                <Grid container direction='column' alignItems="center">
                    <Typography className={classes.cardTitle}>Review Title</Typography>
                </Grid>

                <Grid container direction='column' wrap="nowrap" className={classes.gridMain}>

                    <Grid container direction='column' wrap="nowrap">
                        <Grid container direction='row' wrap="nowrap">                    
                            <Grid item>
                                <AccountCircleIcon fontSize="large"/>
                            </Grid>
                            <Grid item>
                                <Typography>Student Name</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                                <Typography>Company X</Typography>
                        </Grid>

                        <Grid container direction='row' wrap="nowrap">
                            <Grid item>
                                <Typography>Date</Typography>
                            </Grid>
                            <Grid container direction='row' wrap="nowrap">
                                <Checkbox disabled/>
                                <Typography>No offer</Typography>  
                            </Grid>
                            <Grid container direction='row' wrap="nowrap">
                                <Checkbox disabled/>
                                <Typography>Accepted but declined</Typography>
                            </Grid> 
                            <Grid container direction='row' wrap="nowrap">
                                <Checkbox disabled checked/>
                                <Typography>Worked</Typography> 
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Card className={classes.cardInner1}>

                            <Grid container direction='row' alignItems="center" wrap="nowrap">
                                <Grid container direction='column' alignItems="center" wrap="nowrap">
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
                                <Grid container direction='column' alignItems="center" wrap="nowrap">
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
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Typography>Interview Difficulty: </Typography>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                    <GradeIcon fontSize="small"/>
                                </Grid>
                            </Card>

                        </Card>

                        <Grid container direction='column' alignItems="center" wrap="nowrap">
                            <Grid item>
                                <Button>
                                    <ArrowDownward fontSize="large"/>
                                </Button>
                                <Typography># Downvotes</Typography>
                            </Grid>
                            <Grid item>
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
            marginTop: 10,
            padding: theme.spacing(1),
            display: 'flex',
            justifyContent: 'center',

        },
        cardMain: {
            padding: theme.spacing(2),
            // maxWidth: '90%',
            // minWidth: '90%',
            // minHeight: 800,



        },
        gridMain: {

        },
        gridTitleItem: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        },
        gridItem: {

        },
        cardTitle: {
            fontSize: 30,
        },
        cardInner1: {

        },
        cardInner2: {

        },
        cardSubtitle: {

        },

    }))