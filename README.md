# Admetricks coding challenge
To run this project, install all dependencies using your favorite package manager, in my case I used pnpm:

    pnpm i

After that, create a .env file with the following contents:

    VITE_API_URL=http://localhost:8000/v1
Then run the build command:

    pnpm build
Finally serve the compiled files using:

    pnpm preview

  # API
This project gets data from a Python server located at:
https://github.com/devendr4/admetricks-coding-test-api
