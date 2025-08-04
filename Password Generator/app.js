const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
//Math.random() * dataset.length gives a number between 0 and just less than the length of the array.
//Math.floor(...) ensures it becomes a valid index (integer).

//selectors
const passwordBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total_char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => //by default empty
{
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }

    if (password.length < total_char.value) {
        return generatePassword(password)
    }
   // console.log(truncateString(password, total_char.value))
   passwordBox.innerText=(truncateString(password, total_char.value))
}
generatePassword();
document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }

)
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
