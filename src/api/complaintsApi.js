import axios from 'axios';

// API endpoint URL
const API_URL = 'http://localhost:5000/complaint';

export const getComplaints = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
        /*  //switch to next return for lot of mocked records:
          return {
        "a93adc57-4d59-4a9d-85c6-b5d48d99101d": { "subject": "The seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0d-11ec-90d6-0242ac120003", "users": { "id": "a93adc57-4d59-4a9d-85c6-b5d48d99101d", "fullName": "John Doe", "emailAddress": "johndoe@test.com", "physicalAddress": "Test Lane 1 Los Angeles" }, "purchases": { } },
        "a93adc57-4d59-4a9e-85c6-b5d48d99102d": { "subject": "abc seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0e-11ec-90d6-0242ac120003", "users": { }, "purchases": { } },
        "a93adc57-4d59-4a9d-85c6-b5d48d99101d": { "subject": "The seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0d-11ec-90d6-0242ac120003", "users": { "id": "a93adc57-4d59-4a9d-85c6-b5d48d99101d", "fullName": "John Doe", "emailAddress": "johndoe@test.com", "physicalAddress": "Test Lane 1 Los Angeles" }, "purchases": { } },
        "a93adc57-4d59-4a9e-85c6-b5d48d99103d": { "subject": "abc seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0e-11ec-90d6-0242ac120003", "users": { }, "purchases": { } },
        "a93adc57-4d59-4a9d-85c6-b5d48d99104d": { "subject": "The seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0d-11ec-90d6-0242ac120003", "users": { "id": "a93adc57-4d59-4a9d-85c6-b5d48d99101d", "fullName": "John Doe", "emailAddress": "johndoe@test.com", "physicalAddress": "Test Lane 1 Los Angeles" }, "purchases": { } },
        "a93adc57-4d59-4a9e-85c6-b5d48d99105d": { "subject": "abc seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0e-11ec-90d6-0242ac120003", "users": { }, "purchases": { } },
        "a93adc57-4d59-4a9d-85c6-b5d48d99106d": { "subject": "The seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0d-11ec-90d6-0242ac120003", "users": { "id": "a93adc57-4d59-4a9d-85c6-b5d48d99101d", "fullName": "John Doe", "emailAddress": "johndoe@test.com", "physicalAddress": "Test Lane 1 Los Angeles" }, "purchases": { } },
        "a93adc57-4d59-4a9e-85c6-b5d48d99107d": { "subject": "abc seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0e-11ec-90d6-0242ac120003", "users": { }, "purchases": { } },
        "a93adc57-4d59-4a9d-85c6-b5d48d99108d": { "subject": "The seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0d-11ec-90d6-0242ac120003", "users": { "id": "a93adc57-4d59-4a9d-85c6-b5d48d99101d", "fullName": "John Doe", "emailAddress": "johndoe@test.com", "physicalAddress": "Test Lane 1 Los Angeles" }, "purchases": { } },
        "a93adc57-4d59-4a9e-85c6-b5d48d99109d": { "subject": "abc seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0e-11ec-90d6-0242ac120003", "users": { }, "purchases": { } },
        "a93adc57-4d59-4a9d-85c6-b5d48d99121d": { "subject": "The seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0d-11ec-90d6-0242ac120003", "users": { "id": "a93adc57-4d59-4a9d-85c6-b5d48d99101d", "fullName": "John Doe", "emailAddress": "johndoe@test.com", "physicalAddress": "Test Lane 1 Los Angeles" }, "purchases": { } },
        "a93adc57-4d59-4a9e-85c6-b5d48d99101d": { "subject": "abc seller never sent my item!", "complaint": "I made a purchase and the item hasn’t shipped. It’s been over a week. Please help!", "purchaseId": "14b28cf0-7a0e-11ec-90d6-0242ac120003", "users": { }, "purchases": { } },
    }; */
    } catch (error) {
        throw error;
    }
};

export const createComplaint = async (complaintData) => {///??? remove
    try {
        const response = await axios.post(API_URL, complaintData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
