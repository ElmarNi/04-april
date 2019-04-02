"use strict"

const userInputs = document.getElementsByTagName("input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

btn.onclick = function () {
    // list.innerText = "";
    for (let i = 0; i < userInputs.length; i++) {
        if(userInputs[i].value == ""){
            while(true){
                if(confirm((i + 1) + ": input is empty")){
                    break
                }
            }
        }
        else
        {
            let listItems = document.createElement("li");
            let listItemsValue = userInputs[i].value;
            listItems.innerText = listItemsValue;
            if(list.children[i] == undefined)list.appendChild(listItems);
            else alert((i+1) + ": is already exsist")
        }
    }
}


