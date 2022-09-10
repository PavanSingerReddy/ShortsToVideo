const button = document.querySelector('.btn')

button.addEventListener('click',async()=>{
    const [tab] = await chrome.tabs.query({active:true,currentWindow:true})

    await chrome.scripting.executeScript({
        target : {tabId : tab.id},
        function : changeMode,
    })
})



async function changeMode(){
    let url = window.location.href;

    url = url.replace('/shorts/','/watch?v=')

    window.location.href=url
}