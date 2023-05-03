import React from 'react'
import Link from 'next/link'
import { projectsdata } from '../../../data'
import Nav from '../../../Components/Nav'

export const getStaticProps = async ({ params }) => {
    const projectsfilter = projectsdata.filter(p => p.id.toString() === params.id);

    return {
        props: {
            project: projectsfilter[0],
        },
    }
}
export const getStaticPaths = async () => {
    const paths = projectsdata.map(project => ({
        params: { id: project.id.toString() }
    }))
    return { paths, fallback: false };
}

function Details({ project }) {
    return (
        < >
            <Nav />
            <p>{project.id}</p>

            <p>{project.body}</p>
        </>
    )

}

export default Details

// export async function getServerSideProps(context) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const data = await res.json();

//     return {
//         props: {
//             post: data
//         }
//     }

// }