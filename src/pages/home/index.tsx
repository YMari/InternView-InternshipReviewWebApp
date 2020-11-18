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
        <Box width="100%" maxHeight="750" position="absolute" top={0} >
            <img src="/backgroundImage.png" style={{width:"100%",maxHeight:750, minHeight:600, opacity:0.5, objectFit:'cover', position:"relative", zIndex:-1000}}/>
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

            {/* justify="space-around" */}      
            
        </Grid>
        <Grid container direction='row' justify="space-around" alignContent="center" className={classes.gridCards}>
                   
                    <Grid item md={6} xs={12}>
                            <Grid container justify="center" style={{padding:4}}>
                                <Card className={classes.cardContainer}>

                                    <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardContent}>

                                        <Grid item>
                                            <Typography variant='h4'>
                                                Most Helpful Reviews
                                            </Typography>
                                        </Grid>

                                        <Grid item className={classes.cardItem}>
                                            {/* v Top Reviews Here v */}
                                            
                                            <TopReview/>
                                            <TopReview/>
                                            <TopReview/>

                                            {/* ^ Top Reviews Here ^ */}
                                        </Grid>
                                        
                                    </Grid>

                                    <Link href="/profile/">
                                        <Button>
                                        user profile
                                        </Button>
                                    </Link>
                                    <Link href="/company/Test">
                                        <Button>
                                        company profile
                                        </Button>
                                    </Link>

                                </Card>
                            </Grid>
                    </Grid>

                    <Grid md={6} xs={12} item >
                            <Grid container justify="center" style={{padding:4}}>
                                <Card className={classes.cardContainer}>
                                    
                                    <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardContent}>

                                        <Grid item>
                                            <Typography variant='h4'>
                                                Top Rated Companies
                                            </Typography>
                                        </Grid>

                                        <Grid item className={classes.cardItem}>
                                            {/* v Top Companies Here v */}

                                            <TopCompany/>
                                            <TopCompany/>
                                            <TopCompany/>

                                            {/* ^ Top Companies Here ^ */}
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
            paddingTop: theme.spacing(8),
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        
        cardContainer: {
            minHeight: 600,
            maxHeight: 600,
            maxWidth:800,
            width:"100%",
            marginBottom:30,
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
            [theme.breakpoints.down('sm')]:{
                fontSize: 70
            }
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
