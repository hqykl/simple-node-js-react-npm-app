// pipeline {
//     agent {
//         docker {
//             image 'node:lts-alpine3.15' 
//             args '-p 3000:3000' 
//         }
//     }
//     environment { 
//         CI = 'true'
//     }
//     stages {
//         stage('Build') { 
//             steps {
//                 sh 'yarn config set registry https://registry.npmmirror.com'
//                 sh 'yarn install' 
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh './jenkins/scripts/test.sh'
//             }
//         }
//         stage('Deliver') { 
//             steps {
//                 sh './jenkins/scripts/deliver.sh' 
//                 input message: 'Finished using the web site? (Click "Proceed" to continue)' 
//                 sh './jenkins/scripts/kill.sh' 
//             }
//         }
//     }
// }

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs('node-v17.9.0') {
                    sh 'yarn install'
                    sh 'yarn build'
                }
            }
        }
    }
}
