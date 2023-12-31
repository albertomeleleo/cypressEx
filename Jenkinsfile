pipeline{
    agent any

    parameters{
        string(name:'SPEC',defaultValue:"cypress/e2e",description:'')
        choice(name:'BROWSER',choices:['chrome','firefox','electron'],description:'')
    }
    option{
        ansiColor('xtrem')
    }
    stages{
        stage('Testing Cypress'){
            step{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} "
            }
        }
    }
}