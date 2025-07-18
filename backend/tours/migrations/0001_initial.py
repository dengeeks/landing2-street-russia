# Generated by Django 5.2.4 on 2025-07-14 11:21

import ckeditor.fields
import common.utils
import common.validators
import django.core.validators
import django.db.models.deletion
import django.utils.timezone
import tours.models.tour
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('regions', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Leader',
            fields=[
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('fio', models.CharField(max_length=50, verbose_name='Имя - Фамилия')),
                ('email', models.CharField(max_length=50, verbose_name='Почта')),
                ('phone', models.CharField(max_length=50, verbose_name='Номер телефона')),
                ('address', models.CharField(max_length=125, verbose_name='Офис')),
                ('image', models.ImageField(help_text='Загрузите изображение', max_length=1000, upload_to=common.utils.setup_image_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
                ('title', models.CharField(help_text='Заголовок карточки "Лидера" в форуме (Руководитель региона)', max_length=50, verbose_name='Заголовок')),
            ],
            options={
                'verbose_name': 'лидер (форума)',
                'verbose_name_plural': 'лидер (форума)',
            },
        ),
        migrations.CreateModel(
            name='Moderator',
            fields=[
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('fio', models.CharField(max_length=50, verbose_name='Имя - Фамилия')),
                ('email', models.CharField(max_length=50, verbose_name='Почта')),
                ('phone', models.CharField(max_length=50, verbose_name='Номер телефона')),
                ('address', models.CharField(max_length=125, verbose_name='Офис')),
                ('image', models.ImageField(help_text='Загрузите изображение', max_length=1000, upload_to=common.utils.setup_image_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
                ('type', models.CharField(max_length=100, verbose_name='Тип')),
                ('desc', models.TextField(verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'модераторы и эксперты',
                'verbose_name_plural': 'модераторы и эксперты',
            },
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('fio', models.CharField(max_length=50, verbose_name='Имя - Фамилия')),
                ('email', models.CharField(max_length=50, verbose_name='Почта')),
                ('phone', models.CharField(max_length=50, verbose_name='Номер телефона')),
                ('address', models.CharField(max_length=125, verbose_name='Офис')),
                ('image', models.ImageField(help_text='Загрузите изображение', max_length=1000, upload_to=common.utils.setup_image_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
                ('title', models.CharField(help_text='Заголовок карточки "Участники" (Работа с участниками)', max_length=50, verbose_name='Заголовок')),
            ],
            options={
                'verbose_name': 'участник',
                'verbose_name_plural': 'участник',
            },
        ),
        migrations.CreateModel(
            name='SocialMedia',
            fields=[
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('name', models.CharField(max_length=25, unique=True, verbose_name='Название соцсети')),
                ('image', models.ImageField(help_text='Загрузите изображение соцсети', max_length=1000, upload_to=common.utils.setup_image_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'изображение соцсети',
                'verbose_name_plural': 'изображения соцсети',
            },
        ),
        migrations.CreateModel(
            name='SocialLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('url', models.URLField(verbose_name='Ссылка на соцсеть')),
                ('object_id', models.UUIDField(verbose_name='ID связанного объекта')),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype', verbose_name='Тип связанного объекта')),
                ('social_media', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='social_links', to='tours.socialmedia', verbose_name='Соцсеть руководителя')),
            ],
            options={
                'verbose_name': 'соцсеть объекта',
                'verbose_name_plural': 'соцсети объектов',
            },
        ),
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('title', models.CharField(max_length=125, verbose_name='Название')),
                ('info', ckeditor.fields.RichTextField(verbose_name='Описание')),
                ('address', models.CharField(max_length=125, verbose_name='Адрес')),
                ('starting_date', models.DateTimeField(verbose_name='Дата начала')),
                ('ending_date', models.DateTimeField(verbose_name='Дата завершения')),
                ('info_participant', models.TextField(help_text='Описание блока участники', verbose_name='Описание')),
                ('place', models.TextField(verbose_name='Место')),
                ('target_audience', models.TextField(verbose_name='Целевая аудитория')),
                ('target', models.TextField(verbose_name='Цель')),
                ('address_yandex', models.CharField(help_text='iframe брать здесь: https://yandex.ru/map-constructor/?from=constructorapi', max_length=1000, validators=[common.validators.validate_iframe], verbose_name='Адрес Яндекс-Карт iframe')),
                ('format_type', models.CharField(choices=[('video_url', 'Видео'), ('image', 'Изображение')], help_text='Выберите тип медиа (Изображение или видео)', max_length=25, verbose_name='Тип контента')),
                ('video_url', models.URLField(blank=True, help_text='URL видео (главное)', max_length=1000, null=True, verbose_name='Ссылка на видео')),
                ('image', models.ImageField(blank=True, help_text='Загрузите изображение (главное)', max_length=1000, null=True, upload_to=common.utils.setup_image_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
                ('format_type2', models.CharField(choices=[('video_url', 'Видео'), ('image', 'Изображение')], help_text='Выберите тип медиа (Изображение или видео) для блока под картой', max_length=25, verbose_name='Тип контента')),
                ('video_url2', models.URLField(blank=True, help_text='URL видео для блока под картой', max_length=1000, null=True, verbose_name='Ссылка на видео')),
                ('image2', models.ImageField(blank=True, help_text='Загрузите изображение для блока под картой', max_length=1000, null=True, upload_to=tours.models.tour.Tour.setup_image2_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
                ('leader', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tours', to='tours.leader', verbose_name='Лидер')),
                ('moderator', models.ManyToManyField(to='tours.moderator', verbose_name='Диджеи и гости')),
                ('participant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tours', to='tours.participant', verbose_name='Участник')),
            ],
            options={
                'verbose_name': 'тур',
                'verbose_name_plural': 'тур',
            },
        ),
        migrations.CreateModel(
            name='BlockParticipantGallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('image', models.ImageField(help_text='Загрузите изображение', max_length=1000, upload_to=common.utils.setup_image_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'])], verbose_name='Изображение')),
                ('tour', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, related_name='gallery', to='tours.tour', verbose_name='форум')),
            ],
            options={
                'verbose_name': 'Галерея блока участника',
                'verbose_name_plural': 'Галерея блоков участников',
            },
        ),
        migrations.CreateModel(
            name='TourCityActivity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Дата создания записи')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования записи')),
                ('date', models.DateTimeField(verbose_name='Дата')),
                ('city', models.OneToOneField(help_text='Выберите город в котором проходит тур', on_delete=django.db.models.deletion.CASCADE, related_name='tour_activities', to='regions.city', verbose_name='Город')),
                ('tour', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tour_activities', to='tours.tour', verbose_name='Тур')),
            ],
            options={
                'verbose_name': 'активность',
                'verbose_name_plural': 'активность',
            },
        ),
    ]
