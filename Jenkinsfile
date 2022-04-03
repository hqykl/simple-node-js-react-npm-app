pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm config set registry https://registry.npmmirror.com'
                sh 'npm install' 
            }
        }
    }
}
