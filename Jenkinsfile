pipeline {
    agent none
    // environment {
    //     VERSION = 1.0.8
    // }
    stages {
        stage('Lint'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'npm install && npm run lint'
            }
        }
        stage('Test'){
            agent {
                label 'anar_gep'
            }
            steps{
                sh 'npm run test'
            }
        }
        // stage('Build'){
        //     agent {
        //         label 'anar_gep'
        //     }
        //     steps{
        //         sh "docker build --tag anarpi/matrixes:${VERSION} ."
        //         // sh 'make build'
        //     }
        // }
        // stage('Docker Build'){
        //     agent {
        //         label 'anar_gep'
        //     }
        //     steps{
        //         sh "docker build --tag anarpi/matrixes:${VERSION} ."
        //         // sh 'make docker-build'
        //     }
        // }
        // stage('Docker push'){
        //     agent {
        //         label 'anar_gep'
        //     }
        //     steps{
        //         sh "docker push anarpi/matrixes:${VERSION}"
        //         // sh 'make docker-push'
        //     }
        // }
        // stage('Deploy generator'){
        //     agent {
        //         label 'anar_gep'
        //     }
        //     steps{
        //         sh "oc apply -f ./kube/matrixes.yaml"
        //         // sh 'make deploy-generator'
        //     }
        // }
    }
}
