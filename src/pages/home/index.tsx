import { Box, Card, createStyles, fade, Grid, makeStyles, Theme, Typography, Button, CardContent, ButtonGroup, Divider, TextField, FormControl } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GradeIcon from '@material-ui/icons/Grade';
import TopReview from '../../lib/ui/components/topReview';
import TopCompany from '../../lib/ui/components/topCompany';

export default function Home() {
    const classes = useStyles();
    return(
        <>
        <Box width="100%" maxHeight="500" position="absolute" top={0} >
            <img src="/backgroundImage.png" style={{width:"100%",maxHeight:750, opacity:0.5, objectFit:'cover', position:"relative", zIndex:-1000}}/>
        </Box>

        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.gridFull}>

            <Grid item>
                <Typography className={classes.title}>
                    InternView
                </Typography>
            </Grid>
            <Grid item className={classes.subtitle} style={{textAlign:"center"}} >
                <Typography variant="h5" style={{textAlign:"center"}}>
                    The best platform to research companies for students.<br />
                    Made by students for students.
                </Typography>
            </Grid>
            <Grid item className={classes.buttonSearch}>
                <Button variant="contained" color="primary">
                    Start Searching
                </Button>
            </Grid>

            <Grid container direction='row' justify="space-around" alignItems="center" wrap="nowrap" className={classes.gridCards}>
                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>

                        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardContent}>

                            <Grid item>
                                <Typography variant='h4'>
                                    Most Helpful Reviews
                                </Typography>
                            </Grid>

                            <Grid item className={classes.cardItem}>
                                
                            </Grid>
                            
                        </Grid>

                        <Link href="/profile/">
                            <Button>
                            user profile
                            </Button>
                        </Link>
                        <Link href="/companies/">
                            <Button>
                            company profile
                            </Button>
                        </Link>

                    </Card>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>
                        
                        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardContent}>

                            <Grid item>
                                <Typography variant='h4'>
                                    Top Rated Companies
                                </Typography>
                            </Grid>

                            <Grid item className={classes.cardItem}>
                                
                            </Grid>
                            
                        </Grid>

                    </Card>
                </Grid>

            </Grid>
        </Grid>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridFull: {
            marginTop: 40
        },
        gridCards: {
            paddingTop: theme.spacing(8)
        },
        gridItem: {
            minWidth: '42%',
            maxWidth: '42%',
            alignItems: "center",
            paddingBottom: theme.spacing(2)
        },
        cardContainer: {
            minHeight: 600,
            maxHeight: 600
        },
        cardContent: {
            padding: theme.spacing(4),
            width: '100%',  
        },
        cardItem: {
            marginTop: 30,
            width: '95%',
        },
        cardSub: {
            // width: '80%',
        },
        buttonReview: {
            width: '100%' 
        },
        reviewSummary: {
            width: '95%',
        },
        inputRoot: {
            "&$disabled": {
              color: theme.palette.info.contrastText
            }
        },
        disabled: {},
        accountIcon: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            color: theme.palette.primary.contrastText,
            fontSize: 80,

        },
        subtitle: {
            color: theme.palette.primary.contrastText,
        },
        buttonSearch: {
            paddingTop: theme.spacing(1)
        },
        rating: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: theme.spacing(2)
        },
        ratingText: {
            fontSize: 20,
            paddingLeft: theme.spacing(1)
        },
    }))
