import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4601f658-e994-4c5e-8ce3-24e3b849af41',
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`);
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`, {});
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instanse.put(`profile`, profile);
    },
    

};

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instanse.delete(`auth/login`);
    },
};

export const securityAPI = {
    getCaptchaUrl() {
        return instanse.get(`security/get-captcha-url`);
    }
};


