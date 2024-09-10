from fastapi import FastAPI
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from modelo import Base
from auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware
from bd import engine, sessionLocal

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes ajustar esto para permitir solo dominios específicos
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos HTTP
    allow_headers=["*"],  # Permite todos los encabezados
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)