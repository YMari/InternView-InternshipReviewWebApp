import { Backdrop, Box, Button, Card, createStyles, Fade, Grid, makeStyles, Modal, Theme, Typography } from "@material-ui/core";
import { AccountCircle, ClearRounded, Grade } from "@material-ui/icons";
import React from "react";
import { ReviewViewModel } from "../viewModels/reviewViewModels";
import Review from "./review";


interface TopReviewProps {
    review: ReviewViewModel
}

export default function TopReview(props: TopReviewProps) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false)
    const handleOpenModal = () => {setOpen(true)}
    const handleCloseModal = () => {setOpen(false)}

    const text_truncate = function(str, length, ending=null) {
        if (length == null) {
          length = 100;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
    }

    return (
        <Grid container direction='row' justify='space-between' alignItems='center' wrap="nowrap">

            <Grid item className={classes.accountIconItem}>
                <AccountCircle className={classes.accountIcon}/>
            </Grid>

            <Grid item className={classes.reviewSummaryItem}>
                <Button onClick={handleOpenModal} className={classes.buttonReview}>
                    <Card variant='outlined' className={classes.reviewSummary}>
                        <Typography className={classes.reviewText}>{props.review.reviewTitle}</Typography>
                        <Typography className={classes.reviewText}>
                            <strong>Company: </strong>
                            {props.review.company.name}
                        </Typography>
                        <Typography className={classes.reviewText}>{text_truncate(props.review.recommendation, 19)}</Typography>
                    </Card>
                </Button>
                <Modal
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                className={classes.modal}
                >
                    <Fade in={open}>
                        <>
                        <Box className={classes.closeModalBox}>
                            <Button onClick={handleCloseModal} size="small" className={classes.closeModalButton}>
                                <ClearRounded fontSize='large' className={classes.closeModalIcon}/>
                            </Button>
                        </Box>


                        <Review forUpdate={false} review={props.review} />
                        </>
                    </Fade>
                </Modal>
            </Grid>

            <Grid item className={classes.ratingItem}>
                <Grid container direction='row' alignItems="center" wrap="nowrap">
                    <Grid item>
                        <Grade fontSize="large"/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.ratingText}>{props.review.experienceRating}/5</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonAccount: {
            height: '100%',
            width: '100%' 
        },
        accountIcon: {
            fontSize: 50
        },
        accountIconItem: {
            height: '100%',
            paddingLeft: theme.spacing(1),
        },
        buttonReview: {
            width: '100%' 
        },
        reviewSummaryItem: {
            width: '100%',
        },
        reviewSummary: {
            width: '90%',
            backgroundColor: theme.palette.info.main,
            height: 75,
        },
        reviewText: {
            color: theme.palette.secondary.contrastText,
        },
        
        modal: {
            width: '100%',
            height: '100%',
            overflow:'scroll',
        },
        closeModalBox: {
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        closeModalButton: {
            backgroundColor: theme.palette.secondary.main,
        },
        closeModalIcon: {
            color: theme.palette.primary.contrastText,
        },

        ratingItem: {
            height: '100%',
            paddingRight: theme.spacing(1),
        },
        ratingText: {
            fontSize: 20,
            paddingLeft: theme.spacing(1)
        },
    }))
    