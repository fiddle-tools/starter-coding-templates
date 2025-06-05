# Django Project

Simple Django web application.

## Quick Start

1. Set up Python environment:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
pip install django
```

2. Run migrations:
```bash
python manage.py migrate
python manage.py createsuperuser
```

3. Start server:
```bash
python manage.py runserver
```

Visit:
- Site: http://localhost:8000
- Admin: http://localhost:8000/admin

## Requirements
- Python 3.8+
- Django 4.2+
