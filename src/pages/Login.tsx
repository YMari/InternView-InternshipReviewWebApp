import { Box, Button, Card, CardHeader, createStyles, FormControl, Grid, IconButton, 
    InputAdornment, InputLabel, makeStyles, OutlinedInput, Theme, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
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
        alignItems="center"
        wrap='wrap'
        align-items-xs-center
        justify-xs-space-between
        spacing-xs-10
        >
            <Card>
                <CardHeader title="Sign In"/>
                <Grid item>
                    <Box id="email-box">
                        <FormControl className={(classes.margin)} variant="outlined">
                            <InputLabel htmlFor="outlined-email">Email</InputLabel>
                            <OutlinedInput id="email-input" label="Email"  />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="password-box">
                        <FormControl className={(classes.margin)} variant="outlined">
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
                        <Button variant="contained" color="primary" href="/Register">
                            Create New Account
                        </Button>
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
  }),
);