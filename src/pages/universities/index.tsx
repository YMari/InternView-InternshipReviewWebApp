import Link from 'next/link';

const universityList = [
    {name: 'University 1'},
    {name: 'University 2'},
    {name: 'University 3'}
]

export default function Universities() {
    return <div>
        {universityList.map(e => (
            <div>
                <Link href="">
                    <a>{e.name}</a>
                </Link>
            </div>
        ))}
    </div>
}