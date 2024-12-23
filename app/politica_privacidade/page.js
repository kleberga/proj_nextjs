import * as React from "react"

export default function PoliticaPrivacidade(){
    return(
        <div>
            <meta name="descricao" content="Página contendo a política de privacidade da aplicação."></meta>
            <div className="ml-12">
                <h1 className="text-2xl font-bold">Política de Privacidade</h1>
                <br/>
                <p className="text-xl">A Global News está comprometida com a proteção de seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações de acordo com a Lei Geral de Proteção de Dados (LGPD).</p>
                <br/>
                <h1 className="text-xl font-bold">1. Coleta de Dados</h1>
                <br/>
                <p className="text-xl">Coletamos informações que você nos fornece diretamente, como nome, e-mail, e outras informações de contato. Também coletamos automaticamente dados sobre sua navegação em nosso site, como endereço IP e cookies.</p>
                <br/>
                <h1 className="text-xl font-bold">2. Uso de Dados</h1>
                <br/>
                <p className="text-xl">Utilizamos seus dados para melhorar nossos serviços, responder a solicitações e enviar informações relevantes. Não compartilhamos seus dados com terceiros, exceto quando necessário para fornecer nossos serviços ou conforme exigido por lei.</p>
                <br/>
                <h1 className="text-xl font-bold">3. Direitos do Usuário</h1>
                <br/>
                <p className="text-xl">Você tem o direito de acessar, corrigir, excluir e restringir o uso de seus dados pessoais. Para exercer seus direitos, entre em contato conosco através do e-mail globalnews@gmail.com.</p>
                <br/>
                <h1 className="text-xl font-bold">4. Segurança dos Dados</h1>
                <br/>
                <p className="text-xl">Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou destruição.</p>
                <br/>
                <h1 className="text-xl font-bold">5. Mudanças na Política</h1>
                <br/>
                <p className="text-xl">Podemos atualizar esta Política de Privacidade de tempos em tempos. Notificaremos você sobre mudanças significativas através do nosso site ou por outros meios.</p>
                <br/>
                <h1 className="text-xl font-bold">6. Contato</h1>
                <br/>
                <p className="text-xl">Se você tiver qualquer dúvida sobre esta Política de Privacidade ou nossas práticas de tratamento de dados, entre em contato conosco através do e-mail globalnews@gmail.com.</p>
            </div>
        </div>
        
    )
}

export const Head = () => <title>Política de Privacidade</title>