FROM python:3.11-alpine

RUN apk add --update nodejs npm

# Build dependencies for python
RUN pip install -U pip setuptools wheel
COPY requirements.txt .
RUN pip install -r requirements.txt

# Build download npm packages
COPY package.json .
COPY package-lock.json .
RUN npm i

# Build the frontend
COPY tsconfig.json .
COPY webpack.common.js .
COPY webpack.prod.js .
COPY src/ src/
RUN npm run build

COPY main.py .

CMD uvicorn main:app --host 0.0.0.0 --port 80
