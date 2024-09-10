from sqlalchemy.orm import Session
from modelo import Usuario
from schemas import CrearUsuario
import bcrypt

#Crea el usuario en la base de datos 
def crear_usuario(db: Session, usuario: CrearUsuario): 
    hashed_password = bcrypt.hashpw(usuario.password.encode('utf-8'), bcrypt.gensalt())
    db_usuario = Usuario(nombreUsuario=usuario.nombre, email=usuario.email, edad=usuaro.edad, password=hashed_password.decode('utf-8')) #Crea el objeto usuario, una instancia de usuario
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_user

#busca usuario por nombre
def get_usuario(db: Session, nombreUsuario: str):
    return db.query(Usuario).filter(Usuario == nombreUsuario).first()


#Propósito: Implementa las operaciones de creación, lectura, actualización y eliminación (CRUD) en la base de datos.
#Función: Las funciones en el archivo crud.py interactúan directamente con la base de datos a través de SQLAlchemy. 
#Estas funciones contienen la lógica para realizar operaciones como insertar nuevos registros, recuperar usuarios, etc.