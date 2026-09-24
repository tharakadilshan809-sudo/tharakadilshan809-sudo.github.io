// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Skills Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const skillItems = document.querySelectorAll('.skill-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('bg-neonGreen/10', 'text-neonGreen', 'border-neonGreen');
            b.classList.add('border-slate-700');
        });

        // Add active class to clicked button
        btn.classList.add('bg-neonGreen/10', 'text-neonGreen', 'border-neonGreen');
        btn.classList.remove('border-slate-700');

        const filterValue = btn.getAttribute('data-filter');

        // Filter items
        skillItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
            } else {
                if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Form Submission (Prevent Default for Demo)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        // Simulate sending
        btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
        btn.classList.add('bg-emerald-600', 'text-white');
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check mr-2"></i> Sent Successfully!';
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-emerald-600', 'text-white');
            }, 3000);
        }, 1500);
    });
}