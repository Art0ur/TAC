pipeline {
agent any

environment {
DOCKER_IMAGE = "docker"
CONTAINER_NAME = "containe"
GIT_REPO_URL = "https://github.com/Art0ur/TAC.git"
BRANCH = "main"
}

stages {
stage('Checkout') {
steps {
git branch: env.BRANCH, url: env.GIT_REPO_URL
}
}

stage('Build Docker Image') {
steps {
script {
sh "docker build -t ${DOCKER_IMAGE} ."
}
}
}

stage('Remove Old Container') {
steps {
script {
sh """
docker rm -f ${CONTAINER_NAME} || true
docker rmi -f ${DOCKER_IMAGE} || true
"""
}
}
}

stage('Run New Container') {
steps {
script {
sh "docker run -d --name ${CONTAINER_NAME} ${DOCKER_IMAGE}"
}
}
}
}

post {
always {
emailext (
subject: "Jenkins Job '${env.JOB_NAME}' (#${env.BUILD_NUMBER})",
body: """

Build ${currentBuild.currentResult}: Job '${env.JOB_NAME}' (#${env.BUILD_NUMBER})

Check console output at ${env.BUILD_URL} to view the results.

""",
recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
to: 'roomullo_@hotmail.com'
)
}
}
}