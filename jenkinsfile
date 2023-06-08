pipeline {
	agent none  
  stages {
  	stage('Node Install') {
    	agent {
      	docker {
        	image 'node:18.16.00'
        }
      }
      steps {
      	sh 'npm i express'
      }
    }
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t nana/htmlNodejsPage:latest .'
      }
    }
  }
}
