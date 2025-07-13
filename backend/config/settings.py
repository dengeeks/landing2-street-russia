import os
from pathlib import Path

from decouple import config
from django.core.management.utils import get_random_secret_key
from django.urls import reverse_lazy

BASE_DIR = Path(__file__).resolve().parent.parent

# секретные ключи, настройки
SECRET_KEY = config('SECRET_KEY', cast = str, default = get_random_secret_key())
DEBUG = config('DEBUG', cast = bool, default = False)
ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast = list, default = ['*'])
DB_ENGINE = config('DB_ENGINE', cast = str, default = 'postgresql')

# настройки сайта
PROTOCOL = config('PROTOCOL', cast = str, default = 'https')
DOMAIN = config('DOMAIN', cast = str, default = 'street-russia')

# Кеширование
CACHE_TOUR_KEY = config('CACHE_TOUR_KEY', cast = str, default = 'CACHE_TOUR_KEY')
CACHE_TOUR_TIMEOUT = config('CACHE_TOUR_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_TOUR_DETAIL_KEY = config('CACHE_TOUR_DETAIL_KEY', cast = str, default = 'CACHE_TOUR_DETAIL_KEY')
CACHE_TOUR_DETAIL_TIMEOUT = config('CACHE_TOUR_DETAIL_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_DISCIPLINE_KEY = config('CACHE_DISCIPLINE_KEY', cast = str, default = 'CACHE_DISCIPLINE_KEY')
CACHE_DISCIPLINE_TIMEOUT = config('CACHE_DISCIPLINE_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_MEDIA_KEY = config('CACHE_MEDIA_KEY', cast = str, default = 'CACHE_MEDIA_KEY')
CACHE_MEDIA_TIMEOUT = config('CACHE_MEDIA_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_PARTNERS_KEY = config('CACHE_PARTNERS_KEY', cast = str, default = 'CACHE_PARTNERS_KEY')
CACHE_PARTNERS_TIMEOUT = config('CACHE_PARTNERS_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_CONTACT_FOOTER_KEY = config('CACHE_CONTACT_FOOTER_KEY', cast = str, default = 'CACHE_CONTACT_FOOTER_KEY')
CACHE_CONTACT_FOOTER_TIMEOUT = config('CACHE_CONTACT_FOOTER_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_EMAIL_PHONE_FOOTER_KEY = config(
    'CACHE_EMAIL_PHONE_FOOTER_KEY', cast = str, default = 'CACHE_EMAIL_PHONE_FOOTER_KEY'
)
CACHE_EMAIL_PHONE_FOOTER_TIMEOUT = config('CACHE_EMAIL_PHONE_FOOTER_TIMEOUT', cast = int, default = 60 * 60 * 24)

CACHE_STREET_KEY = config('CACHE_STREET_KEY', cast = str, default = 'CACHE_STREET_KEY')
CACHE_STREET_TIMEOUT = config('CACHE_STREET_TIMEOUT', cast = int, default = 60 * 60 * 24)

INSTALLED_APPS = [
    'unfold',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # мои приложения
    'regions',
    'tours',
    'contents',
    'partners',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# сторонние приложения
EXTERNAL_APPS = [
    'rest_framework',
    'corsheaders',
    'drf_spectacular',
    'ckeditor',
    'django_cleanup.apps.CleanupConfig',
]

INSTALLED_APPS += EXTERNAL_APPS

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'ru-RU'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'back_static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'back_static')
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]

MEDIA_URL = 'back_media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'back_media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.FormParser',
    ],
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_ALL_ORIGINS = True
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'https://street-russia.tati-b-n.ru'
]

# SMTP
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = config('EMAIL_HOST', default = 'host@yandex.ru')
EMAIL_PORT = config('EMAIL_PORT', default = '555')
EMAIL_USE_SSL = config('EMAIL_USE_SSL', cast = bool, default = False)
EMAIL_USE_TLS = config('EMAIL_USE_TLS', cast = bool, default = True)
EMAIL_HOST_USER = config('EMAIL_HOST_USER', default = 'email@yandex.ru')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD', default = 'your_yandex_smtp_password')
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
SERVER_EMAIL = EMAIL_HOST_USER
EMAIL_ADMIN = EMAIL_HOST_USER

# настройки redis
REDIS_PORT = config('REDIS_PORT', cast = int, default = 6379)
REDIS_HOST = config('REDIS_HOST', cast = str, default = 'redis')
REDIS_PASSWORD = config('REDIS_PASSWORD', cast = str, default = 'redis_password')

# настройки celery
CELERY_BROKER_URL = f'redis://default:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/0'
CELERY_RESULT_BACKEND = f'redis://default:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/0'
CELERY_TIMEZONE = 'Europe/Moscow'

CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TASK_TRACK_STARTED = True
CELERY_TASK_TIME_LIMIT = 30 * 60

CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': f'redis://default:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/0',
    }
}

if DB_ENGINE == 'sqlite3':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

if DB_ENGINE == 'postgresql':
    DATABASES = {
        'default': {
            'ENGINE': config('POSTGRES_ENGINE', cast = str, default = 'django.db.backends.postgresql'),
            'NAME': config('POSTGRES_DB', cast = str, default = 'django'),
            'USER': config('POSTGRES_USER', cast = str, default = 'django_user'),
            'PASSWORD': config('POSTGRES_PASSWORD', cast = str, default = 'django'),
            'HOST': config('POSTGRES_HOST', cast = str, default = 'db'),
            'PORT': config('POSTGRES_PORT', cast = int, default = 5432)
        }
    }

# Logging

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'django': {
            'format': '[%(asctime)s] %(levelname)s %(message)s',
            'datefmt': '%d/%b/%Y %H:%M:%S',
        },
    },
    'handlers': {
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'django',
        },
    },
    'loggers': {
        '': {
            'handlers': ['console'],
            'level': 'INFO',
        },
    },
}

if DEBUG:
    INTERNAL_IPS = ('127.0.0.1',)
    MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware']
    INSTALLED_APPS += ['debug_toolbar']
    DEBUG_TOOLBAR_CONFIG = {
        'SHOW_TOOLBAR_CALLBACK': lambda request: True
    }

# Настройки админ панели
UNFOLD = {
    "SITE_TITLE": "Добро пожаловать!",
    "SITE_HEADER": "Административная панель",
    "SITE_SYMBOL": "speed",
    "show_all_applications": False,
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": True,
        "navigation": [
            {
                "title": "Тур",
                "collapsible": True,
                "separator": True,
                "items": [
                    {
                        "title": "Тур",
                        "link": reverse_lazy("admin:tours_tour_changelist"),
                    },
                    {
                        "title": "Диджеи и гости",
                        "link": reverse_lazy("admin:tours_moderator_changelist"),
                    },
                    {
                        "title": "Участники",
                        "link": reverse_lazy("admin:tours_participant_changelist"),
                    },
                    {
                        "title": "Лидеры",
                        "link": reverse_lazy("admin:tours_leader_changelist"),
                    }
                ]
            },
            {
                "title": "Партнеры",
                "collapsible": True,
                "separator": True,
                "items": [
                    {
                        "title": "Партнеры",
                        "link": reverse_lazy("admin:partners_partner_changelist"),
                    },
                    {
                        "title": "Тип партнеров",
                        "link": reverse_lazy("admin:partners_partnertype_changelist"),
                    }
                ]
            },
            {
                "title": "Регионы",
                "collapsible": True,
                "separator": True,
                "items": [
                    {
                        "title": "Регионы",
                        "link": reverse_lazy("admin:regions_region_changelist"),
                    },
                    {
                        "title": "Города",
                        "link": reverse_lazy("admin:regions_city_changelist"),
                    }
                ]
            },
            {
                "title": "Социальные сети",
                "collapsible": True,
                "separator": True,
                "items": [
                    {
                        "title": "Социальные сети",
                        "link": reverse_lazy("admin:tours_socialmedia_changelist"),
                    }
                ]
            },
            {
                "title": "Статика",
                "collapsible": True,
                "separator": True,
                "items": [
                    {
                        "title": "Дисциплина",
                        "link": reverse_lazy("admin:contents_discipline_changelist"),
                    },
                    {
                        "title": "Блок аккредитация для СМИ",
                        "link": reverse_lazy("admin:contents_media_changelist"),
                    },
                    {
                        "title": "Почта, Номер",
                        "link": reverse_lazy("admin:contents_emailphonefooter_changelist"),
                    },
                    {
                        "title": "Соцсети",
                        "link": reverse_lazy("admin:contents_contactfooter_changelist"),
                    },
                    {
                        "title": "Блок УЛИЦЫ",
                        "link": reverse_lazy("admin:contents_street_changelist"),
                    }
                ]
            },

        ],
    },
}

# Ckeditor
CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_IMAGE_BACKEND = "pillow"
CKEDITOR_JQUERY_URL = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'

CKEDITOR_CONFIGS = {
    'default':
        {
            'toolbar': 'full',
            'width': 'auto',
            'extraPlugins': ','.join(
                [
                    'codesnippet', 'colorbutton', 'font', 'justify',
                ]
            ),
        },
}
