
			var x1 = document.getElementById("stic");
			var x2 = document.getElementById("index1");
			var x3 = document.getElementById("LOGO1");
			var x4 = document.getElementById("v1");
			var x5 = document.getElementById("v2");
			var x6 = document.getElementById("v3");
			if(window.innerWidth > 856) {  //for displaying icon on desktop and "HOME" on tabs
				x1.style.top = "58px";
				x2.style.display = "none";
				x3.style.display="inline";
			}
			else {
				x1.style.top = "42px";
				x2.style.display = "inline";
				x3.style.display = "none";
			}
			$( window ).resize(function() {
				if(window.innerWidth > 856) {  //for displaying icon on desktop and "HOME" on tabs
					x1.style.top = "58px";
					x2.style.display = "none";
					x3.style.display="inline";
				}
				else {
					x1.style.top = "42px";
					x2.style.display = "inline";
					x3.style.display = "none";
				}
			});
			
			$(document).ready(function() {
				$("#part2").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#mechanical").offset().top - 80}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part3").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#electrical").offset().top - 80}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part4").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#software").offset().top - 80}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			var y1 = document.getElementsByClassName("button1");  //changing navigation of varun in phone
			if(window.innerWidth >= 480) {
					y1[0].className = "button1";
					y1[1].className = "button1";
					y1[2].className = "button1";
					y1[0].innerHTML = "Mechanical Subsystem";
					y1[1].innerHTML = "Software Subsystem";
					y1[2].innerHTML = "Electrical Subsystem";
				}
				else {
					for(var i=0; i<y1.length; i++) {
						y1[i].innerHTML = "";
					}
					y1[0].className = "button1 fa fa-wrench";
					y1[1].className = "button1 fa fa-laptop";
					y1[2].className = "button1 fa fa-flash";
				}
			$( window ).resize(function() {
				if(window.innerWidth >= 480) {
					y1[0].className = "button1";
					y1[1].className = "button1";
					y1[2].className = "button1";
					y1[0].innerHTML = "Mechanical Subsystem";
					y1[1].innerHTML = "Software Subsystem";
					y1[2].innerHTML = "Electrical Subsystem";
				}
				else {
					for(var i=0; i<y1.length; i++) {
						y1[i].innerHTML = "";
					}
					y1[0].className = "button1 fa fa-wrench";
					y1[1].className = "button1 fa fa-laptop";
					y1[2].className = "button1 fa fa-flash";
				}
			});