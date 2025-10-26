// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Form Handling - Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};

        formData.forEach((value, key) => {
            if (key === 'support-type') {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        // Create email body
        const emailBody = createEmailBody(data, 'contact');
        const subject = encodeURIComponent('New Contact Form Submission - MDR Bridge');
        const body = encodeURIComponent(emailBody);

        // Open default email client
        window.location.href = `mailto:mdrbridgeteam@gmail.com?subject=${subject}&body=${body}`;

        // Show success message
        showSuccessMessage(contactForm, 'Thank you for your inquiry! Your default email client has been opened. Please send the email to complete your submission.');

        // Reset form
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
}

// ========================================
// Form Handling - Careers Form
// ========================================
const careersForm = document.getElementById('careersForm');

if (careersForm) {
    careersForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(careersForm);
        const data = {};

        formData.forEach((value, key) => {
            if (key === 'work-type') {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        // Create email body
        const emailBody = createEmailBody(data, 'careers');
        const subject = encodeURIComponent('New Consultant Profile Submission - MDR Bridge');
        const body = encodeURIComponent(emailBody);

        // Open default email client
        window.location.href = `mailto:mdrbridgeteam@gmail.com?subject=${subject}&body=${body}`;

        // Show success message
        showSuccessMessage(careersForm, 'Thank you for your interest! Your default email client has been opened. Please send the email to complete your profile submission.');

        // Reset form
        setTimeout(() => {
            careersForm.reset();
        }, 1000);
    });
}

// ========================================
// Helper Functions
// ========================================

// Create email body from form data
function createEmailBody(data, formType) {
    let body = '';

    if (formType === 'contact') {
        body = `
NEW CONTACT FORM SUBMISSION
===========================

Name: ${data.name || 'Not provided'}
Company: ${data.company || 'Not provided'}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}

Company Stage: ${data.stage || 'Not provided'}

Type of Support Needed:
${data['support-type'] ? data['support-type'].join(', ') : 'Not provided'}

Message:
${data.message || 'Not provided'}

Preferred Contact Method: ${data['contact-method'] || 'Not provided'}

---
Submitted from MDR Bridge website
        `;
    } else if (formType === 'careers') {
        body = `
NEW CONSULTANT PROFILE SUBMISSION
=================================

Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
LinkedIn: ${data.linkedin || 'Not provided'}

Primary Expertise: ${data.expertise || 'Not provided'}
Years of Experience: ${data.experience || 'Not provided'}

Preferred Work Type:
${data['work-type'] ? data['work-type'].join(', ') : 'Not provided'}

Experience Summary:
${data.summary || 'Not provided'}

---
Submitted from MDR Bridge website
        `;
    }

    return body.trim();
}

// Show success message
function showSuccessMessage(form, message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background-color: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-weight: 500;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            animation: slideIn 0.3s ease;
        ">
            ✓ ${message}
        </div>
    `;

    // Insert after form
    form.insertAdjacentElement('afterend', successDiv);

    // Remove after 8 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 8000);
}

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.about-card, .offering-item, .service-card, .partner-service, .benefit-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// Add CSS animation keyframes dynamically
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Form Validation Enhancement
// ========================================
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#e2e8f0';
        }
    });

    return isValid;
}

// Add real-time validation
const allInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
allInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#10b981';
        }
    });

    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.style.borderColor = '#e2e8f0';
        }
    });
});

// ========================================
// Back to Top Button (Optional Enhancement)
// ========================================
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #000d3d, #00aab7);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'scale(1)';
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c MDR Bridge - Medical Device Consulting ', 'background: #2563eb; color: white; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%c Website built with modern web technologies ', 'color: #06b6d4; font-size: 12px;');
