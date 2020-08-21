pipeline {
    agent none
    stages {
        stage('Lint'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'npm install && npm run lint'
            }
        }
        stage('Build'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'make build'
            }
        }
        stage('Docker Build'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'make docker-build'
            }
        }
        stage('Docker push'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'make docker-push'
            }
        }
        stage('Deploy generator'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'make deploy-generator'
            }
        }
    }
}
