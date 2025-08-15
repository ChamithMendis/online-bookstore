💡 Purpose:
Contains application-wide singletons — services, guards, interceptors, and models — that are only loaded once in the app.

Inside:

auth.service.ts
Handles authentication logic: login, logout, token storage, etc.
Example: Calls backend API to authenticate the user.

auth.guard.ts
A route guard that prevents users from accessing certain routes without being logged in.

token.interceptor.ts
An HTTP interceptor that automatically attaches your JWT token to outgoing API requests.

models/ (TypeScript interfaces or classes)

user.model.ts → Structure of a user object (e.g., { id, name, email }).

book.model.ts → Structure of a book object (e.g., { id, title, author, content }).