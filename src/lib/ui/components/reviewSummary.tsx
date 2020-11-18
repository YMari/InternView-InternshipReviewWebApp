import { Backdrop, Box, Button, Card, createStyles, Fade, Grid, makeStyles, Modal, Theme, Typography } from "@material-ui/core";
import { ClearRounded, Grade } from "@material-ui/icons";
import React from "react";
import Review from "../../../pages/reviews";

export default function ReviewSummary() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false)
    const handleOpenModal = () => {setOpen(true)}
    const handleCloseModal = () => {setOpen(false)}

    return(
        <Grid item className={classes.cardItem}>
            <Card className={classes.cardItemCard}>

                <Button onClick={handleOpenModal} className={classes.reviewButton}>
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
                            <Typography noWrap className={classes.reviewSummary}>Review Summary (limit characters i.e. 150)</Typography>
                        </Grid>

                    </Grid>
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
                        <Review/>
                        </>
                    </Fade>
                </Modal>

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
        reviewButton: {
            width: '100%',
            height: '100%'
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
}))