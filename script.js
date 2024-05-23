document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById("display");
    const buttons = document.querySelectorAll(".numbers button");
    const resalt = document.querySelector(".resalt");
    const display = document.getElementById("display");
    const delButton = document.querySelector(".del");
    const resetButton = document.querySelector(".reset_eqaul button:first-child");
    const equalButton = document.querySelector(".reset_eqaul button:nth-child(2)");
    const calc = document.querySelector(".calc");
    const numbers = document.querySelector(".numbers");

    const theme1 = document.getElementById("theme1");
    const theme2 = document.getElementById("theme2");
    const theme3 = document.getElementById("theme3");

    // Function to change the theme
    function changeTheme(theme) {
        if (theme === 'theme1') {
            document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
            resalt.style.backgroundColor = 'hsl(224, 36%, 15%)';
            display.style.backgroundColor = 'hsl(0, 0%, 93%)';
            display.style.backgroundColor = 'hsl(224, 36%, 15%)';
            delButton.style.backgroundColor = 'hsl(223, 31%, 20%)';
            resetButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
            equalButton.style.backgroundColor = 'hsl(6, 63%, 50%)';
        } else if (theme === 'theme2') {
            document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
            resalt.style.backgroundColor = 'hsl(0, 0%, 93%)';
            display.style.backgroundColor = 'hsl(0, 0%, 93%)';
            numbers.style.backgroundColor = 'hsl(0, 5%, 81%)';
            delButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
            resetButton.style.backgroundColor = 'hsl(25, 98%, 40%)';
            equalButton.style.backgroundColor = 'hsl(45, 7%, 89%)';
            calc.style.color = 'hsl(221, 14%, 31%)';
        } else if (theme === 'theme3') {
            document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
            resalt.style.backgroundColor = 'hsl(268, 71%, 12%)';
            numbers.style.backgroundColor = 'hsl(268, 71%, 12%)';

            display.style.backgroundColor = 'hsl(268, 71%, 12%)';
            delButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
            resetButton.style.backgroundColor = 'hsl(176, 100%, 44%)';
            equalButton.style.backgroundColor = 'hsl(268, 47%, 21%)';
            calc.style.color = 'hsl(52, 100%, 62%)';
        }
    }

    // Handle theme change
    theme1.addEventListener('click', () => changeTheme('theme1'));
    theme2.addEventListener('click', () => changeTheme('theme2'));
    theme3.addEventListener('click', () => changeTheme('theme3'));

    // Rest of your button click event listeners...
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.value;
        if(value === "Reset") {
            result.value = "0";
        } else if(value === "DEL") {
            result.value = result.value.slice(0, -1) || "0";
        } else if(value === "=") {
            try {
                result.value = eval(result.value.replace('x', '*')) || "0";
            } catch {
                result.value = "Error";
            }
        } else {
            if (result.value === '0' && value !== '.') {
                result.value = value;
            } else {
                result.value += value;
            }           
        }
      });
    });
});
