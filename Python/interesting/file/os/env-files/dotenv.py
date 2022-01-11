import os
import dotenv
# позволяет создавать локальные переменные окружения
# это файлы ".env"

dotenv.load_dotenv()
# выгружает данные из файла в область где
# хранятся переменные окружения


print(os.environ.get('EMAIL_LOGIN'))
