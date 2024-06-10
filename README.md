
-The backend of Eye-clinic website is responsible for handling the core functionalities of the Eye Disease Diagnosis Platform. Built with Node.js  Express.js and mongodb , it manages data storage, user authentication, image processing, and communication with the AI model
Core Functionalities: 
-Registration,login and role mangement system for roles (patient,doctor) using JWT: JSON Web Tokens for security
-Authentication-Authorization-validation Middlewares for patient and doctor models intractions 
-intraction with AI model that detect eyedisease
-save uploaded patient images of eyedisease in mongodb that will send to AI model
-save uploaded reportes come out from AI model in mongodb
-using sorting-pagination-filtering for searching for a specific doctor 
