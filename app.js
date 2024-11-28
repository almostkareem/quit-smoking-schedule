const twilio = require('twilio');
const schedule = require('node-schedule');
const fs = require('fs');

// Twilio Credentials from Environment Variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const timeZone = process.env.TIME_ZONE; // E.g., "Africa/Casablanca"

// Your phone number and Twilio number
const yourPhoneNumber = process.env.YOUR_PHONE_NUMBER; // E.g., "+212612345678"
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // E.g., "+1234567890"

// Load reasons.csv file
const reasons = fs.readFileSync('reasons.csv', 'utf8').split('\n').map((line) => line.trim()).filter((line) => line.length > 0);

// Reason schedule
const scheduleTimesWithReason = [
    { hour: 10, minute: 0 },   // 10:00 AM
    { hour: 13, minute: 0 },  // 1:00 PM
    { hour: 16, minute: 0 },  // 4:00 PM
    { hour: 19, minute: 0 },  // 7:00 PM
    { hour: 22, minute: 0 }   // 10:00 PM
];

// Cigarette schedule
const scheduleTimes = [
    { hour: 9, minute: 0 },   // 9:00 AM
    { hour: 12, minute: 0 },  // 12:00 PM
    { hour: 15, minute: 0 },  // 3:00 PM
    { hour: 18, minute: 0 },  // 6:00 PM
    { hour: 21, minute: 0 }   // 9:00 PM
];

// Function to send SMS
const sendSms = (time) => {
    const message = `It's time! You can smoke now (${time}).`;
    client.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: yourPhoneNumber,
    })
    .then((message) => console.log(`SMS sent: ${message.sid}`))
    .catch((error) => console.error(`Error sending SMS: ${error}`));
};

// Schedule SMS for each cigarette time
scheduleTimes.forEach(({ hour, minute }) => {
    schedule.scheduleJob({ hour, minute, tz: timeZone }, () => {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        sendSms(timeString);
    });
});

// Function to send SMS with a random reason
const sendSmsWithReason = (time) => {
    
    const message = `Friendly reminder why you should quit smoking:\n${reasons[Math.floor(Math.random() * reasons.length)]}`;
    
    client.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: yourPhoneNumber,
    })
    .then((message) => console.log(`SMS sent: ${message.sid}`))
    .catch((error) => console.error(`Error sending SMS: ${error}`));
};

// Schedule SMS with a random reason for each time
scheduleTimesWithReason.forEach(({ hour, minute }) => {
    schedule.scheduleJob({ hour, minute, tz: timeZone }, () => {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        sendSmsWithReason(timeString);
    });
});

console.log("SMS schedule set. Notifications will be sent at the specified times.");