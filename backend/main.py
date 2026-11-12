from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

origins = [
    "http://localhost:5173",
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

class SignUp(BaseModel):
    username : str
    password : str
    repeatedPassword : str

@app.post("/signup")
def read_root():
    # TODO
    pass

class LogIn(BaseModel):
    username : str
    password : str

def read_root():
    # TODO
    pass