pipeline {
    agent none
    stages {
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
