pipeline {
    environment {
      registry = "mydockerhub/my-cicd-app"
      registryCredential = 'dockerhub'
      dockerImage = ''
  }
    agent { 
     docker { 
       image 'node:18.16.00'
       // args '-p 5000:5000'
    } 
  }
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
