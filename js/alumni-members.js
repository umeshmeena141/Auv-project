var SA=[];		
		SA[0]={
			Name:"Prakhar Agarwal",
			Department: "Y15",
			email:"pkhrag@iitk.ac.in",
			facebook:"https://www.facebook.com/prakhar.agarwal.754365",
			linkedin:"https://www.linkedin.com/in/prakhar-agarwal-32a066131/",
			github:"http://github.com/pkhrag/",
			img1:"images/pe.jpg",
			others:"It was really nice to work in AUV. I learnt a lot from it. It helped me developing interest  in systems and development. Working with the team and achieving our goal (NIOT competition) was really a great experience."
		}
		SA[1]={
			Name:"Shibhansh Dohare",
			Department: "Y14",
			email:"shibhansdohare1997@gmail.com",
			facebook:"https://www.facebook.com/Shibhansh",
			linkedin:"https://www.linkedin.com/in/shibhansh-dohare/",
			github:"http://github.com/shibhansh/",
			img1:"images/pe.jpg",
			others:"It is the hardest think I have done at IITK :) Like a  . preview to what working in a startup might be like"
		}
		SA[2]={
			Name:"My Name",
            Department: "Some branch",
			Others: "example@iitk.ac.in",
			img1:"images/avatar3.png"
		}
		SA[3]={
			Name:"My Name",
			Department: "CE",
			Others: "example@iitk.ac.in",
			img1:"images/placeholder.png"
        }

        var app = angular.module('myApp', []);

        app.controller('myCtrl', function ($scope) {
            $scope.alumni = [
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg"},
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg"},
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg"},
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg" },
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg" },
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg" },
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg" },
                { Name: "Prakhar Agarwal", Department: "Y15", Email: "pkhrag@iitk.ac.in", img1: "images/pe.jpg" }
            ]; 
        });