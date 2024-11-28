# Quit Smoking/Vaping SMS Scheduler

A Node.js application that helps you quit smoking or vaping by sending motivational SMS notifications at scheduled times. Powered by the Twilio API, this app ensures you stick to your planned reduction schedule and reminds you when it's time for a cigarette (or when to avoid one).

---

## How It Helps

- **Custom Smoking Schedule**: Define exact times when you're allowed to smoke.
- **Motivational Messaging**: Personalize the SMS to include inspiring messages.
- **Dockerized Deployment**: Easily run the app anywhere with Docker.
- **Timezone Support**: Automatically adjusts to your local timezone.

---

## Features

- Sends SMS reminders aligned with your smoking/vaping reduction schedule.
- Encourages discipline by delaying your first smoke/vape and spacing out the rest.
- Motivates you with customizable messages to stay on track toward quitting.

---

## Prerequisites

- A [Twilio account](https://www.twilio.com/try-twilio) with an active phone number.
- Docker (recommended) or Node.js (for local execution).

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/quit-smoking.git
    cd quit-smoking
    ```

2. Create a `.env` file in the root directory of the project and add your Twilio credentials and other required environment variables:
    ```env
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    YOUR_PHONE_NUMBER=your_personal_phone_number
    TIME_ZONE=your_timezone
    ```

3. Ensure your `.env` file is listed in `.gitignore` to prevent it from being committed to version control.

## Running the Application with Docker

1. Build the Docker image:
    ```sh
    docker-compose build
    ```

2. Start the application:
    ```sh
    docker-compose up -d
    ```

3. The application will now be running in the background. You can check the logs to ensure everything is working correctly:
    ```sh
    docker-compose logs -f
    ```

## Tips for Success

* Stay Committed: Follow the schedule strictly, even when cravings hit.
* Track Progress: Gradually reduce the number of cigarettes each week.
* Stay Positive: Remind yourself of the benefits of quitting (health, savings, etc.).
* Seek Support: Share your goals with friends and family for encouragement.

## Contributing

- Contributions are welcome! Feel free to submit a pull request or suggest features.

