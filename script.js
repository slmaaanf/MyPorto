const Data_Portfolio = [
    {
        category: "Project Management",
        title: "Web Article Management System",
        institution: "Laravel Project",
        date: "Project Manager",
        description: "Led a 13-member cross-functional team (UI/UX, Database, Programmers) using Kanban via Monday.com. Conducted SRS, WBS, and achieved an ISO 9126 software quality score of 4.25/5.00.",
        image: "img-article.jpg", // Masukkan nama file foto dokumentasimu di sini
        projectLink: "https://github.com/slmaaanf", // Isi dengan link repo/web hasil
        certLink: "" // Kosongkan jika tidak ada sertifikat khusus
    },
    {
        category: "Deep Learning",
        title: "Indonesian Visual Speech Recognition Web App",
        institution: "Undergraduate Research",
        date: "2025 - 2026",
        description: "Developed an end-to-end lip-reading VSR system combining ResNet50V2 and Bidirectional GRU in PyTorch. Trained on ~14,000 video samples, achieving 95.49% accuracy with an 11.18% Word Error Rate.",
        image: "img-vsr.jpg", 
        projectLink: "https://github.com/slmaaanf",
        certLink: ""
    },
    {
        category: "Professional Experience",
        title: "Dashboard Development Intern",
        institution: "PT. Telekomunikasi Indonesia",
        date: "May 2025 - July 2025",
        description: "Built an internal internship dashboard using Laravel that reduced manual registration workloads by 40% and streamlined document handling for 60+ interns via Google Drive API integration.",
        image: "img-telkom.jpg",
        projectLink: "",
        certLink: "https://linkedin.com/in/salma-nurfauziah/" 
    },
    {
        category: "Teaching & Leadership",
        title: "Machine Learning & Deep Learning TA",
        institution: "Universitas Muhammadiyah Sukabumi",
        date: "2024 - 2026",
        description: "Assisted in teaching and mentoring 30+ students per class. Delivered practical coding sessions covering supervised learning, neural networks, CNN, RNN, and model evaluation pipeline in Python.",
        image: "img-ta.jpg",
        projectLink: "",
        certLink: ""
    },
    {
        category: "Innovation & Strategy",
        title: "Smart Farming (SwaiDrone) Concept",
        institution: "Samsung Solve for Tomorrow",
        date: "2025",
        description: "Selected in the initial stage. Designed an AI-based precision irrigation concept for small-scale farmers, conducting user interviews and establishing predictive modeling plans.",
        image: "img-samsung.jpg",
        projectLink: "",
        certLink: ""
    },
    {
        category: "Cloud Computing",
        title: "#JuaraGCP Season 11 Graduate",
        institution: "Google Cloud Skills Boost",
        date: "Jan - Mar 2025",
        description: "Completed hands-on AI/ML architecture labs using Google Cloud, including Vertex AI, Document AI, ML APIs, and explored generative AI integrations with Gemini & Imagen.",
        image: "img-gcp.jpg",
        projectLink: "",
        certLink: "https://www.cloudskillsboost.google/"
    }
];

// ==========================================
// RENDER ENGINE LOGIC
// ==========================================
const gridContainer = document.getElementById('portfolio-grid');

function renderPortfolio() {
    gridContainer.innerHTML = Data_Portfolio.map(item => {
        // Cek jika ada link, jika tidak ada jangan tampilkan tombolnya
        const viewProjectBtn = item.projectLink ? `<a href="${item.projectLink}" target="_blank" class="link-btn">🔗 View Live/Code</a>` : '';
        const viewCertBtn = item.certLink ? `<a href="${item.certLink}" target="_blank" class="link-btn">📜 Certificate</a>` : '';
        
        // Gunakan gambar default jika field image kosong
        const imageSrc = item.image ? item.image : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500";

        return `
            <div class="portfolio-card">
                <img src="${imageSrc}" alt="${item.title}" class="card-doc-img">
                <div class="card-body">
                    <span class="card-tag">${item.category}</span>
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-meta">${item.institution} • ${item.date}</div>
                    <p class="card-desc">${item.description}</p>
                    <div class="card-links">
                        ${viewProjectBtn}
                        ${viewCertBtn}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Run deployment function
renderPortfolio();
