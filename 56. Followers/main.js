const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";
  
	const updateFollowersCounter = () => {
    // dấu + trả về dạng "số" instead "chuỗi"
		const target = +followersCounter.getAttribute("data-target"); 
    // "0" is "String" but tới chỗ "C" thì nó thành "Số" vì dấu "+" 
		const c = +followersCounter.innerText;
    
		const increment = target / 500;
    // target : số muốn đếm tới
		if (c < target) {
			followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
			setTimeout(updateFollowersCounter, 1);
		} else {
			followersCounter.innerText = target;
		}
	};

	updateFollowersCounter();
});
