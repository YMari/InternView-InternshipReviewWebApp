import { Backdrop, Box, Button, Card, CardHeader, Checkbox, Chip, createStyles, Fade, FormControl, Grid, InputLabel, makeStyles, Menu, MenuItem, Modal, OutlinedInput, TextField, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { ArrowDownward, ArrowUpward, AccountCircle, Grade, ArrowDropDown } from '@material-ui/icons';
import theme from '../../lib/ui/theme';

export default function Review() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget)}
    const handleCloseMenu = () => {setAnchorEl(null)}

    const [open, setOpen] = React.useState(false)
    const handleOpenModal = () => {setOpen(true)}
    const handleCloseModal = () => {setOpen(false)}

    return (
        <Box className={classes.main}>
            <Card className={classes.cardMain}>
                
                <Grid container direction='column' alignItems="center">
                    <Typography className={classes.cardTitle}>Review Title</Typography>
                </Grid>

                <Grid container direction='column' wrap="nowrap" className={classes.gridMain}>

                    <Grid container direction='column' wrap="nowrap">
                        <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.accountGrid}>
                            <Grid item>               
                                <AccountCircle fontSize="large"/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.name}>Student Name</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Link href="">
                                <Button>   
                                    <Typography>Company X</Typography>   
                                </Button>
                            </Link>
                        </Grid>

                        <Grid container direction='row' alignItems="center" wrap="nowrap" justify='space-between' className={classes.checklist}>
                            <Grid item>
                                <Typography>Date</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Checkbox disabled/>
                                    <Typography>No offer</Typography>  
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Checkbox disabled/>
                                    <Typography>Accepted but declined</Typography>
                                </Grid>
                            </Grid>
                            <Grid item> 
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Checkbox disabled checked/>
                                    <Typography>Worked</Typography> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Card className={classes.cardInner1}>
                            
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.inner1Info}>
                                <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.inner1InfoCol1}>
                                    <Grid item>
                                        <Typography>Location: [text]</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Duration: [text]</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Salary: [text]</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.inner1InfoCol2}>
                                    <Grid item>
                                        <Typography>Degree: [text]</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Work Type: [text]</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Experience Rating: 5/5</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.gridItem}>
                                <Card className={classes.cardInner2}>

                                    <Grid item className={classes.inner2Item}>
                                        <Typography>Interview</Typography>
                                    </Grid>
                                    
                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap">

                                        <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<ArrowDropDown/>}
                                        onClick={handleClick}
                                        className={classes.buttonQuestions}
                                        >
                                        Interview Questions
                                        </Button>

                                        <Menu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                        className={classes.menuList}
                                        PaperProps={{
                                            style: {
                                              maxHeight: 300,
                                              maxWidth: '90%',
                                            },
                                        }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        >
                                            <MenuItem onClick={handleCloseMenu}>Q1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu}>Q2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu}>Q3</MenuItem>
                                        </Menu>
                                        
                                    </Grid>
                                    
                                    <Grid item className={classes.inner2Item}>
                                        <Typography>Recommendations and Tips</Typography>
                                    </Grid>

                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap">
                                        <FormControl className={classes.textBox}>
                                            <TextField
                                                disabled
                                                defaultValue={'text text text'}
                                                variant="outlined"
                                                multiline={true}
                                                rows={10}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputRoot,
                                                        disabled: classes.disabled
                                                    }   
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.inner2Item}>
                                        <Typography>Interview Difficulty: 5/5</Typography>
                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.ratingRow}>
                                <Grid container direction='row' alignItems="center">
                                    <Grid item>
                                        <Grid container direction='row' alignItems="center">
                                            <Button>
                                                <ArrowDownward fontSize="large"/>
                                            </Button>
                                            <Typography className={classes.ratingNum}># Downvotes</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction='row' alignItems="center">
                                            <Button>
                                                <ArrowUpward fontSize="large"/>
                                            </Button>
                                            <Typography className={classes.ratingNum}># Upvotes</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Button  className={classes.buttonReport} onClick={handleOpenModal}>
                                        <Typography>Report</Typography>
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
                                            <Card className={classes.modalCard}>

                                                <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.modalGrid}>
                                                    <Grid item className={classes.gridItem}>
                                                        <Typography className={classes.modalTitle}>Why would you like to report this review?</Typography>
                                                    </Grid>
                                                    <Grid container direction='row' alignItems="center" justify='center' className={classes.gridItem}>
                                                        <FormControl className={classes.textBox}>
                                                            <TextField
                                                                variant="outlined"
                                                                multiline={true}
                                                                rows={10}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid container direction='row' alignItems="center" wrap="nowrap" justify='flex-end'>
                                                        <Grid item className={classes.modalButtonPos}>
                                                            <Button className={classes.modalButton1}>
                                                                <Typography>Report</Typography>
                                                            </Button>
                                                        </Grid>
                                                        <Grid item className={classes.modalButtonPos}>
                                                            <Button className={classes.modalButton2} onClick={handleCloseModal}>
                                                                <Typography>Cancel</Typography>
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                
                                            </Card>
                                        </Fade>

                                    </Modal>
                                </Grid>
                            </Grid>
                        </Card>
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
            maxWidth: '90%',
            minWidth: '50%',
        },
        gridMain: {
            
        },
        accountGrid: {
            paddingLeft: theme.spacing(0.7)
        },
        gridTitleItem: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        },
        gridItem: {
            paddingBottom: theme.spacing(1)
        },
        cardTitle: {
            fontSize: 30,
        },
        cardInner1: {
            backgroundColor: theme.palette.secondary.main,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        inner1Info: {
            paddingBottom: theme.spacing(1),
        },
        inner1InfoCol1: {
            
        },
        inner1InfoCol2: {

        },
        cardInner2: {
            width: '97%',
            height: '97%',
        },
        inner2Item: {
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },
        cardSubtitle: {

        },
        buttonQuestions: {
            width: '97%',
        },
        textBox: {
            width: '97%',
        },
        ratingRow: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        buttonReport: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(1),
        },
        ratingNum: {
            // backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(1),
        },
        checklist: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(20),
        },
        name: {
            paddingLeft: theme.spacing(1)
        },
        modal:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        modalCard: {
            width: 700,
            height: 330,
            maxWidth: '90%',
            maxHeight: '90%',
        },
        modalGrid: {
            padding: theme.spacing(1),
        },
        modalTitle: {
            fontSize: 20,
        },
        modalInput: {
            
        },
        inputRoot: {
            "&$disabled": {
              color: theme.palette.info.contrastText
            }
        },
        disabled: {},
        
        modalButtonPos: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        modalButton1: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main,
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },

        modalButton2: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },

        menuList: {
            marginTop: 45,
        },
        
    }))