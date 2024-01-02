pipeline{
    agent any

    parameters{
        string(name:'SPEC',defaultValue:"cypress/e2e",description:'')
        choice(name:'BROWSER',choices:['chrome','firefox','electron'],description:'')
    } 
    stages{
        stage('Testing Cypress'){
            steps{
                catchError {
                    sh 'npm i'
                    sh 'npx cypress run --browser ${BROWSER} --spec ${SPEC} '
                }
            }
            
        } 
    }
    post {
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/results', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
      }
    }
}