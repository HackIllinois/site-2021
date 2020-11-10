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

// // GET /upload/resume/upload//
// export type uploadResumeType = {
//     id: string;
//     resume: string;
// };

// // GET /upload/photo/upload//
// export type uploadPhotoType = {
//     id: string;
//     photo: string;
// };

export type uploadFile = {
    id: string;
    photo?: string;
    resume?: string;
};

// GET /user/qr/
export type getUserQrType = {
    id: string;
    qrInfo: string;
};

export type eventType = {
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
};

export type WeekType = {
    index?: number;
    date: Date;
};

export type DayType = {
    date: Date;
    dayOfWeek: string;
    month: string;
    dayOfMonth: number;
    events: eventType[];
};

// GET /event/
export type eventsType = {
    events: eventType[];
};

export type deleteBlobStoreReqType = {
    id: string;
};

export type uploadBlobStoreType = {
    id: string;
    data: {
        thing1: string;
        thing2: string;
    };
};

export type uploadlBlobStoreMentorTimeslotType = {
    id: string;
    data: {
        email: string;
        end_date: string;
        id: number;
        start_date: string;
        text: string;
    }[];
};

export type uploadBlobstorePrizesType = {
    id: string;
    data: {
        prizes: {
            description: string;
            name: string;
            sponsor: string;
        }[];
    };
};
