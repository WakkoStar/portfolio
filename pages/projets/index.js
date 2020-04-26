import useSWR from 'swr'
import Link from 'next/link'
import Layout from '../../components/layout'
import {useState, useEffect} from "react"
import {gsap} from 'gsap'

import $ from 'jquery'
const fetcher = url => fetch(url).then(res => res.json())

export default function Projets() {

    const { data, error } = useSWR('/api/projets', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <Layout>
            <main className="projets">
                <nav>
                    <Link href="/"><a>Retour a l'acceuil</a></Link>
                </nav>
                {
                    data.map(({titre, link, thumbnail}, index) => {
                        return (
                            <div key={titre} id={index} style={{backgroundImage:`url(${data[index].thumbnail})`}}>
                                <div>
                                    <h1>{titre}</h1>
                                    <Link 
                                        href="/projets/[projet]" 
                                        as={`/projets/${link}`}
                                    >
                                        <a>Voir le projet</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </Layout>
    )
}
