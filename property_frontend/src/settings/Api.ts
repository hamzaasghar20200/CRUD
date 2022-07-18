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
  createUser: `${process.env.baseURL}v1.php/cloud/users`,
  getRooms: `${process.env.baseURL}v2.php/apps/spreed/api/v4/room`,
  sendMessages: `${process.env.baseURL}v2.php/apps/spreed/api/v1/chat/7yspxrwg`,
  getMessages: `${process.env.baseURL}v2.php/apps/spreed/api/v1/chat/`,
  fileUpload: `https://876wfo0sjl.execute-api.me-south-1.amazonaws.com/remote.php/dav/files/`,
  sendFile: `${process.env.baseURL}v2.php/apps/files_sharing/api/v1/shares`,

  authLogin: `${process.env.authBaseUrl}/auth/login`,
  authSignup: `${process.env.authBaseUrl}/auth/register`,
  authForgetPassword: `${process.env.authBaseUrl}/auth/forgot-password`,


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
