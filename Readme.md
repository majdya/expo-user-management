## React Native application built with expo

this application have limited functionality:

1. sign up (no email verification required)
2. sign in to your account
3. after signing the application will generate an expo token and store it for your user at supabase db
   this token will allow to send push notifications from FCM

- app must run on android mobile device not a simulator.
- Requirements: android device, Expo Go application installed, android and pc running on same network.

### how to start:

1. `cd RN` cd into react native directory
2. `npm install` install required dependencies
3. `npm android` to build and expose expo app(for dev)
4. on your device open expo go app, scan the QR code generated from previous step.
