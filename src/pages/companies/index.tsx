import Link from 'next/link';

const companyList = [
    {name: 'Company 1'},
    {name: 'Company 2'},
    {name: 'Company 3'}
]

export default function Companies() {
    return <div>
        {companyList.map(e => (
            <div>
                <Link href="">
                    <a>{e.name}</a>
                </Link>
            </div>
        ))}
    </div>
}