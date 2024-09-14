const maxSize = 2 * 1024 * 1024; // 2MB in bytes

document.getElementById("file").addEventListener("change", function () {
    const file = this.files[0];

    if (file && file.size > maxSize) {
        alert("File is too large! Please select a file smaller than 2MB.");
    } else if (file) {
        const imageURL = URL.createObjectURL(file);

        document.getElementById("logo").src = imageURL;
        document.getElementById("logo").style.display= "block";
    }
});

const circles = document.getElementsByClassName("circle");
Array.from(circles).forEach(circle => {
    circle.addEventListener("click", function () {
             document.getElementById("umbrella").setAttribute("src", `images/${this.id} umbrella.png`);
    });
});


       
