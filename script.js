const buttonTag = document.querySelector(".buttonTag");
const container = document.querySelector(".container");
const successPage = document.querySelector(".successPage");
const userInput = document.querySelector(".userInput");
const replyDiv = document.querySelector(".reply");
const errorShow = document.querySelector(".errorShow");

buttonTag.addEventListener("click", () => {
    if (userInput.value == "" || !userInput.value.includes("@gmail.com")) {
        userInput.classList.add("inputError");
        let newDiv = document.createElement("div");
        newDiv.classList.add("emailHead");
        newDiv.classList.add("errorMessage");
        errorShow.innerHTML = "";
        let reply = document.createTextNode("Valid email required");
        newDiv.append(reply);  
        errorShow.append(newDiv);
    } else {
        container.style.display = "none";
        successPage.style.display = "inline";
        const replyPageText = `A confirmation email has been sent to <strong>${userInput.value}</strong> .Please open it and click the button inside to comfirm your subscription.`;
        replyDiv.innerHTML = replyPageText;
    }
})

