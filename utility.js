function extendOrCollapseWidth(isToggled, sideNavBar){
    if(isToggled){
        sideNavBar.style.width = '6vh';
        sideNavBar.style.padding = '1%';
    }else{
        sideNavBar.style.width = '0';
        sideNavBar.style.padding = '0';
    }
}

function dynamicElementText(domElement, arr){
    innerText = '';
    let index = 0;
    let currentElement = arr[index];

    function timer(ms){
        return new Promise(res => setTimeout(res, ms));
    }
    async function backspaceAnimated(){
        for(let i = innerText.length; i > 0; i--){
            let textArr = innerText.split('');
            textArr.pop();
            innerText = textArr.join('');
            domElement.innerText = innerText;
            await timer(100);
        }
    }

    async function typingAnimated(){
        for(let i = 0; i < currentElement.length; i++){
           innerText += currentElement[i];
           domElement.innerText = innerText;
           await timer(110);
        }
        setTimeout(function(){
            backspaceAnimated();
        }, currentElement.length * 220);
        await timer(7000);
        typingAnimated();
    }


        typingAnimated();
}

