section("timeline");

// Start: Chat Events
let chatContact = document.querySelector(".chat .chat__contact");
let chatConversation = document.querySelector(".chat .chat__conversation");
let chatContactToggler = document.querySelector(".chat .contact-toggler");
let chatConversationToggler = document.querySelectorAll(`
    .chat .chat__right .icon__item, 
    .chat .chat__contact-body .contact .contact__item
`);

if (chatContactToggler) {
    chatContactToggler.addEventListener("click", function () {
        chatConversation.style.display = "none";

        chatContact.style.display == "none" ?
            chatContact.style.display = "flex" : chatContact.style.display = "none";
    })
}

if (chatConversationToggler) {
    chatConversationToggler.forEach((item) => {
        item.addEventListener("click", function () {
            chatContact.style.display = "none";
    
            chatConversation.style.display == "none" ?
                chatConversation.style.display = "flex" : chatConversation.style.display = "none";
        })
    })
}
// End: Chat Events

// Start: Tab Events
let tabs = document.querySelectorAll(".top .top__right .tab .tab__link");

if(tabs){
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            setTimeout(() => {
                tabs.forEach((item) => {
                    item.classList.remove("tab__link--active");
                });
                tab.classList.add("tab__link--active");
            }, 500);
        })
    })
}
// End: Tab Events