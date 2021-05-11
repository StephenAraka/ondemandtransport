# on-demand-public-transport
This is the project that will help in public transportation of commuters in real-time demands. The system will receive the request from different passengers and decide which path it will take to serve all those passengers in real-time.


## BACKEND SERVER
### Remove all migrations 

Run these commands to delete all migrations:
1. `find . -path "*/migrations/*.py" -not -name "__init__.py" -delete`
2. `find . -path "*/migrations/*.pyc"  -delete`

### Drop the database 
### Re-create migrations 
1. Run `python manage.py makemigrations`
2. Run `python manage.py migrate`
## FRONTEND WEB CLIENT

### Getting started 
- Ensure you have *nodejs* installed: [click here](https://nodejs.org/en/download/) to download
- Navigate to the frontend directory: `cd frontend`  
- Run command  `npm install`

### Running frontend server
- Run command `npm start`. Development server should be running at `http://127.0.0.1:3000/`