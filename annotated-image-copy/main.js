document.addEventListener("DOMContentLoaded", function () {
	/* grabbing all of the elements with the class dot */
	const dots = document.querySelectorAll(".dot");

	/* makes such that each dot is included within the function */
	dots.forEach(function (dot) {
		dot.addEventListener("click", function (e) {
			e.preventDefault();
			/* makes sure that the effect only happens when the
			dot is clicked on */
			const clicked_dot = e.target.closest(".dot");

			/* conditionals which says if the clicked dot has the class
			active then remove the class active, otherwise add the class
			active if the user is trying to open it and it does
			not have th class active */
			if (clicked_dot.classList.contains("active")) {
				clicked_dot.classList.remove("active");
			} else {
				clicked_dot.classList.add("active")
			}
		});
	});
});