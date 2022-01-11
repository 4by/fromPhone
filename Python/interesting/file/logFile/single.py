import logging

logging.basicConfig(filemode="w", filename="sample.log", level=logging.INFO)
# add filemode="w" to overwrite

#logging.debug("This is a debug message")
logging.info("Informational message")
logging.info("An error has happened!")
