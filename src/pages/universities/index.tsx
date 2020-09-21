import { Container } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import MainAppbar from '../components/appbar';

const universityList = [
    {name: 'University 1'},
    {name: 'University 2'},
    {name: 'University 3'}
]

export default function Universities() {
    return (
        <Container maxWidth={false}>
            <MainAppbar/>
            {universityList.map(e => (
                <div>
                    <Link href="">
                        <a>{e.name}</a>
                    </Link>
                </div>
            ))}
        </Container>
    )   
}