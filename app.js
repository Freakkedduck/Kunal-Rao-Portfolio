const portfolioData = {
    
    "projects": [
    {
      "title": "Customer Churn Prediction & Analytics Dashboard",
      "description": "Built predictive analytics model using Random Forest achieving 96% accuracy on 667 telecom customer records",
      "technologies": ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Random Forest"],
      "github": "https://github.com/Freakkedduck/Churn-Analysis",
      "demo": "https://freakkedduck-churn-analysis-churn-dashboard-9b0zt4.streamlit.app/",
      // "achievements": [
      //   "Identified 80 high-risk customers",
      //   "Discovered 47% churn rate for customers with 4+ service calls",
      //   "Created interactive BI dashboard for customer risk segmentation"
      // ],
      "category": "Data Analytics",
      "tech_icons": [
        "<i class='devicon-python-plain colored'></i>",
        "<i class='devicon-pandas-original colored'></i>",
        "<i class='devicon-numpy-original colored'></i>",
        "<i class='devicon-plotly-plain colored'></i>"
      ]
    },
    {
      "title": "Document Q&A Chatbot (Gari-1)",
      "description": "Engineered scalable document analysis system processing 75+ file uploads with semantic search and metadata extraction",
      "technologies": ["Python", "Streamlit", "FastAPI", "ChromaDB", "NLP"],
      "github": "https://github.com/Freakkedduck/Gari-1",
      // "achievements": [
      //   "90% accuracy using advanced text analytics",
      //   "Citation-backed query responses",
      //   "Semantic search and information retrieval"
      // ],
      "category": "AI/ML",
      "tech_icons": [
        "<i class='devicon-python-plain colored'></i>",
        "<i class='devicon-fastapi-plain colored'></i>",
        "<i class='devicon-streamlit-plain colored'></i>",
        "<i class='devicon-pytorch-original colored'></i>"
      ]
    },
    {
      "title": "Movie Recommendation Data Analysis",
      "description": "Analyzed 9,000 movies and 100,000+ user ratings using K-Nearest Neighbors algorithm for collaborative filtering",
      "technologies": ["Python", "Pandas", "Matplotlib", "KNN", "Scikit-learn"],
      "github": "https://github.com/Freakkedduck/Movie-Recommendation-Analysis",
      // "achievements": [
      //   "Comprehensive data preprocessing and statistical analysis",
      //   "Exploratory data analysis on user behavior patterns",
      //   "Implemented collaborative filtering recommendation system"
      // ],
      "category": "Data Analytics",
      "tech_icons": [
        "<i class='devicon-python-plain colored'></i>",
        "<i class='devicon-pandas-original colored'></i>",
        "<i class='devicon-matplotlib-plain colored'></i>",
        "<i class='devicon-scikitlearn-plain colored'></i>"
      ]
    },
    {
      "title": "Smart Inventory Manager",
      "description": "Intelligent inventory management system with predictive analytics and automated reordering",
      "technologies": ["Python", "Machine Learning"],
      "github": "https://github.com/Freakkedduck/Smart-Inventory-Manager",
      "demo": "https://freakkedduck-smart-inventory-manager-dashboard-ckyi6k.streamlit.app/",
      "category": "Full-Stack Development",
      "tech_icons": [
        "<i class='devicon-python-plain colored'></i>",
        "<i class='devicon-tensorflow-original colored'></i>"
      ]
    },
    {
      "title": "Mental Health Chatbot",
      "description": "Static web-based demo version for Mental Health Chatbot with NLP capabilities",
      "technologies": ["Python", "NLP", "Machine Learning", "Web Technologies"],
      "github": "https://github.com/Freakkedduck/Mental-Health-Chatbot",
      "category": "AI/ML",
      "tech_icons": [
        "<i class='devicon-python-plain colored'></i>",
        "<i class='devicon-nlp-plain'></i>",
        "<i class='devicon-tensorflow-original colored'></i>",
        "<i class='devicon-html5-plain colored'></i>"
      ]
    },
    {
      "title": "Portfolio Optimization using MPT",
      "description": "Modern Portfolio Theory implementation for optimal asset allocation and risk management",
      "technologies": ["Python", "NumPy", "Pandas", "Financial Modeling"],
      "github": "https://github.com/Freakkedduck/Portfolio-Optimization-using-MPT",
      "category": "Financial Analytics",
      "tech_icons": [
        "<i class='devicon-python-plain colored'></i>",
        "<i class='devicon-numpy-original colored'></i>",
        "<i class='devicon-pandas-original colored'></i>",
        "<i class='devicon-r-original colored'></i>"
      ]
    }
  ]
}
  
document.addEventListener("DOMContentLoaded", () => {


    const grid = document.getElementById("projectsGrid");
    const filterButtons = document.querySelectorAll(".filter-btn");
  
    // Function to render projects based on a filter
    function renderProjects(filter = "all") {
      grid.innerHTML = ""; // Clear current projects
  
      portfolioData.projects.forEach(project => {
        if (filter === "all" || project.category === filter) {
          const projectCard = document.createElement("div");
          projectCard.className = "project-card";
  
          projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-icons">${project.tech_icons.join(" ")}</div>
            <div class="project-links">
              ${project.github ? `<a href="${project.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>` : ""}
              ${project.demo ? `<a href="${project.demo}" target="_blank" title="Open Demo"><img src="media/open_link_new_tab.png" alt="Open Demo" style="width:20px; height:20px; vertical-align:middle;"></a>` : ""}
            </div>
          `;
  
          grid.appendChild(projectCard);
        }
      });
    }
  
    // Initial render: show all projects
    renderProjects();
  
    // Add click events to filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Remove 'active' from all buttons
        filterButtons.forEach(b => b.classList.remove("active"));
        // Add 'active' to clicked button
        btn.classList.add("active");
  
        const filter = btn.getAttribute("data-filter");
        renderProjects(filter);
      });
    });
  
    // Optional: any other buttons (like "Session request") interactivity
    const primaryButtons = document.querySelectorAll(".btn.primary");
    primaryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Session request sent!");
      });
    });
  
    // Hamburger menu toggle for mobile/tablet
    const navToggle = document.getElementById("navToggle");
    const navDropdown = document.getElementById("navDropdown");
    // Close dropdown on link click
    function closeDropdown() {
      navDropdown.classList.remove("open");
    }
    if (navToggle && navDropdown) {
      navToggle.addEventListener("click", () => {
        navDropdown.classList.toggle("open");
      });
      // Close dropdown when a nav item is clicked
      navDropdown.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", closeDropdown);
      });
      // Optional: close dropdown on outside click
      document.addEventListener("click", (e) => {
        if (
          navDropdown.classList.contains("open") &&
          !navDropdown.contains(e.target) &&
          e.target !== navToggle
        ) {
          closeDropdown();
        }
      });
    }
  
  });

