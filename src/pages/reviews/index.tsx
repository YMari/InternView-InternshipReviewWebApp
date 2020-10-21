import { Backdrop, Box, Button, Card, CardHeader, Checkbox, createStyles, Fade, FormControl, Grid, InputLabel, makeStyles, Menu, MenuItem, Modal, OutlinedInput, TextField, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GradeIcon from '@material-ui/icons/Grade';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function Review() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const handleOpenModal = () => {
        setOpen(true);
      };

    const handleCloseModal = () => {
        setOpen(false);
      };
      
    

    return (
        <Box className={classes.main}>
            <Card className={classes.cardMain}>
                
                <Grid container direction='column' alignItems="center">
                    <Typography className={classes.cardTitle}>Review Title</Typography>
                </Grid>

                <Grid container direction='column' wrap="nowrap" className={classes.gridMain}>

                    <Grid container direction='column' wrap="nowrap">
                        <Grid container direction='row' alignItems="center" wrap="nowrap">
                            <Grid item>
                                <Link href="">    
                                    <Button>                
                                        <AccountCircleIcon fontSize="large"/>
                                        <Typography className={classes.name}>Student Name</Typography>
                                    </Button>
                                </Link>
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

                            <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.gridItem}>
                                <Card className={classes.cardInner2}>
                                    <CardHeader className={classes.cardSubtitle} title="Interview"/>
                                    <Grid item >
                                        <Button
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClick}
                                        fullWidth={true}
                                        className={classes.buttonQuestions}
                                        >
                                        Interview Questions
                                        </Button>
                                        <Menu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                        >
                                            <MenuItem onClick={handleCloseMenu}>Q1</MenuItem>
                                            <MenuItem onClick={handleCloseMenu}>Q2</MenuItem>
                                            <MenuItem onClick={handleCloseMenu}>Q3</MenuItem>
                                        </Menu>
                                    </Grid>
                                    <Grid item >
                                        <Typography>Recommendations and Tips</Typography>
                                        {/* <OutlinedInput value={'text text text'}/> */}
                                        <FormControl fullWidth={true}>
                                            <TextField
                                                disabled
                                                defaultValue={'text text text'}
                                                variant="outlined"
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputRoot,
                                                        disabled: classes.disabled
                                                    }   
                                                }}
                                            />
                                        </FormControl>
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
                            </Grid>

                        </Card>

                        <Grid container direction='row' alignItems="center" wrap="nowrap">
                            <Grid container direction='row' alignItems="center">
                                <Button>
                                    <ArrowDownward fontSize="large"/>
                                </Button>
                                <Typography># Downvotes</Typography>
                            </Grid>
                            <Grid container direction='row' alignItems="center">
                                <Button>
                                    <ArrowUpward fontSize="large"/>
                                </Button>
                                <Typography># Upvotes</Typography>
                            </Grid>
                            <Grid item >
                                <Button onClick={handleOpenModal}>
                                    <Typography>Report</Typography>
                                </Button>
                                <Modal
                                className={classes.modal}
                                open={open}
                                onClose={handleCloseModal}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                                >
                                    <Fade in={open}>
                                        <Card className={classes.modalCard}>
                                            <Grid container direction='column' alignItems="center" wrap="nowrap">
                                                <Grid item>
                                                    <Typography>Why would you like to report?</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <FormControl className={(classes.modalInput)} variant="outlined" fullWidth={true} required={true}>
                                                        <OutlinedInput
                                                            // value={''}
                                                            // onChange={handleChange('')}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                                                        <Grid item>
                                                            <Button>
                                                                <Typography>Report</Typography>
                                                            </Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button onClick={handleCloseModal}>
                                                                <Typography>Cancel</Typography>
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Card>

                                    </Fade>
                                </Modal>
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
            maxWidth: '90%',
            minWidth: '50%',
            minHeight: 800,



        },
        gridMain: {
            
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
            backgroundColor: theme.palette.primary.main
        },
        cardInner2: {
            minWidth: '97%',
            minHeight: '97%',
            maxWidth: '97%',
            maxHeight: '97%',
        },
        cardSubtitle: {

        },
        buttonQuestions: {
            
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
            width: 600,
            height: 400,
            maxWidth: '90%',
        },
        modalInput: {
            
        },
        inputRoot: {
            "&$disabled": {
              color: theme.palette.info.contrastText
            }
        },
        disabled: {}
    }))