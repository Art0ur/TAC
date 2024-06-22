pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Passo para fazer o checkout do código do repositório
                checkout scm
            }
        }

        stage('Build Spring App') {
            when {
                // Condição: Sempre executar para o projeto Spring
                expression { true }
            }
            steps {
                dir('spring') {
                    script {
                        // Build da imagem Docker para o projeto Spring
                        docker.build('my-spring-app')
                    }
                }
            }
        }

        stage('Build React App') {
            when {
                // Condição: Sempre executar para o projeto React
                expression { true }
            }
            steps {
                dir('react') {
                    script {
                        // Build da imagem Docker para o projeto React
                        docker.build('my-react-app')
                    }
                }
            }
        }

        stage('Build Node App') {
            when {
                // Condição: Sempre executar para o projeto Node
                expression { true }
            }
            steps {
                dir('node') {
                    script {
                        // Build da imagem Docker para o projeto Node
                        docker.build('my-node-app')
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            when {
                // Condição: Sempre executar para iniciar Docker Compose
                expression { true }
            }
            steps {
                // Executa o Docker Compose para iniciar os serviços
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            // Notificação por e-mail em caso de sucesso
            emailext subject: 'Pipeline CI/CD - Sucesso',
                      body: 'A pipeline CI/CD foi executada com sucesso.',
                      to: 'roomullo_@hotmail.com'
        }
        failure {
            // Notificação por e-mail em caso de falha
            emailext subject: 'Pipeline CI/CD - Falha',
                      body: 'A pipeline CI/CD falhou. Verifique o log para mais detalhes.',
                      to: 'roomullo_@hotmail.com'
        }
    }
}
