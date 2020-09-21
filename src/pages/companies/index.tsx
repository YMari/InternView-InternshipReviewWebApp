import { Container } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import MainAppbar from '../components/appbar';

const companyList = [
    {name: 'Company 1'},
    {name: 'Company 2'},
    {name: 'Company 3'}
]

export default function Companies() {
    return (
        <Container maxWidth={false}>
            <MainAppbar/>
            {companyList.map(e => (
                <div>
                    <Link href="">
                        <a>{e.name}</a>
                    </Link>
                </div>
            ))}
        </Container>
    )  
}