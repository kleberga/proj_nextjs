## Aplicação web de notícias de economia

Trata-se de um aplicativo web sobre notícias de economia com as seguintes características:
- o aplicativo está em produção no site https://noticiaseconomia.vercel.app/;
- para consultar as notícias, o usuário deve se registrar e/ou efetuar login;
- o usuário pode inserir comentários no final de cada notícia;
- o usuário pode alterar ou excluir os seus comentários; e
- existe uma página de contato para o usuário enviar dúvidas, críticas ou sugestões.

Do ponto de vista técnico, o aplicativo possui as seguintes características:
- foi desenvolvido utilizando o framework NextJS;
- a estilização dos componentes foi realizada por meio da biblioteca Tailwind CSS;
- o sistema de registro e login utiliza o recurso Authentication do Google Firebase. O nome do usuário é salvo no banco de dados Firestore do Google Firebase;
- os comentários dos usuários ao final de cada notícia e os dados enviados na tela de contato são salvos no banco de dados Firestore do Google Firebase;
- os campos de login, registro, recuperar senha e contato possuem validação;
- a tela Home, que contém a lista das notícias, possui paginação para mostrar no máximo 10 notícias por página;
- as notícias são salvas em arquivos markdown e carregadas automaticamente pela aplicação; e
- as rotas referentes à tela Home, às notícias individuais e à tela de Contato são protegidas e só podem ser acessadas por usuários autenticados.

As telas a seguir exibem a aplicação em produção:

1. Página de login

![Página Login](login.PNG)

2. Página de registro

![Página Registro](registro.PNG)

3. Página de recuperar senha

![Página Recuperar Senha](recuperar_senha.PNG)

4. Página Home

![Página Home](home.PNG)

5. Página contendo uma notícia

![Página Notícias](noticia.PNG)

6. Componente para inserir comentários ao final de cada notícia

![Componente comentário](comentario.PNG)

7. Página Sobre Nós

![Página Sobre Nós](sobre_nos.PNG)

8. Página Contato

![Página Contato](contato.PNG)

9. Página Política de Privacidade

![Página Política de Privacidade](politica_privacidade.PNG)

10. Página Política de Comentários

![Página Política de Comentários](politica_comentarios.PNG)
