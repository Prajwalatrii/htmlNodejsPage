pipeline {
    environment {
      registry = "mydockerhub/my-cicd-app"
      registryCredential = 'dockerhub'
      dockerImage = ''
  }
   agent { label 'Mydocker' } 
//   agent { 
//     docker { 
//       image 'node:18.16.00'
//       args '-p 5000:5000'
//    } 
//  }
  stages {
    stage('Initialize'){
        def dockerHome = tool 'Mydocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }  
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
