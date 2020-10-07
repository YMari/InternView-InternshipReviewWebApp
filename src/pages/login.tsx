import { Box, Button, Card, CardHeader, createStyles, Divider, FormControl, Grid, IconButton, 
    InputAdornment, InputLabel, makeStyles, OutlinedInput, Theme, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

interface State {
    password: string;
    showPassword: boolean;
}

export default function LoginPage() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
      password: '',
      showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return(
        <Box className={(classes.margin)}>
            <Typography className={(classes.titlePage)}>InternView</Typography>
            <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
            wrap='wrap'
            style={{ minHeight: '50vh' }}
            spacing={4}
            >
                <Card className={classes.card}>
                    <CardHeader className={(classes.titleCard)} title="Sign In"/>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-email">Email</InputLabel>
                            <OutlinedInput id="email-input" label="Email"  />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    label="Password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Button variant="contained" color="secondary">
                            <Typography>Log In</Typography>
                        </Button>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Button color="primary">
                            <Typography>Forgot Password?</Typography>
                        </Button>
                    </Grid>
                    <Divider/>
                    <Grid item className={classes.gridItem}>
                        <Typography>Don't have an account?</Typography>
                        <Link  href="/register">
                            <Button variant="contained" color="primary">
                                <Typography>Create New Account</Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Card>
            </Grid>
        </Box>     
    )   
}

const useStyles = makeStyles((theme: Theme) =>    
    createStyles({
    margin: {
        margin: theme.spacing(1),
    },
    card: {
        padding: theme.spacing(4, 12),
        textAlign: "center",
        color: theme.palette.text.primary,
        // width: '30vw',
        // height: '32vw'
    },
    container: {
        gridGap: theme.spacing(3),
    },
    titlePage: {
        textAlign: "center",
        padding: theme.spacing(1),
        color: theme.palette.text.hint,
        fontSize: 40,
        fontWeight: 500,
    },
    titleCard: {
        color: theme.palette.text.hint,
    },
    gridItem: {
        paddingBottom: theme.spacing(1)
    },
    // background: {
    //     backgroundImage: `url(/static/backgroundImage.png)`
    // }
  }),
);