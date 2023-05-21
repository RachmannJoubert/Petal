import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Card,InputAdornment, OutlinedInput} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const styles = {
    root: {
        width: 'auto', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        padding: 4,
        paddingBottom: 10,
        marginTop:10,
        marginRight: 1,
        marginLeft: 1,
    
    },

    searchBar: {
        backgroundColor: 'white',
        borderRadius: 2,
    },

    Container: {
        width: '400px', 
        padding: 0, 
        height: '250px',
        borderRadius: 0,
        boxShadow: '0px 0px 0px',
        backgroundColor: '#518273',

    },
}

    function SearchPageHeader() {
    return (
        <>
        <Card sx={styles.Container}>
        <ArrowBackIcon sx={{position:'absolute', alignSelf: 'flex-start', margin:1, fontSize:35, color:'white'}}/>

        <Card sx={styles.root}>
            <OutlinedInput
                placeholder='Find your perfect plant'
                sx={styles.searchBar}
                id="outlined-adornment-weight"
                endAdornment={(
                    <InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>
                )}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </Card>
        </Card>
        </>
    );
}

export default SearchPageHeader