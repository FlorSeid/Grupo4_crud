from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

DATABASE_URL = "sqlite:///./base.db"

engine = create_engine(DATABASE_URL)
sessionLocal = sessionmaker (autocommit = False, autoflush= False, bind= engine)