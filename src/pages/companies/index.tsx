import { Box } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const companyList = [
    {name: 'Company 1'},
    {name: 'Company 2'},
    {name: 'Company 3'}
]

export default function Companies() {
    return (
        <>
            {companyList.map(e => (
                <Box>
                    <Link href="">
                        <a>{e.name}</a>
                    </Link>
                </Box>
            ))}
        </>
    )  
}