**SOBRE O QUE É O PROJETO?**
========================================================================
O objetivo do projeto é servir de base para o treinamento de "Formação Java/Angular para Jovens Profissionais", da Indra, unidade de João Pessoa, 
ministrado por Eder Ferreira (efmendes@indracompany.com) e Rafael Ferreira (rferreiraa@indracompany.com)


**Conteúdo do Treinamento**

- Git
- Lombok 
- Criando um projeto Spring 
- Maven 
- Spring Boot 
- Api (Rest)
- Swagger 
- JPA (Hibernate) 
- Spring Data 
- MySQL


**COMO CONSTRUIR O AMBIENTE**
========================================================================

Baixar e instalar o Lombok na sua IDE em https://projectlombok.org/download.
Acessar o diretório onde o lombok.jar foi baixado e executar no terminal: java -jar lombok.jar.
Na janela de instalação, especificar o caminho onde se encontra sua IDE e concluir a instalação.

Caso não consiga instalar através da interface, copiar o lombok.jar para o diretório do eclipse e editar o arquivo eclipse.ini e incluir a linha abaixo no final do arquivo:

-javaagent:/DIRETÓRIO_QUE_VOCE_COPIOU_O_LOMBOK.JAR/lombok.jar

**Back-End**

	Primeiramente deve-se clonar o repositório no endereço:
	
	https://github.com/efmendes/treinamento_202109.git
	
	Após o projeto ser clonado, abra o terminal no diretório clonado **treinamento**
	e utilize os seguintes comandos:

	
	mvn install
	../treinamento-controller/target
	java -jar treinamento.war
	
	
**É de suma importância aguardar a execução dos comandos acima citados.**

========================================================================

**Front-End**

        Instalar o NodeJS previamente no sistema operacional de vocês, de preferência a versão LTS.
	
	Após a instalação, verifiquem rodando o terminal/git bash/powershell, o comando:

	comando: npm -v
	resposta: 6.14.15
	
	Instalar o CLI do angular.

	comando: npm install -g @angular/cli
	
	Utilizar o seguinte comando dentro da pasta "View":
	
	comando: npm install node_modules
	
	
**É de suma importância aguardar a execução dos comandos acima citados.**

========================================================================


Para acesso à sua API desenvolvida, utilize o endereço: http://localhost:8080/treinamento




Voce pode desenvolver utilizando os recursos abaixo:
========================================================================
- Java 11
- Maven

Banco de dados
========================================================================

Como acessar o client do MySQL:

	
JDBC URL: jdbc:mysql://31.220.109.68:3306/treinamentoindra

Usuário: 

Senha: 


Layout
========================================================================

## Layout HomePage
  ![web](https://github.com/wagnerazvdo/bancoAngular/blob/main/Assets/Captura%20de%20Tela%202021-10-18%20%C3%A0s%2013.52.42.png)
  
## Layout ListagemClientes
  ![web](https://github.com/wagnerazvdo/bancoAngular/blob/main/Assets/Captura%20de%20Tela%202021-10-18%20%C3%A0s%2013.53.08.png)  

## Layout TelaSaque
  ![web](https://github.com/wagnerazvdo/bancoAngular/blob/main/Assets/Captura%20de%20Tela%202021-10-18%20%C3%A0s%2013.53.15.png) 
  
## Layout TelaTransferência
  ![web](https://github.com/wagnerazvdo/bancoAngular/blob/main/Assets/Captura%20de%20Tela%202021-10-18%20%C3%A0s%2013.53.29.png)  
  
## Layout TelaExtrato
  ![web](https://github.com/wagnerazvdo/bancoAngular/blob/main/Assets/Captura%20de%20Tela%202021-10-18%20%C3%A0s%2013.53.32.png)   
  
========================================================================

# Autor

Wagner Azevedo

https://www.linkedin.com/in/wagner-azevedo-5b849216a/
