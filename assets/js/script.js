// Simple navigation function using onclick
function showPage(pageId) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page-container');
    allPages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation active state
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the correct nav link
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = ['home', 'education', 'experience', 'projects', 'publications', 'certifications', 'skills', 'contact'];
    const pageIndex = pages.indexOf(pageId);
    if (pageIndex !== -1 && navLinks[pageIndex]) {
        navLinks[pageIndex].classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact form handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:thiruvenkatesh4@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not specified'}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open now.');
}
