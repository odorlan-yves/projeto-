# Lista de tarefas

Aplicação estática em português para adicionar, concluir e remover tarefas. A lista fica armazenada no navegador.

## Executar localmente

Com Python 3, execute `python -m http.server 8000` e abra http://localhost:8000.

## Testes

Com Node.js 24, execute `node --test`.

## CI/CD

O GitHub Actions executa os testes a cada push e pull request para a branch `main`. Após uma execução bem-sucedida na `main`, o workflow publica os arquivos da aplicação no GitHub Pages.

Para ativar a publicação, abra **Settings → Pages**, selecione **GitHub Actions** em **Source** e execute novamente o workflow **CI/CD** se necessário. A aba **Actions** mostra o resultado dos testes e o link do deploy.

