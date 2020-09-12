import Link from 'next/link';

export default function Index() {
    return <div>
        <h1>Welcome to InternView!</h1>
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
</div>
}