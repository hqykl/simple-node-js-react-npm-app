pipeline {
    agent {
        docker {
            image 'node:lts-alpine3.15' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn config set registry https://registry.npmmirror.com'
                sh 'yarn install' 
            }
        }
    }
}
