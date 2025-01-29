"use strict";

// Mobile Menu
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener("DOMContentLoaded", initApp)

// Modal
function toggleModal(btnId, modalId, closeBtnId) {
    const modal = document.getElementById(modalId)
    const btn = document.getElementById(btnId)
    const close = document.getElementById(closeBtnId)
    const body = document.querySelector('body')


    btn.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        modal.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.toggle('hidden')
            modal.classList.toggle('flex')
            body.classList.toggle('overflow-hidden')
        }
    })

    close.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        modal.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
    })
}

toggleModal('modal-btn', 'modal', 'close-btn')
toggleModal('modal-btn-one', 'modal-one', 'close-btn-one')

// Tabs
function toggleTabs(tabsTriggerClass, tabsTContentClass) {
    const tabsTriggers = document.querySelectorAll(tabsTriggerClass)
    const tabsContents = document.querySelectorAll(tabsTContentClass)
    tabsContents.forEach((content) => {
        content.classList.add('hidden')
        tabsContents[0].classList.remove('hidden')
    })


    tabsTriggers.forEach((trigger, idx) => {
        trigger.addEventListener('click', () => {
            tabsTriggers.forEach((t) => t.classList.remove('active'))

            trigger.classList.add('active')

            tabsContents.forEach((content) => {
                content.classList.add('hidden')
            })

            tabsContents[idx].classList.remove('hidden')
        })
    })
}

toggleTabs('.tab-trigger', '.tab-content')

// Accordion
function accordion() {
    const items = document.querySelectorAll('.accordion-trigger')

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode

            if (parent.classList.contains('active')) {
                parent.classList.remove('active')
            } else {
                document.querySelectorAll('.accordion-item').forEach(child => child.classList.remove('active'))

                parent.classList.add('active')
            }
        })
    })
}

accordion()

// Scroll to Top Button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//     ProgressBarTop
window.addEventListener('scroll', handleScroll);

function handleScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
}
