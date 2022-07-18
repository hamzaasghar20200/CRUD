export interface IBasicProfile {
    dateOfBirth: Date;
    educationLevel: string;
    genderPronoun: string;
    profileType: string;
    mobile: string;
    address: string;
    city: string;
    state: string;
    country: string;
    timezone?: string;
    selectedProfileType?: string;
}

export interface IOnboardingStage {
    onboardUser: boolean;
    onboardStudent: boolean;
    onboardMentor: boolean;
    onboardVerificationEmail: boolean;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    isActive: string;
    image: string;
    isEmailVerified: boolean;
    onboardingStage: IOnboardingStage;
    basicProfile: IBasicProfile;
}

export const extractOnboardingStage = (data) => {
    const dict: IOnboardingStage = {
        onboardUser: data.onboardUser,
        onboardStudent: data.onboardStudent,
        onboardMentor: data.onboardMentor,
        onboardVerificationEmail: data.onboardVerificationEmail,
    };

    return dict;
};

export const extractBasicProfile = (data, updateSelected) => {
    const dict: IBasicProfile = {
        timezone: data.timezone,
        city: data.city,
        state: data.state,
        country: data.country,
        profileType: data.profileType,
        dateOfBirth: data.dateOfBirth,
        address: data.address,
        genderPronoun: data.genderPronoun,
        educationLevel: data.educationLevel,
        mobile: data.mobile,
    };
    if (updateSelected === true) {
        dict.selectedProfileType = data.profileType;
    }

    return dict;
};

export const extractUser = (data, updateSelected) => {
    const user: IUser = {
        id: data.user.id,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        middleName: data.user.middleName,
        email: data.user.email,
        isActive: data.user.isActive,
        image: data.image,
        isEmailVerified: data.user.isEmailVerified,
        onboardingStage: extractOnboardingStage(data),
        basicProfile: extractBasicProfile(data, updateSelected),
    };

    console.log(user);

    return user;
};
