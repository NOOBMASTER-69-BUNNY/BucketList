# Generated by Django 4.1.9 on 2023-06-05 08:06

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("order", models.PositiveIntegerField()),
                ("url", models.URLField()),
            ],
            options={
                "ordering": ["order"],
            },
        ),
        migrations.CreateModel(
            name="Destinations",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("url", models.URLField()),
                ("name", models.CharField(max_length=1000)),
                ("city", models.CharField(max_length=1000)),
                ("state", models.CharField(max_length=1000)),
                ("country", models.CharField(max_length=1000)),
                ("tagline", models.TextField()),
                ("rating", models.FloatField()),
                ("description_text", models.TextField()),
                ("category", models.CharField(max_length=1000)),
                ("destination_tags", models.TextField()),
                ("city_tags", models.TextField()),
                ("nearby_place", models.TextField()),
                ("images", models.ManyToManyField(to="destinations.image")),
            ],
        ),
    ]
