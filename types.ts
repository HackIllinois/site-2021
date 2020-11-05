// POST /auth/code/PROVIDER/
// res
export interface getTokenType {
    token: string;
}

// GET /auth/roles/
export type getRolesType = {
    id: string;
    roles: string[];
};

// GET /auth/token/refresh/
export interface authTokenRefreshType extends getTokenType {}

// GET /rsvp/
export type getRsvpType = {
    id: string;
    isAttending: boolean;
};

// POST/PUT /rsvp/
export type postPutRsvpReqType = {
    isAttending: boolean;
};

export type postPutRsvpResType = {
    id: string;
    isAttending: boolean;
};

export type regType = {
    firstName: string;
    lastName: string;
    timezone: string;
    email: string;
    location: string;
    gender: string;
    race: string[];
    degreePursued:
        | "ASSOCIATES"
        | "BACHELORS"
        | "MASTERS"
        | "PHD"
        | "GRADUATED"
        | "OTHER";
    graduationYear: number;
    school: string;
    major: string;
    programmingYears: number;
    programmingAbility: number;
    hasInternship: boolean;
    resumeFilename: string;
};

// GET /upload/resume/upload//
export type uploadResumeType = {
    id: string;
    resume: string;
};

// GET /upload/photo/upload//
export type uploadPhotoType = {
    id: string;
    photo: string;
};

// GET /user/qr/
export type getUserQrType = {
    id: string;
    qrInfo: string;
};

// GET /event/
export type eventsType = {
    events: [
        {
            id: string;
            name: string;
            description: string;
            startTime: number;
            endTime: number;
            locations: [
                {
                    description: string;
                    tags: string[];
                    latitude: number;
                    longitude: number;
                }
            ];
            sponsor: string;
            eventType: string;
        }
    ];
};

// POST /upload/blobstore/
export type uploadBlobStoreType = {
    id: string;
    data: {
        thing1: string;
        thing2: string;
    };
};
