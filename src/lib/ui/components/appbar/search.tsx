import React, { useState, useEffect } from 'react';
import { Box,  createStyles,  fade,  InputBase, makeStyles, Theme, TextField, CircularProgress, InputAdornment } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';


export default function Search() {

    const classes = useStyles()
    const [search, setSearch] = useState("");;
    const [companyList, setCompanyList] = useState<any[]>([])

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const changeSearch = (val:string) => {
        setSearch(val)
    }

    useEffect(() => {
        console.log(companyList)
    }, [companyList])

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const call1 = CancelToken.source()

        const searchNow = async () => {
        
            await axios.get(
                "/api/company?search="+search,
                {
                    cancelToken:call1.token
                }
            ).then(res => {
                if(res.status === 200) { 
                    if (res.data?.data) {

                        setCompanyList(res.data.data);
                    }
                }
            }).catch( thrown => {
                if(axios.isCancel(thrown)) { console.log("Request Cancelled") }
            })

        }

        searchNow()

        return () => {
            call1.cancel()
        }

    }, [search])


    return (
        <>
            {/* <Box className={classes.searchIcon}>
                <SearchIcon color='primary'/>
            </Box> */}
            {/* <Autocomplete
                options={top100Films}
                
                style={{ width: 300 }}
                freeSolo
                renderInput={params => (
                    <TextField
                    {...params}
                    label="Combo box"
                    variant="outlined"
                    fullWidth
                    
                    />
                )}
            /> */}
            <Autocomplete 
                options={companyList!==null || companyList !== undefined?companyList:[]}
                getOptionLabel={option => {      
                    return option.name
                }}                
                freeSolo
                disableClearable
                onChange={(event, newVal)=>changeSearch(newVal?.name)}
                inputValue={search}
                renderInput={(params) => {
                    // return <InputBase
                    //     placeholder="Search…"
                    //     inputProps={{ 'aria-label': 'search' }}
                        // classes={{
                        //     root: classes.inputRoot,
                        //     input: classes.inputInput,
                        // }}
                    //     {...params}
                    // />
                    return <TextField
                    {...params}
                    // InputProps={{
                    //     startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    // }}
                    label="Search"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    classes={{
                        root: classes.inputRoot,
                    }}
                    />
                }
                }
            />
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconContainer: {
            alignItems: 'left',
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: theme.palette.secondary.contrastText
        },
        inputInput: {
            padding: theme.spacing(2, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        }
        
    }),
);


const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 }
]