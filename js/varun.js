
			var x1 = document.getElementById("stic");
			var x2 = document.getElementById("index1");
			var x3 = document.getElementById("LOGO1");
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
			}
			$(document).ready(function() {
				$("#part2").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#v1").offset().top - 50}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part3").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#v2").offset().top - 50}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});
			$(document).ready(function() {
				$("#part4").click(function() {
					$("body,html").animate(
						{scrollTop :   $("#v3").offset().top - 50}, 400
					);  //how fast the scrolling animation will be in miliseconds
				});
			});