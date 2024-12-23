import * as React from "react"
import Image from 'next/image'
import ImagemGlobalNews from '../../images/global_news.png'
import PrivateRoute from "@/components/privateRoute"

export default function Sobre_Nos(){
    return(
        <PrivateRoute>
        <div>
                <meta name="descricao" content="Página contendo informações sobre a Global News, empresa proprietária do site."></meta>
                <div className="ml-12">
                    <Image src={ImagemGlobalNews} alt="Global News" width="130" height="60" className="border-solid border-2 border-green-500"/>
                    <br/>
                    <br/>
                    <p className="text-2xl font-semibold">A Global News é uma empresa de comunicação que tem por objetivo fornecer notícias sobre vários temas de forma rápida e acessível.</p>
                    <br/>
                    <p className="text-2xl font-semibold">Temos aplicações web prontas para fornecer notícias sobre economia, finanças, política e esportes.</p>
                    <br/>
                </div>
        </div>
        </PrivateRoute>
    )
}

export const Head = () => <title>Sobre nós</title>