# Software Engineering (CMP-N204-0) - Sprint 1 Submission

**Group Name:** Balen  
**Submission Date:** 09/02/2026 (Sprint 1 Review)  

## Team Members

| Name | Student ID | Role |
|------|------------|------|
| Bitu Babu Yadav | A00032853 | Developer / DevOps Lead |
| Khagaraj Yadav | A00028043 | Developer / Backend |
| Neha Thapa | A00026193 | Developer / Frontend / Design |
| Girendra Kumar Thakur | A00025476 | Developer / Database / QA |

---

## 1. Project Description: Community Food Share

**Theme:** Sharing, exchange, and building community.

**Concept:**  
"Community Food Share" is a dynamic, database-driven web application designed to minimize food waste and alleviate the cost-of-living crisis within the local university community. It serves as a non-profit platform where students and staff can list excess food items (e.g., leftover ingredients from cooking, unopened non-perishables, surplus garden produce) to be shared for free with others who need them.

**Core Value Proposition:**  
*   **For Givers:** A convenient, ethical way to dispose of surplus food without guilt, contributing to sustainability.
*   **For Receivers:** Access to free, nutritious food, reducing grocery bills.
*   **For the Community:** Fosters a culture of sharing and support, reduces landfill waste, and helps students manage their budgets.

**Key Features (MVP):**
*   User registration and authentication (students/staff only via email domain).
*   "Post an Item" interface with photo upload, description, expiry date, and pickup location.
*   "Browse Items" feed with filtering (e.g., by category: Veg, Fruit, Pantry).
*   Simple messaging/claiming system to arrange pickup.

---

## 2. Planned Technology Stack

We will adhere strictly to the module's required "Full Stack" technologies:

*   **Frontend:** HTML5, CSS3 (Custom styling), JavaScript (ES6+), PUG (Templating Engine).
*   **Backend:** Node.js environment with Express.js framework.
*   **Database:** MySQL (Relational database for users, items, and transactions).
*   **DevOps & Deployment:** 
    *   **Docker:** Containerization of the application and database for consistent development and deployment environments.
    *   **Git:** Version control (GitHub).
    *   **GitHub Actions:** CI/CD pipeline for automated testing and deployment.
*   **Project Management:** GitHub Projects (Kanban board).

---

## 3. Sprint 1 Objectives

The primary goal of Sprint 1 was to establish the team workflow, define the project scope, and set up the technical development environment.

**Completed Objectives:**
*   [x] Formed team "Balen" and assigned initial roles.
*   [x] Selected project theme: Anti-food-waste sharing platform.
*   [x] Established GitHub repository with all members added.
*   [x] Set up GitHub Project board (Kanban) and Product Backlog.
*   [x] Created initial scaffolding (Node.js/Express app structure).
*   [x] Dockerized the application (Dockerfile & docker-compose created).
*   [x] Drafted Code of Conduct and Ethical Considerations.

---

## 4. Code of Conduct

**Mission:**  
To work collaboratively, respectfully, and efficiently to deliver a high-quality software product.

**Core Principles:**
1.  **Respect:** We will treat everyone with respect. Discriminatory or harassing behavior is strictly prohibited.
2.  **Communication:** We will communicate openly and promptly via our dedicated group chat and during meetings. If a member cannot attend a meeting, they must notify the group at least 2 hours in advance.
3.  **Contribution:** Every member is expected to contribute code and effort equitably. Tasks will be assigned based on consensus and current workload.
4.  **Decision Making:** Decisions will be made democratically. In the event of a tie, we will consult the module tutor or vote again after further discussion.
5.  **Code Quality:** We will adhere to agreed-upon coding standards (e.g., clear variable naming, commenting). All code must be reviewed (Pull Request) by at least one other member before merging to the `main` branch.
6.  **Conflict Resolution:** Disputes will be handled first by internal discussion. If unresolved, we will seek mediation from the module teaching staff.

**Breach of Conduct:**  
Serious or repeated breaches (e.g., ghosting the team for >1 week, refusal to contribute) will be documented and reported to the module leader as per the assessment guidelines for potential dismissal.

---

## 5. Personas

### Persona 1: The Budget-Conscious Student (Receiver)
**Name:** Alex Chen  
**Role:** 2nd Year Undergraduate Student  
**Age:** 20  
**Bio:** Alex lives in student halls and relies on a strict weekly budget. He often struggles to afford fresh produce towards the end of the month. He cares about the environment but prioritizes cost.  
**Goals:**  
*   Find free food ingredients nearby to cook dinner.
*   Save money on groceries.
*   Avoid complicated sign-up processes.
**Frustrations:**  
*   Food banks are too far away or have stigma attached.  
*   Supermarket "reduced" sections are often empty by the time he gets there.  

### Persona 2: The Eco-Friendly Staff Member (Giver)
**Name:** Sarah Jenkins  
**Role:** University Administrator  
**Age:** 34  
**Bio:** Sarah is a passionate environmentalist who hates throwing things away. She has a vegetable garden that produces more zucchini and tomatoes than she can eat. She wants to give them to students rather than composting them.  
**Goals:**  
*   Easily list surplus garden produce for others to take.
*   Ensure the food goes to someone from the university community (safety/trust).
*   Arrange pickups that don't disrupt her work day.
** Frustrations:**  
*   Feeling guilty when throwing away perfectly good vegetables.  
*   Social media groups are too disorganized for giving away items efficiently.

---

## 6. Ethical Issues & Mitigations

| Ethical Concern | Risk Level | Mitigation Strategy |
| :--- | :--- | :--- |
| **Food Safety:** Creating a platform for sharing food carries a risk of users sharing expired, spoiled, or unsafe food, potentially causing illness. | High | **1.** Clear "Terms of Service" disclaimer that users share at own risk.<br>**2.** Mandatory fields for "Expiry Date" and "Opened/Unopened" status.<br>**3.** Prohibit high-risk items (e.g., raw meat, unpasteurized dairy) in the posting guidelines.<br>**4.** Reporting system for "bad" items. |
| **User Privacy:** Sharing location for pickup could expose users' home addresses to strangers. | Medium | **1.** Advise users to meet in public campus locations (e.g., Library Foyer, Student Union).<br>**2.** Only show approximate location on map, not exact address.<br>**3.** Data minimization: Only collect necessary contact info. |
| **Digital Exclusion:** Students with older devices or poor internet might be excluded. | Low | **1.** Build a lightweight, responsive web app that works on low-end smartphones. <br>**2.** Ensure accessibility standards (WCAG) are met for screen readers. |
| **Inclusivity:** Dietary requirements (Halal, Vegan, Gluten-free) must be respected. | Low | **1.** Include mandatory "Tags" for allergens and dietary categories so users can filter safe foods easily. |

---

## 7. Initial Project Backlog (High Level)

*   **P1 (High Priority - Sprint 2/3):**
    *   Setup Database Schema (Users, Items).
    *   User Registration / Login (JWT Auth).
    *   Create "Add Item" Form (CRUD - Create).
    *   Create "View All Items" Feed (CRUD - Read).
*   **P2 (Medium Priority):**
    *   Item Detail Page.
    *   Search and Filter functionality.
    *   User Profile Page (My Listings).
*   **P3 (Low Priority - Sprint 4/Future):**
    *   In-app messaging system.
    *   Map view of items.
    *   "Karma points" system for frequent givers.

---

## 8. Meeting Records

| Date | Attendees | Duration | Agenda / Key Outcomes |
| :--- | :--- | :--- | :--- |
| **05/02/2026** | All (Bitu, Khagaraj, Neha, Girendra) | 1 hour | **Kick-off Meeting.**<br>- Discussed project ideas.<br>- Voted and selected "Community Food Share".<br>- Assigned roles: Bitu (DevOps), Neha (Design).<br>- Agreed on weekly meeting time (Wednesdays 2pm). |
| **07/02/2026** | All | 45 mins | **Sprint 1 Planning.**<br>- Created GitHub Repo.<br>- Drafted Code of Conduct jointly.<br>- Defined Personas (Alex & Sarah).<br>- Checked everyone can install Docker. |
| **09/02/2026** | All | 30 mins | **Sprint 1 Review Prep.**<br>- Finalized PDF submission document.<br>- Verified scaffolding code runs on everyone's machine.<br>- Submission ready. |

---

## 9. Evidence Checklist

### GitHub Repository
*   **Repo URL:** [Link to your GitHub Repo]
*   **Status:** Public/Private (shared with lecturers)
*   **Branches:** `main`, `dev`

### Screenshots

*(Placeholders - Please insert screenshots from your actual environment here)*

**Figure 1: GitHub Project Board (Kanban)**
> *[Insert Screenshot of GitHub Projects board showing columns: Todo, In Progress, Done]*

**Figure 2: Git Commit History**
> *[Insert Screenshot of Insights > Contributors or Commits list showing contributions from Bitu, Khagaraj, Neha, and Girendra]*

**Figure 3: Docker Containers Running**
> *[Insert Screenshot of terminal running `docker ps` showing the node-app and mysql containers active]*

---

**End of Submission**
