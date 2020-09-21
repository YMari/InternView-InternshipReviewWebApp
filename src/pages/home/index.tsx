import { Container } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import MainAppbar from '../components/appbar'

export default function Home() {
    return(
        <Container maxWidth={false}>
            <MainAppbar/>
            <div>
                <Link as="/companies" href="/companies/">
                    <a>Navigate to Companies</a>
                </Link>
            </div>
            <div>
                <Link as="/universities" href="/universities/">
                    <a>Navigate to Universities</a>
                </Link>
            </div>
            <div>
                <Link as="/reviews" href="/reviews/">
                    <a>Navigate to Reviews</a>
                </Link>
            </div>
        </Container>
    )
}