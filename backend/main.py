from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    # Function to handle prediction requests
    return jsonify({'prediction': 'flood risk height'})

if __name__ == '__main__':
    app.run(debug=True)