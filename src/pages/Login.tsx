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
        <Box>
            <Typography className={(classes.margin, classes.titlePage)}>InternView</Typography>
            <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
            wrap='wrap'
            style={{ minHeight: '70vh' }}
            >
                <Card className={classes.card}>
                    <CardHeader className={(classes.titleCard)} title="Sign In"/>
                    <Grid item>
                        <Box id="email-box">
                            <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                                <InputLabel htmlFor="outlined-email">Email</InputLabel>
                                <OutlinedInput id="email-input" label="Email"  />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box id="password-box">
                            <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
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
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box id="login-button-box">
                            <Button variant="contained" color="secondary">
                                <Typography>Log In</Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box id="forgot-password-box">
                            <Button color="primary">
                                <Typography>Forgot Password?</Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Divider/>
                    <Grid item>
                        <Box id="new-account-box">
                            <Typography>Don't have an account?</Typography>
                            <Link as="/register" href="/Register">
                                <Button variant="contained" color="primary">
                                    <Typography>Create New Account</Typography>
                                </Button>
                            </Link>
                        </Box>
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
        padding: theme.spacing(5),
        textAlign: "center",
        color: theme.palette.text.primary,
        position: "inherit",
        display: 'block',
        width: '30vw',
        height: '32vw'
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
  }),
);