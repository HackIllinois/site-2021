const API = "https://api.hackillinois.org";
import { MethodType, FileType, RegistrationType } from "./types";

function request(method: MethodType, endpoint: string, body?: any) {
    const getToken = (): string => {
        const token = isAuthenticated();
        if (token === null) {
            throw new Error("token is null");
        }
        return token;
    };
    return fetch(API + endpoint, {
        method,
        headers: {
            Authorization: getToken(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((res: Response) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error("response status code not 200");
            }
        })
        .catch((err: Error) => {
            console.error(err);
        });
}

export function isAuthenticated() {
    return sessionStorage.getItem("token");
}

export function authenticate(to: string) {
    if (process.env.REACT_APP_TOKEN) {
        sessionStorage.setItem("token", process.env.REACT_APP_TOKEN);
    } else {
        to = `${process.env.REACT_APP_URL}/auth/?to=${to}`;
        to = `${API}/auth/github/?redirect_uri=${to}`;
    }
    window.location.replace(to);
}

export function getToken(code: string | string[] | null) {
    return request("POST", "/auth/code/github/", { code }).then(
        (res) => res.token
    );
}

export function getRoles() {
    return request("GET", "/auth/roles/").then((res) => res.roles);
}

export function getRolesSync() {
    const token = sessionStorage.getItem("token");
    if (token) {
        try {
            const tokenData = JSON.parse(atob(token.split(".")[1]));
            return tokenData.roles;
        } catch (e) {
            // if the token is incorrectly formatted, we just ignore it and return the default []
        }
    }
    return [];
}

export function getRegistration(role: string) {
    return request("GET", `/registration/${role}/`);
}

export function register(
    isEditing: boolean,
    role: string,
    registration: RegistrationType
) {
    const method = isEditing ? "PUT" : "POST";
    return request(method, `/registration/${role}/`, registration);
}

export function getRSVP() {
    return request("GET", "/rsvp/");
}

export function rsvp(isEditing: boolean, registration: RegistrationType) {
    const method = isEditing ? "PUT" : "POST";
    return request(method, "/rsvp/", registration);
}

export function uploadFile(file: File, type: FileType) {
    return request("GET", `/upload/${type}/upload/`)
        .then((res) =>
            fetch(res[type], {
                method: "PUT",
                headers: { "Content-Type": file.type },
                body: file,
            })
        )
        .then((res) => {
            if (res.ok) {
                return res;
            }
            throw new Error("response did not have status 200");
        })
        .catch((err: Error) => {
            console.error(err);
        });
}

export function getQR() {
    return request("GET", "/user/qr/");
}

export function getPrizes() {
    return request("GET", "/upload/blobstore/prizes/").then((res) => res.data);
}

export function refreshToken() {
    return request("GET", "/auth/token/refresh/").then((res) =>
        sessionStorage.setItem("token", res.token)
    );
}

export function getMentorTimeslots() {
    return request("GET", "/upload/blobstore/mentor-timeslots/").then(
        (res) => res.data
    );
}

export function setMentorTimeslots(data: Record<string, string>) {
    return request("PUT", "/upload/blobstore/", {
        id: "mentor-timeslots",
        data,
    })
        .then((res: Response) => res.json())
        .then((res: any) => res.data)
        .catch((err: Error) => console.log(err));
}

export function getEvents() {
    return request("GET", "/event/").then((res) => res.events);
}
