const rhizoApiConfig = {
  baseUrl: "https://api.rhizo.us",
  login: "/auth/",
  signUp: "/register/",
  changePassword: "/set-new-password/",

  forgotPassword: "/rest-auth/password/reset/",

  searchInstitution: "/institutions/",
  searchMajor: "/major/",
  searchCourse: "/courses/",
  searchTag: "/tags/",
  searchMentor: "/search/api/v1/tutors/",

  updateUser: "/onboard-user/",
  updateUserProfile: "/profile-update/",
  unsetProfilePicture: "/unset-profile-picture/",
  becomeMentor: "/become-mentor/",
  becomeStudent: "/become-student/",
  updateStudent: "/onboard-student/",
  updateMentor: "/onboard-mentor/",

  getProfile: "/whoami",
  getMentorCourses: "/mentor-course/",
  saveMentorCourses: "/verification-requests/",

  genderPronounsList: "/gender-pronouns/",
  educationLevelList: "/education-levels/",
  getTutor: "/mentor-profile/768c47f8-d7df-4a1c-9472-c243e334299c",
  getReviews: "/mentor-reviews/768c47f8-d7df-4a1c-9472-c243e334299c/",
  getMentorLocation: "/mentor-location/",
  stripeAuthorize: "/authorize/stripe-account",
  // getSession: '/sessions/',

  activateAccount: "/activate/",
  initializeMentorEmailVerification: "/onboard-email-verification/",
  validateMentorEmailVerification: "/onboard-verify-email/",

  setupPaymentIntent: "/payment-method/setup_payment_intent/",
  paymentMethod: "/payment-method/",

  payouts: "/payout-transaction/",
  payoutReceipts: "/payout-receipt/",
  studentBilling: "/invoice/",
  getSociety: "http://localhost:5000/api/society",
};

// const rhizoMockApiConfig = {
//     baseUrl: 'http://127.0.0.1:4000',
//     login: '/api/auth/login',
//     signUp: '/api/auth/sign-up',
//     forgotPassword: '/rest-auth/password/reset/',

//     searchMajor: '/search/api/v1/majors/',
//     searchInstitution: '/search/api/v1/institutes/',
//     searchTag: '/search/api/v1/tags/',
//     searchMentor: '/search/api/v1/tutors/',
//     searchCourse: '/search/api/v1/course-search/',

//     updateUser: '/rest-auth/user/',
//     updateStudent: '/student/api/v1/student-profile-details/',
//     updateMentor: '/tutor/api/v1/tutor-profile-details/',
// };

// export const Api = rhizoMockApiConfig;
export const Api = rhizoApiConfig;
