function main() {
    setupNavbarButton("B1", "D1");
}

function setupNavbarButton(buttonId, dropdownId) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    button.addEventListener("click", () => {
        const isVisible = dropdown.style.display === "flex";
        dropdown.style.display = isVisible ? "none" : "flex";
    });
}

document.addEventListener("DOMContentLoaded", main);
