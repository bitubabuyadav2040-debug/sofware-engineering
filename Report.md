# CMP-N204-0 Software Engineering Labs Report
**Student Name:** Bitu Babu Yadav
**Student ID:** A00032853

## Project Overview
This project is a Number Guessing Quest game designed with a retro/cyberpunk aesthetic. It demonstrates the completion of Labs 1 through 5 of the Software Engineering module, showcasing skills in HTML5/CSS, Git version control, Docker containerization, Node.js/Express routing, and MVC architecture using Pug templates.

## Lab 1: Version Control with Git
The repository was initialized and configured with the student's name and email. 
A `Bitu_Babu_Yadav.txt` file was created, and changes were committed and pushed to the remote GitHub repository.

![Git Basics](screenshots/vscode_git_basics_1783453883573.png)
![GitHub Repo](screenshots/github_online_repo_1783453958889.png)

## Lab 2: Semantic HTML5 & CSS Layouts
A retro-styled HTML page was designed, defining the CSS variables and layout that would be later ported to Pug templates. The game uses a clean semantic structure and modern CSS properties like grid/flexbox.

![HTML Basics Code](screenshots/vscode_html_code_1783459220369.png)
![HTML Basics Browser](screenshots/browser_html_basics_1783453896240.png)

## Lab 3: Docker Containers & DB Scaffolding
A `docker-compose.yml` file was created to spin up a MySQL `game_db` and `phpmyadmin` interface. A `db_init.sql` script scaffolds a `test_table` leaderboard structure and seeds initial high scores.

![Docker Compose Up](screenshots/docker_terminal_output_1783459229367.png)
![PhpMyAdmin DB](screenshots/phpmyadmin_db_1783453915060.png)

## Lab 4: Express Routing
An Express backend handles static file serving, URL routing, and database querying. The app implements dynamic parameters and basic routing.

![Routing Code](screenshots/vscode_routing_code_1783459237527.png)
![Routing Browser Test](screenshots/browser_routing_test_1783459245413.png)

## Lab 5: MVC & PUG
The view layer was refactored into Pug templates (`layout.pug`, `index.pug`, `db.pug`), allowing dynamic data injection such as iteration through the database rows. The game itself uses vanilla JavaScript logic inside the `index.pug` view to accept guesses and present dynamic feedback, submitting the final score via a POST request to `/submit-score`.

![Pug Template Code](screenshots/vscode_pug_template_1783459253644.png)
![Database View in Browser](screenshots/browser_db_view_1783453905821.png)

## Final Repository
All source code and assets have been successfully tracked and pushed to the online GitHub repository.

**GitHub Link:** [https://github.com/bitubabuyadav2040-debug/sofware-engineering.git](https://github.com/bitubabuyadav2040-debug/sofware-engineering.git)

## Conclusion
This submission fulfills all requirements for the alternative assessment for the module.
