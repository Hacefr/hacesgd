// 1. ADD NEW PROJECTS HERE
const projects = [
    {
        title: "Request",
        description: "Request something i can make ^^",
        link: "https://forms.gle/xGsKHPMancDpdWZA9",
        type: "Form"
    },
    {
        title: "this site :D",
        description: "All of my projects in 1 page",
        link: "https://hacefr.github.io/",
        type: "Utility"
    },
    {
        title: "Calendar+",
        description: "More in deph calendar and page saving",
        link: "https://hacefr.github.io/somethingtrstidk/",
        type: "Utility"
    },
    {
        title: "BareBones+",
        description: "A lightweight version of Gcalendar+",
        link: "https://hacefr.github.io/barebonesplus/",
        type: "Utility"
    },
    {
        title: "Droid+",
        description: "A mobile port of Gcalendar+",
        link: "https://hacefr.github.io/Droidplus/",
        type: "Utility"
    },
    {
        title: "WDGDPS",
        description: "A upcoming demonlist for the geometry dash private server Wertzium GDPS",
        link: "https://hacefr.github.io/jnknjidfjkpdfiuhdfijn/",
        type: "Upcoming project"
    },
     {
        title: "(OLD) Wertzium GDPS demonlist",
        description: "This was taken from a shitty template I remade my own",
        link: "https://hacefr.github.io/wertzium-demonlist/",
        type: "discontinued"
    },
    {
        title: "Cubefield Unlocked",
        description: "Someone requested me to unlock this game for them so I did :) (Not claiming ownership of cubefield)",
        link: "https://cubefield-7qsmhxqz.stackblitz.io/",
        type: "Game (Requested)"
    },
    {
        title: "EaglerLauncher",
        description: "A launcher a downloader of Eaglercraft 1.12.2",
        link: "https://hacefr.github.io/jnknjidfjkpdfiuhdfijn/",
        type: "Game"
    },
    {
        title: "HTML-Viewer",
        description: "A simple (sadly half broken) html editor I will be remaking this from scratch soon",
        link: "https://hacefr.github.io/HTML-Viewer/",
        type: "Utility (discontinued being remade)"
    }
];

// 2. THE MAGIC: This function turns the list above into HTML cards
function displayProjects() {
    const grid = document.getElementById('project-grid');
    
    // Clear the grid first
    grid.innerHTML = "";

    projects.forEach(project => {
        const card = `
            <a href="${project.link}" class="card" target="_blank">
                <div>
                    <span class="tag">${project.type}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div style="margin-top: 15px; font-weight: bold; font-size: 0.8rem;">View Project →</div>
            </a>
        `;
        grid.innerHTML += card;
    });
}

// Run the function when the page loads
displayProjects();
