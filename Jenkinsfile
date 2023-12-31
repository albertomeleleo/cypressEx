pipeline{
    agent any

    parameters{
        string(name:'SPEC',defaultValue:"cypress/e2e",description:'')
        choice(name:'BROWSER',choices:['chrome','firefox','electron'],description:'')
    } 
    stages{
        stage('Testing Cypress'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC} "
            }
        }
    }
}