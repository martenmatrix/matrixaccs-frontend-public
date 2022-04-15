class CookieBanner {
    static checkIfAccepted() {
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        if (acceptedCookies ==='true') return true;
        return false;
    }

    static setAcceptedCookies() {
        localStorage.setItem('acceptedCookies', 'true');
    }

    static hideCookieBanner() {
        const cookieBanner = document.getElementById('cookie-banner');
        cookieBanner.classList.add('hidden');
    }

    static init() {
        const closeButton = document.getElementById('close');
        closeButton.addEventListener('click', () => {
            this.hideCookieBanner();
            this.setAcceptedCookies();
        });

        if (this.checkIfAccepted()) this.hideCookieBanner();
    }
}

// CookieBanner.init();

class NavigationBar {
    static init() {
        const currentPath = window.location.pathname;
        if(!(currentPath === '/nike.html')) return;

        const toggleButton = document.getElementsByClassName("toggle-button")[0]
        const navbarLinks = document.getElementsByClassName("navbar-links")[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle("active")
        })
    }
}

NavigationBar.init();