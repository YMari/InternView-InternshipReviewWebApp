import { Box, Button, Card, createStyles, fade, Grid, InputBase, makeStyles, Theme, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward, AccountCircle, Grade, AddCircle } from '@material-ui/icons';
import React from "react";
import ReviewSummary from "../../lib/ui/components/reviewSummary";
import theme from "../../lib/ui/theme";


export default function Profile() {
    const classes = useStyles();

    return(
        <Box className={classes.main}>
            <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap" className={classes.mainGrid}>

                <Grid container direction='column' alignItems="center" wrap="nowrap" >
                    <Grid item>
                        <AccountCircle className={classes.accIcon}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.accName}>Full Name</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" wrap="nowrap" justify='space-between' className={classes.accRatingPts}>
                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <ArrowUpward fontSize="small" className={classes.accUpvotes}/>
                                    <Typography className={classes.accUpvotes}># upvotes</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <ArrowDownward fontSize="small" className={classes.accDownvotes}/>
                                    <Typography className={classes.accDownvotes}># downvotes</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                        <Typography className={classes.textWhite}>Joined on: Date</Typography>
                    </Grid>
                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                        <Typography className={classes.textWhite}>Study Program: X</Typography>
                    </Grid>
                    <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.spacer}>
                        <Typography className={classes.textWhite}>Reviews: #Reviews</Typography>
                    </Grid>
                    
                    <Card className={classes.cardMain}>
                        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardGrid}>
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.searchRow}>
                                <Grid item className={classes.search} justify="center">
                                    <InputBase
                                    placeholder="Search Review..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    fullWidth={true}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    />
                                </Grid>
                                <Grid item justify='flex-end'>
                                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                                        <Button>
                                            <Typography className={classes.addReview}>Add Review</Typography>
                                            <AddCircle fontSize="large" className={classes.addReviewIcon}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* v Reviews Here v */}
                            <Grid item className={classes.cardItem}> <ReviewSummary/></Grid>
                            <Grid item className={classes.cardItem}> <ReviewSummary/></Grid>
                            <Grid item className={classes.cardItem}> <ReviewSummary/></Grid>

                            {/* ^ Reviews Here ^ */}
                            
                        </Grid>
                    </Card>

                </Grid>

            </Grid>
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
        mainGrid: {
            width: '90%'
        },
        accIcon: {
            fontSize: 150,
            color: theme.palette.primary.contrastText,
        },
        accName: {
            fontSize: 50,
            color: theme.palette.primary.contrastText,
        },
        accRatingPts: {
          width: 320
        },
        accUpvotes: {
            color: theme.palette.secondary.main,
        },
        accDownvotes: {
            color: theme.palette.info.main,
        },
        spacer: {
            paddingBottom: theme.spacing(1)
        },
        cardMain: {
            minWidth: '100%',
            minHeight: 300,
        },
        cardGrid: {
            padding: theme.spacing(1),
        },
        cardItem: {
            minWidth: '97%',
            paddingBottom: theme.spacing(2),
        },
        searchRow: {
            paddingTop: theme.spacing(0.2),
            paddingBottom: theme.spacing(2),
            width: '97%'
        },
        search: {
            marginLeft: '37%',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.info.main, 1),
            '&:hover': {
                backgroundColor: fade(theme.palette.info.main, 0.60),
            },
            margin:'auto',
            width: '25%',
        },
        inputRoot: {
            color: theme.palette.secondary.contrastText,
        },
        inputInput: {
            padding: theme.spacing(1.5),
            paddingLeft: '33%',
            transition: theme.transitions.create('width'),
            width: '100%',
        },
        addReview: {
            color: theme.palette.primary.main,
            paddingRight: theme.spacing(0.5),
        },
        addReviewIcon: {
            color: theme.palette.primary.main,
        },
        textWhite: {
            color: theme.palette.primary.contrastText,
        },
    }))