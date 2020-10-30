import { Card, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { Grade } from "@material-ui/icons";
import React from "react";

export default function ReviewSummary() {
    const classes = useStyles();

    return(
        <Grid item className={classes.cardItem}>
            <Card className={classes.cardItemCard}>
                <Grid container direction='column' alignItems="center" wrap="nowrap">

                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                        <Grid container direction='row' alignItems="center" wrap="nowrap">
                            <Typography className={classes.reviewTitle}>Review Title</Typography>
                        </Grid>
                        <Grid container direction='row' wrap="nowrap" justify='flex-end' className={classes.reviewGradeRow}>
                            <Grade fontSize="small" className={classes.reviewGrade}/>
                            <Grade fontSize="small" className={classes.reviewGrade}/>
                            <Grade fontSize="small" className={classes.reviewGrade}/>
                            <Grade fontSize="small" className={classes.reviewGrade}/>
                            <Grade fontSize="small" className={classes.reviewGrade}/>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                        <Typography className={classes.reviewCompany}>Company X</Typography>
                    </Grid>
                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                        <Typography className={classes.reviewDate}>Posted on: Date</Typography>
                    </Grid>
                    <Grid container direction='row' alignItems="center" wrap="nowrap" zeroMinWidth>
                        <Typography noWrap className={classes.reviewSummary}>Review Summary</Typography>
                    </Grid>

                </Grid>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardItem: {
            // minWidth: '97%',
            // height: 200,
            // paddingBottom: theme.spacing(1),
        },
        cardItemCard: {
            backgroundColor: theme.palette.info.main,
            padding: theme.spacing(1),
        },
        reviewTitle: {
            color: theme.palette.primary.contrastText,
            fontSize: 28,
        },
        reviewGradeRow: {
            paddingBottom: theme.spacing(2)
        },
        reviewGrade: {
            color: theme.palette.secondary.main,
        },
        reviewCompany: {
            color: theme.palette.primary.contrastText,
            fontSize: 20,
        },
        reviewDate: {
            color: theme.palette.primary.contrastText,
            fontSize: 15,
        },
        reviewSummary: {
            color: theme.palette.primary.contrastText,
            fontSize: 22,
        },
}))