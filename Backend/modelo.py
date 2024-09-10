from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Usuario(Base): 
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    usuario = Column (String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    edad = Column(Integer)
    password = Column(String)

#Propósito: Define la estructura de la base de datos.
#Función: El modelo es una representación de las tablas de la base de datos en tu código. 
#Utiliza SQLAlchemy para definir cómo se almacenarán los datos en la base de datos. 
#Aquí defines las columnas de la tabla, sus tipos y otras restricciones