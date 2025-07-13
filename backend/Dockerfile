FROM python:3.11
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

EXPOSE 8000

# Обновление pip
RUN pip install --upgrade pip

RUN apt-get update \
    && apt-get install -y netcat-traditional dos2unix\
    && rm -rf /var/lib/apt/lists/* \
    && ln -sf /usr/bin/nc.traditional /usr/bin/nc

# Установка зависимостей
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Копирование всего проекта
COPY . /app/

# Копирование и разрешение на выполнение entrypoint
COPY entrypoint.sh /app/entrypoint.sh
RUN dos2unix /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Точка входа
ENTRYPOINT ["/app/entrypoint.sh"]