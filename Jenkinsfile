pipeline {
    agent {
        docker {
            image 'node:lts-alpine3.15' 
            args '-p 3000:3000' 
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn config set registry https://registry.npmmirror.com'
                sh 'yarn install' 
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
            }
        }
    }
}

