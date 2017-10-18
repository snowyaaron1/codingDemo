function startAndResume() {
	switch (document.getElementById("pauseButton").innerHTML) {
		case "Pause":
			document.getElementById("pauseButton").innerHTML = "Resume";
			pJSDom[0].pJS.particles.move.enable = false;
			break;
		case "Resume":
			document.getElementById("pauseButton").innerHTML = "Pause";
			pJSDom[0].pJS.particles.move.enable = true;
			pJSDom[0].pJS.fn.particlesRefresh();
			break;
	}
}

function snowOrRain() {
	switch (document.getElementById("weatherButton").innerHTML) {
		case "Snow":
			document.getElementById("weatherButton").innerHTML = "Rain";
			pJSDom[0].pJS.particles.shape.type = "circle"
			pJSDom[0].pJS.particles.move.straight = false
			pJSDom[0].pJS.particles.move.random = false
			pJSDom[0].pJS.particles.color.value = "#fff"
			pJSDom[0].pJS.particles.move.speed = 5
			pJSDom[0].pJS.fn.particlesRefresh();
			break;
		case "Rain":
			document.getElementById("weatherButton").innerHTML = "Snow";
			pJSDom[0].pJS.particles.shape.type = "polygon"
			pJSDom[0].pJS.particles.move.straight = true
			pJSDom[0].pJS.particles.move.random = true
			pJSDom[0].pJS.particles.color.value = "#034aec"
			pJSDom[0].pJS.fn.particlesRefresh();
			break;
	}
}