# O que é Ionic?
 * Desenvolvimento por @benjsperry

# Cordova
 * coração do Ionic
 * responsável por gerar o instador da aplicação
 * comunicação entre a aplicação e o celular
 * Funciona como um container para webview (interface) que roda nativamente em cada plataforma


# Inicialização CLI
 * comando para inicializar um projeto
 * ionic start [nome_do_projeto] [template]

 * comando para inicializar app
 * ionic serve

 * comando para simular ou rodar num dispositivo
 * ionic cordova run [ios] ou [android]

 * comando para adicionar plataforma
 * ionic cordova platform add [android] ou [ios]

 * comando para gerar apk 
 * ionic cordova build [platform] --prod


# Lista de templates
 * tabs: template configurado para utilizar tabs, botões no rodapé ou cabeçalho
 * blank: template vazio
 * sidemenu: template de navegação de side menu
 * super: template completo, pre-built pages, providers e boas práticas de desenvolvimento
 * conference: template que demonstra aplicação do mundo real
 * tutorial: template básico que vem como utilizar o ionic
 * AWS: template da Amazon com Mobile Hub Starter
 
 # Resumo
  * O que é um componente;
  * Data Binding com interpolação e ngModel (two way data binding);
  * Tipagem com TypeScript
  * Template condicional com ngIf/else (else necessário ng-template);
  * Loop no template com ngFor;
  * Template condicional com [ngSwitch]
  * Adicionando CSS dinamico con [ngClass]