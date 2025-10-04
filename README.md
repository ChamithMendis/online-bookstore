# ☁️ Online Bookstore using Angular + Spring Boot + MYSQL + AWS

This full-stack bookstore app dashboard uses AWS EC2, RDS for hosting, database. It demonstrates deployment and configuration of a production-ready cloud-native system.

🚀 Hosting Architecture on AWS

- Angular frontend hosted on EC2
- Spring Boot backend deployed on EC2
- MySql hosted on RDS

🚀 AWS Deployment

Application was successfully deployed on Amazon Web Services (AWS) using the Free Tier.

Deployment Overview

Frontend (Angular) — Built using ng build and deployed on an Nginx web server inside an EC2 (t2.micro) instance running Ubuntu.

Backend (Spring Boot) — Deployed on the same EC2 instance, running as a background Java process and accessible via a REST API.

Database (MySQL) — Installed locally on the EC2 instance to minimize cost and latency.

# Key Configuration Steps

- Created an EC2 Instance under the AWS Free Tier (Ubuntu t2.micro).
- Generated and used an SSH key pair for secure access.
- Installed Java, MySQL, and Nginx on the instance.
- Deployed the Angular build to EC2 and configured Nginx to serve it.
- Configured CORS in the Spring Boot application to allow requests from the EC2 public IP.
- Opened required ports (80 and 8080) in the AWS Security Group.
- Verified that both frontend and backend were accessible via the EC2 public IP.

The full-stack application is now publicly accessible via the EC2 instance’s public IP address.

# Angular Project Structure

The Angular project is organized to separate core services, shared components, feature modules, and layout management. It uses standalone components with lazy-loaded routes for scalability and maintainability. The structure ensures a clear separation of concerns and easy extension of the application in the future.

src/
├── app/
│ ├── core/ # Core services, models, guards, interceptors
│ │ ├── auth.service.ts
│ │ ├── auth.guard.ts
│ │ └── models/
│ │ ├── user.model.ts
│ │ └── book.model.ts
│ │
│ ├── shared/ # Reusable components, pipes, directives
│ │ ├── components/
│ │ │ ├── navbar/
│ │ │ │ └── navbar.component.ts
│ │ │ └── sidebar/
│ │ │ └── sidebar.component.ts
│ │ ├── pipes/
│ │ └── directives/
│ │
│ ├── features/ # Feature areas (lazy-loaded)
│ │ ├── auth/ # Login/Register
│ │ │ ├── login/
│ │ │ │ └── login.component.ts
│ │ │ ├── register/
│ │ │ │ └── register.component.ts
│ │ │ └── auth.routes.ts
│ │ │
│ │ ├── welcome-page / # landing page after logged in
│ │ │ └── welcome-page.component.ts
│ │ └── all-books/ # View/Read books
│ │ └── all-books.component.ts
│ ├── layout/ # Layout after login
│ │ ├── main-layout.component.ts
│ │ └── main-layout.routes.ts
│ │
│ ├── app.routes.ts # Main routes config
│ └── app.component.ts # Root component
│
├── assets/
│ └── images/
│
├── environments/
│ ├── environment.ts
│ └── environment.prod.ts
│
└── main.ts # Bootstrap

# SpringBoot Project Structure

src/main/java/com/bookstore
├── AuthModule/ → Authentication module (login, registration, JWT handling).
├── UserModule/ → User and role management (entities, repositories, services).
├── CommonModule/ → CommonModule module (To Keep shared services and configs).
└── Application.java → Main Spring Boot application class (Entry Point).

The Spring Boot backend is structured into feature-based modules for authentication, user management, and shared service management. It uses Spring Security with JWT for stateless authentication and role-based access control. The layered architecture (Controller → Service → Repository) ensures clean separation of concerns and maintainable RESTful APIs for the Angular frontend.
