from flask import Flask, jsonify
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/api/asteroid")
def get_asteroid():
    return jsonify({
        "name": "Apophis",
        "x": 12345.67,
        "y": 98765.43,
        "z": 45678.90,
        "timestamp": datetime.utcnow().isoformat()
    })
