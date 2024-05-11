# Team Adrishya: The Invincibles: DeerHack 2024 Hackathon

### Project Setup Instructions

Before running the project, ensure you have the following prerequisites installed and set up:

1. **Node.js and npm**: Make sure you have Node.js and npm installed. If not, you can download and install them.

2. **PostgreSQL**: Ensure PostgreSQL is set up and running locally on port `5432`. If you haven't installed PostgreSQL yet, you can download and install it.

2. **Python**: Make sure you have Python installed and set up. 

### Installation Steps

1. **Clone the Repository**:

   ```
   git clone https://github.com/joonshakya/deerhack-2024
   ```

2. **Navigate to the Project Directory**:

   ```
   cd deerhack-2024
   ```

3. **Install Dependencies**:

   - Install `pnpm` globally:

     ```
     npm i -g pnpm@8
     ```

   - Install project dependencies:

     ```
     pnpm i
     ```

   - Navigate to the Expo app directory:

     ```
     cd apps/expo
     ```

   - Install Expo app dependencies:

     ```
     npm i
     ```

### Running the Project

- **Backend and Prisma Studio**:

  From the `deerhack-2024` folder, run:

  ```
  pnpm dev
  ```

  This command will start the backend server and open Prisma Studio for database management.

- **Expo App**:

  From the `deerhack-2024/apps/expo` folder, run:

  ```
  npx expo
  ```

  This command will start the Expo app.

### Additional Notes

- Ensure that PostgreSQL is running before starting the backend server.
- Make sure no other process is using port `5432`.
- For any issues or queries, feel free to contact the project maintainers.
