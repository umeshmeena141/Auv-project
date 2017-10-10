
			var x1 = document.getElementById("stic");
			var x2 = document.getElementById("index1");
			var x3 = document.getElementById("LOGO1");
			if(window.innerWidth > 856) {
				x1.style.top = "58px";
				x2.style.display = "none";
				x3.style.display="inline";
			}
			else {
				x1.style.top = "42px";
				x2.style.display = "inline";
				x3.style.display = "none";
			}

			window.onscroll = function() {myF()};
			function myF() {
				if(window.innerWidth > 856) {
					x1.style.top = "59px";
					x2.style.display = "none";
					x3.style.display="inline";
					
				}
				else {
					x1.style.top = "43px";
					x2.style.display = "inline";
					x3.style.display = "none";
				}
				if(window.innerWidth > 450) {
					x1.style.zoom = "100%";
				}
				else {
					x1.style.zoom = "90%";
				}
			}
			$(document).ready(function() {
				$("#part2").click(function() {
					if(window.innerWidth > 450) {
						$("body,html").animate(
							{scrollTop :   $("#mechanical").offset().top - 90}, 400
						);  //how fast the scrolling animation will be in miliseconds
					}
					else {
						$("body,html").animate(
							{scrollTop :   $("#mechanical").offset().top - 140}, 400
						);  //how fast the scrolling animation will be in miliseconds
					}
				});
			});
			$(document).ready(function() {
				$("#part3").click(function() {
					if(window.innerWidth > 450)
						$("body,html").animate(
							{scrollTop :   $("#electrical").offset().top - 90}, 400
						);  //how fast the scrolling animation will be in miliseconds
					else
						$("body,html").animate(
							{scrollTop :   $("#electrical").offset().top - 140}, 400
						);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part4").click(function() {
					if(window.innerWidth > 450)
						$("body,html").animate(
							{scrollTop :   $("#software").offset().top - 90}, 400
						);  //how fast the scrolling animation will be in miliseconds
					else
						$("body,html").animate(
							{scrollTop :   $("#software").offset().top - 140}, 400
						);  //how fast the scrolling animation will be in miliseconds
				});
			});