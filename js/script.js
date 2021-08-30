let style = document.createElement("Style");
let toggler = document.getElementsByClassName("nav-toggle")[0];
let styleHtml = `
@keyframes animateThis {
    from {
        transform: translateY(20%);
    }

    to {
        transform: translateY(0%);
    }
}
.header-section .navbar {
    height: auto; /* 4em */
    flex-direction: column;
}

.header-section .navbar .nav-brand {
    display: none; /* Block */
}
.header-section .navbar .nav-list {
    display: block; /* none */
    width: 45%;
    margin: 1em 0;
    animation-name:animateThis;
    animation-duration:1s;
}
.header-section .navbar .nav-list .nav-item {
    padding-bottom: 10px;
}
.header-section .navbar .nav-btn {
    display:block;
    margin:0 0 2em 0;
    align-items: center;
    width: 12rem;
    text-align: center;
    padding: 0.5em 0;
    align-self: center;
}
.header-section .navbar .nav-toggle {
    margin-right: 0;
    position: absolute;
    top: 1em;
    right: 3em;
    transform: rotate(90deg);
    transition: all 0.3s;
}
  `;

// Checks if it is on/off
let clicked = () => {
    if (style.innerHTML == styleHtml) {
        style.innerHTML = "";
    } else {
        style.innerHTML = styleHtml;
    }
};

// Event Listener (click)
toggler.addEventListener("click", clicked);

// Appenedes Created Element
document.head.appendChild(style);
