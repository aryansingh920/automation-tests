pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                // Execute the Python file and run tests
                sh 'python your_test_script.py'

                // Store the exit code of the previous command
                script {
                    exitCode = sh(returnStatus: true, script: 'echo $?').trim().toInteger()
                }

                // If the tests succeeded, move the file to the development environment
                when {
                    expression {
                        exitCode == 0
                    }
                }
                steps {
                    sh 'mv your_file.py development/'
                }
            }
        }
    }
}
