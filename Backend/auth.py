from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from modelo import Usuario
from cruds import get_usuario, crear_usuario
from schemas import CrearUsuario, RespuestaUsuario, LoginRequest
from bd import sessionLocal
import bcrypt

router = APIRouter()
    
def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/registrar", response_model= RespuestaUsuario)
def registrar(usuario: CrearUsuario, db: Session = Depends(get_db)):
    db_usuario = get_usuario(db, usuario=usuario.usuario)
    if db_usuario:
        raise HTTPException(status_code=400, detail="el usuario ya fue registrado")
    return crear_usuario(db=db, usuario=usuario)


@router.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    db_usuario = get_usuario(db, request.usuario)
    if db_usuario is None:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    
    if not bcrypt.checkpw(request.password.encode('utf-8'), db_usuario.password.encode('utf-8')):
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    
    return {"message": "Inicio exitoso"}



#Propósito: Maneja la autenticación de usuarios
#Función: Este archivo se encarga de las operaciones relacionadas con la autenticación
#--> register: Registra un nuevo usuario y asegura que el nombre de usuario sea único.
#--> login: Autentica a un usuario 
#--> get_db: Proporciona una sesión de base de datos para las dependencias.