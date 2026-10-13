/**
 * PR HEALTHCARE - JAVASCRIPT CONTROLLER
 * Clean, Modular, Accessible Web Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // DOCTOR DATA STORE (SAMPLE PROFILES)
  // --------------------------------------------------------------------------
  const doctorsData = {
    1: {
      name: 'Dr. Arun Kumar',
      role: 'Consultant Physician',
      dept: 'General Medicine',
      experience: '10+ Years Experience',
      image: 'assets/images/doctor-1.jpg',
      degrees: 'MBBS, MD (General Medicine), FACP',
      schedule: 'Monday &ndash; Saturday (09:00 AM &ndash; 01:00 PM)',
      languages: 'English, Hindi',
      bio: 'Dr. Arun Kumar has over a decade of clinical experience in internal medicine, comprehensive chronic ailment management, metabolic health, and acute adult care.',
      specialties: ['Preventative Healthcare', 'Hypertension & Diabetes', 'Infectious Diseases', 'Geriatric Medicine']
    },
    2: {
      name: 'Dr. Priya Sharma',
      role: 'Consultant Cardiologist',
      dept: 'Cardiology',
      experience: '8+ Years Experience',
      image: 'assets/images/doctor-2.jpg',
      degrees: 'MBBS, MD, DM (Cardiology)',
      schedule: 'Monday &ndash; Friday (10:00 AM &ndash; 03:00 PM)',
      languages: 'English, Hindi',
      bio: 'Dr. Priya Sharma is a certified cardiologist specializing in non-invasive cardiac evaluation, preventive cardiology, echocardiography, and vascular disease prevention.',
      specialties: ['Cardiac Health Risk Assessment', 'Echocardiography & ECG', 'Lipid Management', 'Heart Failure Care']
    },
    3: {
      name: 'Dr. Rajesh Nair',
      role: 'Senior Orthopedic Surgeon',
      dept: 'Orthopedics',
      experience: '12+ Years Experience',
      image: 'assets/images/doctor-3.jpg',
      degrees: 'MBBS, MS (Orthopedics), MCh (Ortho)',
      schedule: 'Tuesday &ndash; Saturday (11:00 AM &ndash; 04:00 PM)',
      languages: 'English, Hindi',
      bio: 'Dr. Rajesh Nair brings twelve years of expertise in joint restoration, trauma management, arthritis therapies, and spine health rehabilitation.',
      specialties: ['Joint & Knee Pain Management', 'Fracture Care & Trauma', 'Sports Injury Rehabilitation', 'Spine Health']
    },
    4: {
      name: 'Dr. Ananya Sen',
      role: 'Consultant Pediatrician',
      dept: 'Pediatrics',
      experience: '9+ Years Experience',
      image: 'assets/images/doctor-4.jpg',
      degrees: 'MBBS, DCH, DNB (Pediatrics)',
      schedule: 'Monday &ndash; Friday (09:30 AM &ndash; 02:00 PM)',
      languages: 'English, Hindi',
      bio: 'Dr. Ananya Sen specializes in childhood wellness, pediatric immunization, newborn assessments, nutritional guidance, and pediatric developmental health.',
      specialties: ['Newborn Care & Neonatology', 'Vaccination & Immunization', 'Pediatric Nutrition', 'Growth & Development']
    },
    5: {
      name: 'Dr. Meera Reddy',
      role: 'Senior Gynecologist & Obstetrician',
      dept: 'Gynecology',
      experience: '11+ Years Experience',
      image: 'assets/images/doctor-5.jpg',
      degrees: 'MBBS, MS (OBG), FMAS',
      schedule: 'Monday &ndash; Saturday (10:00 AM &ndash; 02:30 PM)',
      languages: 'English, Hindi',
      bio: 'Dr. Meera Reddy offers compassionate clinical care in women’s wellness, high-risk pregnancy monitoring, prenatal care, and reproductive health.',
      specialties: ['Prenatal & Antenatal Care', 'Maternal Health', 'Reproductive Endocrinology', 'Minimally Invasive Gynecology']
    },
    6: {
      name: 'Dr. Vikram Malhotra',
      role: 'Consultant Dermatologist',
      dept: 'Dermatology',
      experience: '7+ Years Experience',
      image: 'assets/images/doctor-6.jpg',
      degrees: 'MBBS, MD (Dermatology, Venereology & Leprosy)',
      schedule: 'Wednesday &ndash; Sunday (11:00 AM &ndash; 04:00 PM)',
      languages: 'English, Hindi',
      bio: 'Dr. Vikram Malhotra provides evidence-based medical skincare, clinical allergy management, acne protocols, and advanced dermatological consultations.',
      specialties: ['Clinical Dermatology', 'Allergy & Eczema Care', 'Hair & Scalp Treatments', 'Aesthetic Skincare']
    }
  };

  // --------------------------------------------------------------------------
  // DEPARTMENT DATA STORE
  // --------------------------------------------------------------------------
  const deptData = {
    'General Medicine': {
      title: 'General Medicine',
      lead: 'Comprehensive primary adult care and chronic disease management.',
      overview: 'Our General Medicine department is staffed with experienced internists providing preventive checkups, fever evaluations, diabetes monitoring, hypertension control, and holistic inpatient and outpatient care.',
      services: ['Routine Health Screenings', 'Chronic Disease Management', 'Infectious Disease Triage', 'Lifestyle & Nutrition Guidance'],
      timings: 'Monday - Saturday: 8:00 AM - 8:00 PM'
    },
    'Cardiology': {
      title: 'Cardiology',
      lead: 'Advanced preventive and diagnostic cardiovascular health services.',
      overview: 'Equipped with digital ECG, 2D Echocardiography, and stress testing, our Cardiology unit provides comprehensive preventive heart evaluations and post-cardiac rehabilitation guidance.',
      services: ['12-Lead Digital ECG', '2D Echocardiography', 'Hypertension & Cholesterol Clinics', 'Preventive Heart Screening'],
      timings: 'Monday - Friday: 9:00 AM - 5:00 PM'
    },
    'Orthopedics': {
      title: 'Orthopedics & Joint Care',
      lead: 'Specialized bone, joint, ligament, and spine treatments.',
      overview: 'Our orthopedic specialists treat musculoskeletal conditions including joint degeneration, sports trauma, osteoporosis, and complex bone fractures with modern physiotherapy support.',
      services: ['Trauma & Fracture Stabilization', 'Arthritis & Joint Injections', 'Sports Medicine & Rehab', 'Spinal Health Consultation'],
      timings: 'Tuesday - Saturday: 10:00 AM - 4:00 PM'
    },
    'Pediatrics': {
      title: 'Pediatrics & Child Wellness',
      lead: 'Compassionate, gentle healthcare for infants, children, and teens.',
      overview: 'We focus on child-friendly medical care including newborn follow-ups, standard WHO immunization regimens, adolescent wellness, and acute childhood illnesses.',
      services: ['Childhood Immunization', 'Growth & Developmental Monitoring', 'Pediatric Infections', 'Nutrition Consultations'],
      timings: 'Monday - Saturday: 9:00 AM - 3:00 PM'
    },
    'Gynecology': {
      title: 'Gynecology & Obstetrics',
      lead: 'Dedicated healthcare for women through every stage of life.',
      overview: 'From adolescent health to prenatal monitoring and maternal care, our team provides personalized consultations in a supportive and confidential clinical setting.',
      services: ['Prenatal & Antenatal Checkups', 'Ultrasound Screening', 'Menstrual & Hormonal Care', 'Postnatal Wellness Support'],
      timings: 'Monday - Saturday: 9:30 AM - 4:30 PM'
    },
    'Dermatology': {
      title: 'Dermatology & Skin Health',
      lead: 'Scientific clinical solutions for skin, hair, and nail health.',
      overview: 'Our dermatology department offers diagnostic care for acute and chronic skin disorders, eczema, psoriasis, acne management, and general dermatological wellness.',
      services: ['Skin Allergy Diagnostics', 'Acne & Pigmentation Care', 'Scalp & Hair Disorder Therapies', 'Preventative Skincare'],
      timings: 'Wednesday - Sunday: 10:00 AM - 4:00 PM'
    },
    'ENT': {
      title: 'Ear, Nose & Throat (ENT)',
      lead: 'Specialized diagnosis and treatment for sensory disorders and airway health.',
      overview: 'Our ENT specialists treat sinus issues, hearing loss, vertigo, chronic throat infections, and allergy-related nasal obstructions with modern endoscopy equipment.',
      services: ['Diagnostic Nasal Endoscopy', 'Audiometry & Hearing Checks', 'Sinusitis & Allergy Management', 'Tonsil & Adenoid Consults'],
      timings: 'Monday - Friday: 10:00 AM - 4:00 PM'
    },
    'Emergency Care': {
      title: '24/7 Emergency & Trauma Care',
      lead: 'Around-the-clock emergency medical response and critical triage.',
      overview: 'Our emergency department is operational 24 hours a day, 365 days a year, prepared with rapid response life support equipment, trauma doctors, and ICU access.',
      services: ['24/7 Resuscitation Bay', 'Acute Cardiac Care Stabilization', 'Trauma & Wound Management', 'Rapid Diagnostic Access'],
      timings: '24 Hours / 7 Days a Week'
    }
  };

  // --------------------------------------------------------------------------
  // NAVBAR & SCROLL BEHAVIOR
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main > section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky Navbar shadow
    if (scrollPos > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scrollspy active link
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileNav() {
    mobileNavDrawer.classList.add('open');
    mobileNavOverlay.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNavDrawer.classList.remove('open');
    mobileNavOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // --------------------------------------------------------------------------
  // FADE-IN ANIMATION (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  const fadeElements = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    fadeElements.forEach(el => el.classList.add('appear'));
  }

  // --------------------------------------------------------------------------
  // MODAL CONTROLLERS & ESCAPE KEY HANDLER
  // --------------------------------------------------------------------------
  const allModals = document.querySelectorAll('.modal-backdrop');

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    // If no other modal is open, restore scroll
    const anyOpen = Array.from(allModals).some(m => m.classList.contains('open'));
    if (!anyOpen) {
      document.body.style.overflow = '';
    }
  }

  // Close buttons and overlay clicks
  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('[data-close-modal]')) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allModals.forEach(modal => {
        if (modal.classList.contains('open')) {
          closeModal(modal);
        }
      });
      closeMobileNav();
    }
  });

  // --------------------------------------------------------------------------
  // DOCTOR QUICK-VIEW MODAL & APPOINTMENT PRE-FILL
  // --------------------------------------------------------------------------
  const doctorProfileModal = document.getElementById('doctorProfileModal');
  const doctorModalBody = document.getElementById('doctorModalBody');
  const viewProfileBtns = document.querySelectorAll('.view-profile-btn');
  const bookDocBtns = document.querySelectorAll('.book-doc-btn');
  const patientDeptSelect = document.getElementById('patientDept');
  const patientMessageInput = document.getElementById('patientMessage');

  viewProfileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const docId = btn.getAttribute('data-doc');
      const doc = doctorsData[docId];
      if (!doc) return;

      doctorModalBody.innerHTML = `
        <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;">
          <img src="${doc.image}" alt="${doc.name}" style="width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 4px solid var(--primary-light); box-shadow: var(--shadow-sm);">
          <div>
            <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--primary-deep); margin-bottom: 4px;">${doc.name}</h3>
            <div style="color: var(--primary); font-weight: 700; font-size: 1rem; margin-bottom: 6px;">${doc.role} &bull; ${doc.dept}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${doc.degrees}</div>
            <div style="display: inline-block; background: var(--bg-alt); padding: 3px 10px; border-radius: var(--radius-full); font-size: 0.775rem; font-weight: 700; margin-top: 6px; color: var(--primary-dark);">
              ${doc.experience}
            </div>
          </div>
        </div>

        <div style="background: var(--bg-alt); padding: 18px; border-radius: var(--radius-md); margin-bottom: 20px;">
          <div style="font-weight: 700; color: var(--primary-deep); font-size: 0.925rem; margin-bottom: 6px;">Clinical Profile</div>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px;">${doc.bio}</p>
          
          <div style="font-weight: 700; color: var(--primary-deep); font-size: 0.85rem; margin-bottom: 6px;">Specialties & Clinical Focus:</div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${doc.specialties.map(s => `<span style="background: #ffffff; border: 1px solid var(--border-light); font-size: 0.8rem; padding: 4px 10px; border-radius: var(--radius-full); color: var(--text-main);">${s}</span>`).join('')}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; font-size: 0.875rem;">
          <div style="background: var(--primary-subtle); padding: 14px; border-radius: var(--radius-sm); border: 1px solid #bae6fd;">
            <strong style="color: var(--primary-deep); display: block; margin-bottom: 4px;">OPD Schedule:</strong>
            <span style="color: var(--text-muted);">${doc.schedule}</span>
          </div>
          <div style="background: var(--primary-subtle); padding: 14px; border-radius: var(--radius-sm); border: 1px solid #bae6fd;">
            <strong style="color: var(--primary-deep); display: block; margin-bottom: 4px;">Languages Spoken:</strong>
            <span style="color: var(--text-muted);">${doc.languages}</span>
          </div>
        </div>

        <div style="background: #fef3c7; border: 1px solid #fde68a; border-radius: var(--radius-sm); padding: 10px 14px; font-size: 0.8rem; color: #92400e; margin-bottom: 24px;">
          * Note: This doctor profile is sample content for demonstration and layout evaluation.
        </div>

        <div style="display: flex; gap: 12px;">
          <button type="button" class="btn btn-primary" id="modalBookDocBtn" style="flex: 1;">
            Book Appointment with ${doc.name}
          </button>
          <a href="https://wa.me/9183678398090" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1;">
            WhatsApp Inquiries
          </a>
        </div>
      `;

      openModal(doctorProfileModal);

      // Book from modal button
      const modalBookDocBtn = document.getElementById('modalBookDocBtn');
      if (modalBookDocBtn) {
        modalBookDocBtn.addEventListener('click', () => {
          closeModal(doctorProfileModal);
          selectDoctorForAppointment(doc.name, doc.dept);
        });
      }
    });
  });

  // Doctor card "Book Appointment" button
  bookDocBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const docName = btn.getAttribute('data-name');
      const deptName = btn.getAttribute('data-dept');
      selectDoctorForAppointment(docName, deptName);
    });
  });

  function selectDoctorForAppointment(doctorName, departmentName) {
    if (patientDeptSelect) {
      patientDeptSelect.value = departmentName;
    }
    if (patientMessageInput) {
      patientMessageInput.value = `Requesting appointment specifically with ${doctorName} (${departmentName}).`;
    }

    const appointmentSec = document.getElementById('appointment');
    if (appointmentSec) {
      appointmentSec.scrollIntoView({ behavior: 'smooth' });
    }

    // Highlight form input
    const patientNameInput = document.getElementById('patientName');
    if (patientNameInput) {
      setTimeout(() => patientNameInput.focus(), 600);
    }
    showToast(`Selected ${doctorName}. Please fill your preferred date & time.`, 'info');
  }

  // --------------------------------------------------------------------------
  // DEPARTMENT DETAIL MODAL
  // --------------------------------------------------------------------------
  const deptDetailModal = document.getElementById('deptDetailModal');
  const deptModalBody = document.getElementById('deptModalBody');
  const deptCards = document.querySelectorAll('.dept-card');

  deptCards.forEach(card => {
    const btn = card.querySelector('.dept-btn');
    const deptKey = card.getAttribute('data-dept');

    const handleDeptClick = () => {
      const dept = deptData[deptKey];
      if (!dept) return;

      deptModalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
          <span class="section-badge">${dept.title}</span>
          <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--primary-deep); margin: 8px 0 10px 0;">${dept.title}</h3>
          <p style="font-size: 1.05rem; color: var(--primary-dark); font-weight: 600; line-height: 1.5; margin-bottom: 16px;">${dept.lead}</p>
          <p style="font-size: 0.925rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 24px;">${dept.overview}</p>
        </div>

        <div style="background: var(--bg-alt); padding: 20px; border-radius: var(--radius-md); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--primary-deep); margin-bottom: 12px;">Core Clinical Offerings:</h4>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.875rem; color: var(--text-main);">
            ${dept.services.map(s => `
              <li style="display: flex; align-items: center; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--secondary);"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${s}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="background: var(--primary-subtle); border: 1px solid #bae6fd; padding: 14px 18px; border-radius: var(--radius-sm); margin-bottom: 24px; font-size: 0.875rem;">
          <strong style="color: var(--primary-deep);">Consultation Hours:</strong>
          <div style="color: var(--text-muted); margin-top: 2px;">${dept.timings}</div>
        </div>

        <div style="display: flex; gap: 12px;">
          <button type="button" class="btn btn-primary" id="modalBookDeptBtn" style="flex: 1;">
            Book Consultation in ${dept.title}
          </button>
          <a href="https://wa.me/9183678398090" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1;">
            WhatsApp Desk
          </a>
        </div>
      `;

      openModal(deptDetailModal);

      const modalBookDeptBtn = document.getElementById('modalBookDeptBtn');
      if (modalBookDeptBtn) {
        modalBookDeptBtn.addEventListener('click', () => {
          closeModal(deptDetailModal);
          if (patientDeptSelect) {
            patientDeptSelect.value = deptKey;
          }
          const appointmentSec = document.getElementById('appointment');
          if (appointmentSec) {
            appointmentSec.scrollIntoView({ behavior: 'smooth' });
          }
          showToast(`Department selected: ${deptKey}`, 'info');
        });
      }
    };

    if (btn) btn.addEventListener('click', handleDeptClick);
  });

  // --------------------------------------------------------------------------
  // EMERGENCY CALL MODAL
  // --------------------------------------------------------------------------
  const emergencyCallBtn = document.getElementById('emergencyCallBtn');
  const emergencyCallModal = document.getElementById('emergencyCallModal');

  if (emergencyCallBtn && emergencyCallModal) {
    emergencyCallBtn.addEventListener('click', () => {
      openModal(emergencyCallModal);
    });
  }

  // --------------------------------------------------------------------------
  // APPOINTMENT BOOKING FORM VALIDATION & SUBMISSION
  // --------------------------------------------------------------------------
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentSuccessModal = document.getElementById('appointmentSuccessModal');
  const appointmentSummaryContent = document.getElementById('appointmentSummaryContent');
  const patientDateInput = document.getElementById('patientDate');

  // Set min date to today
  if (patientDateInput) {
    const today = new Date().toISOString().split('T')[0];
    patientDateInput.setAttribute('min', today);
  }

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const email = document.getElementById('patientEmail').value.trim();
      const dept = document.getElementById('patientDept').value;
      const date = document.getElementById('patientDate').value;
      const time = document.getElementById('patientTime').value;
      const msg = document.getElementById('patientMessage').value.trim();

      // Basic validation
      if (!name || !phone || !email || !dept || !date || !time) {
        showToast('Please fill out all required fields to request your appointment.', 'error');
        return;
      }

      // Format date for readable display
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      // Populate appointment summary
      if (appointmentSummaryContent) {
        appointmentSummaryContent.innerHTML = `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div><strong style="color: var(--primary-deep);">Patient Name:</strong> ${escapeHtml(name)}</div>
            <div><strong style="color: var(--primary-deep);">Phone:</strong> ${escapeHtml(phone)}</div>
            <div><strong style="color: var(--primary-deep);">Email:</strong> ${escapeHtml(email)}</div>
            <div><strong style="color: var(--primary-deep);">Department:</strong> ${escapeHtml(dept)}</div>
            <div><strong style="color: var(--primary-deep);">Date:</strong> ${formattedDate}</div>
            <div><strong style="color: var(--primary-deep);">Time Slot:</strong> ${escapeHtml(time)}</div>
          </div>
          ${msg ? `<div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #e2e8f0;"><strong>Notes:</strong> ${escapeHtml(msg)}</div>` : ''}
        `;
      }

      // Open confirmation modal
      openModal(appointmentSuccessModal);

      // Reset form
      appointmentForm.reset();
      showToast('Appointment request recorded successfully!', 'success');
    });
  }

  // --------------------------------------------------------------------------
  // CONTACT FORM SUBMISSION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !subject || !message) {
        showToast('Please provide your name, email, subject, and message.', 'error');
        return;
      }

      contactForm.reset();
      showToast('Thank you! Your message has been sent. Our team will get back to you shortly.', 'success');
    });
  }

  // --------------------------------------------------------------------------
  // TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    } else {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      <div style="flex-shrink: 0;">${iconSvg}</div>
      <div style="font-size: 0.9rem; line-height: 1.4; color: var(--text-main); font-weight: 500;">${escapeHtml(message)}</div>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => toast.classList.add('show'), 20);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }

  // --------------------------------------------------------------------------
  // HELPER: HTML ESCAPE
  // --------------------------------------------------------------------------
  function escapeHtml(text) {
    if (!text) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.toString().replace(/[&<>"']/g, m => map[m]);
  }
});
