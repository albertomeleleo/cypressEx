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
         stage('Report Cypress'){
            steps{ 
                sh 'npx mochawesome-merge "cypress/results/*.json" > mochawesome.json'
                sh 'npx marge mochawesome.json'
                sh 'mv mochawesome-report/mochawesome.html mochawesome-report/index.html'
            }
            
        }
    }
    post {
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
      }
    }
}