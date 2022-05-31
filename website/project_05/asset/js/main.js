let loader = (loading) => {
    let loader = document.querySelector(".loader");
    loading ? loader.classList.add("loading") : loader.classList.remove("loading");
}

let section = (id) => {
    let sections = document.querySelectorAll("body > section[id]");
    if(sections){
        sections.forEach((item) => {
            item.classList.remove("active");
            item.id === id && item.classList.add("active");
        })
    }
    loader(false);
}

let tagTogglers = document.querySelectorAll(".tab-toggler");

if(tagTogglers){
    tagTogglers.forEach((item) => {
        item.addEventListener("click", () => {
            let href = item.getAttribute("data-href");
            loader(true);
            setTimeout(() => { section(href); }, 500)
        });
    });
}