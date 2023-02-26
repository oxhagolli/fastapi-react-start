from fastapi import FastAPI, HTTPException, status
from fastapi.responses import FileResponse
from os.path import exists

app = FastAPI()


@app.get("/")
def home():
    return FileResponse("dist/index.html")


@app.get("/{filename}")
def generic_load(filename: str):
    fn = f"dist/{filename}"
    if not exists(fn):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'File {filename} has unsupported extension type',
        )
    return FileResponse(fn)
