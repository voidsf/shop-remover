var removed = false;

function remove(){
    let links = document.querySelectorAll("button");
    links.forEach((item) => {
        if (item.getAttribute("aria-label") == "Shop TumblrMart"){
            item.parentElement.parentElement.parentElement.remove();
            clearInterval(remove);
        }
    });

    let paidElements = ["ad-free-browsing", "post-plus", "subscriptions", "purchases"];

    let adfree = document.querySelectorAll("a");
    adfree.forEach((item) => {
        if (paidElements.some(x => item.href.includes(x))){
            item.parentElement.remove();
        }
    });

    let fuckthis = document.querySelectorAll("main.ad-free-browsing");
    fuckthis.forEach((item)=>{
        item.remove();
    })
}


    setInterval(remove, 50);


window.addEventListener("hashchange", () => {
    setInterval(remove, 50);
    removed = false;
    remove();
})