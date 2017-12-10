var s1 = document.getElementById("stic");
			if(window.innerWidth > 856) {  //for displaying icon on desktop and "HOME" on tabs
				s1.style.top = "58px";
			}
			else {
				s1.style.top = "42px";
			}
			$( window ).resize(function() {
				if(window.innerWidth > 856) {  //for displaying icon on desktop and "HOME" on tabs
					s1.style.top = "58px";
				}
				else {
					s1.style.top = "42px";
				}
			});