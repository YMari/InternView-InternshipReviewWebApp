import { Box, Button, Card, CardHeader, createStyles, FormControl, Grid, IconButton, 
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
        
        <Grid
        container
        direction="column"
        alignContent="center"
        justify="center"
        wrap='wrap'
        style={{ minHeight: '70vh' }}
        >
            <Card className={classes.card}>
                <CardHeader title="Sign In"/>
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
                        <Button variant="contained" color="primary">
                            Log In
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="forgot-password-box">
                        <Button color="primary">Forgot Password?</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="new-account-box">
                        <Typography>Don't have an account?</Typography>
                        <Link as="/register" href="/Register">
                            <Button variant="contained" color="primary">
                                Create New Account
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Card>
        </Grid>     
    )
}

const useStyles = makeStyles((theme: Theme) =>    
    createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    card: {
     padding: theme.spacing(2),
     paddingRight: theme.spacing(4),
     textAlign: "center",
     color: theme.palette.text.primary
    },
  }),
);