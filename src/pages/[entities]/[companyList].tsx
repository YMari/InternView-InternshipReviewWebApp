import Link from 'next/link';

const companies = [
    {name: 'Company 1'},
    {name: 'Company 2'},
    {name: 'Company 3'}
]

export default function CompanyList() {
    return <div>
        {companies.map(e => (
            <div>
                <Link href="">
                    <a>{e.name}</a>
                </Link>
            </div>
        ))}
    </div>
}