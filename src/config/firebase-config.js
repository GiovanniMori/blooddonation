var admin = require("firebase-admin");

var serviceAccount = {
  type: "service_account",
  project_id: "blood-donation-f7ecc",
  private_key_id: "448faf8b887afe5ab3af606a80639fdcde32f483",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtapZDHstNAWdf\nayk9W1pGEvGxtGzottsLs8WIRobBXratPx7eWY7nBfDhuxiAIqvnQ+inJ/LHeDa7\n3h2CLe5Ekbb9byCjNu+pEq3EaMWnPLse3qkNyrtP67FW8HmBRpVIRvdagExgjJfo\nqF63CxFEWNx6y9o5Ms9VgX3b7ZQfOk9iMYwrqpsB+LTuvbEPoeD6SOAnlqLU0vjB\n6+qiEnvP9pXXjQSFmZbNK3yZomkqQjY1fRR3wi7u7KdbbIWZWippYG2exxu0oEyQ\nBYiUc1rVWU/J8TuGxJkHUbEfzg19vzlcgGlMVASswjxX+Z/8eZmjhdXJ8+kda5Tq\ne/WHhxbfAgMBAAECggEAK6sWcYp0mUyMMlvyw4+YeOLWV/BeKG+7UwQO7tULo+/s\nwk2NwWH9+TDmyoDpl4KjlRXlpQoLOa2M4tv4xEo6oKusz77HEjKIQSQB+96CPy2s\n1QYuvdlaN7LbMlBV2HbkqpGsQe7izME6k4yqZR91VqelxYpFxneD/D0ia1o1HXOQ\nXCngrIa5q7MT0n1iSxsXNu2VMLdo2ZXRFBlFvm0iCq11+oI1a8261yzOGzdhYvJe\nSc0gQYDBvqinGeLaPk8clhauUN64T08TASOjYPksObG9g5PMuUhp5WzXW2fSB/bH\n0MNgozKWI6HYkJKsI+DHO2PtnRdYAllLFFRxo2uOOQKBgQDXQLZAOCGzft5XMLl1\n1KCj8uy92qOLFGxYT3iTKe3pYijnf4j6lE5PKoH3VZrOrRejwHvK0k9+Xc1lxm4c\nmK/8RGUQGHMkkCgk2ODc6TN0HMiSsqHd7SWfseQtPHJO2ymxrh7Vh/GPDWC1aYwc\nIi6l0DY2YqAq8RHTFmVXt+cG5QKBgQDOPnR5SZ89MhYDvxVsIh36T1cbLQAZTYmI\n4plpUCtj4R1DvlkEN+NqLs5bpVS8qFNNyAVGAbMbzBQLY5puYgPABPHdkgoL3dH7\ncJ09ac9fKSeH4PshBe0LdGEEACl6Wmh8UVXQCgQXvRJhTrWLEqp1zPbIkrNEKHPL\nsz2ZdEUmcwKBgQDO/F9EqbVekWTkmun8MJa4kOSuPAx/tQfqc6ESgoNQpR+IXM8v\nhmU3Iz0Oxbazfyb4RCPGCS5/6VuVvpYr0XeJMYutSpWOV0EDDbpNM8JSqUsGJdgZ\nO+2t/rXX+gRBZ+ZUAYeM9ciHMuoICJK+ivAoamt3KKe0I1Rsk2CoVSNHMQKBgGcF\nC2kKPWB0BEsax7ib0h2WRAxvDf2VnX2isr7ILORXLicIja5tvErt1mYwz4LtEa9o\nmjm935mi9uA5gIpiqzzfO3FR4XLL+nd+aQykLdF63SQiXU7BhwaRu2QkMJPNVSPD\n/PlOB31UFDpG9qfhSwRMvXiyzpjdG/pELiDY0zHBAoGAIUywkVKNJe91r9vJ7vnB\nTDbdrU60wKz3a10PB3bMb/YELevtMPH2lWapEXrF3TZ63gO1YX4a5eTMddvyJwKw\nyz7sp79vzrqvVbZMEtA+vKVXL33g2EpMXIq8Z0WTfmVZ6xApjwErVSi8JaFV0Wh2\nKcGU9CzIe4prElTz26W+6n8=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-y5a29@blood-donation-f7ecc.iam.gserviceaccount.com",
  client_id: "102404695659084316124",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y5a29%40blood-donation-f7ecc.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
