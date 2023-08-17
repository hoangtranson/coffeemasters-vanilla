const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const href = event.target.getAttribute("href");
                Router.go(href);
            });
        });  
        // Process initial URL   
        Router.go(location.pathname);
    },    
    go: (route, addToHistory=true) => {

    }
}

export default Router;