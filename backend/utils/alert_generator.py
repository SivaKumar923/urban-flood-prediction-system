import datetime

class AlertGenerator:
    def __init__(self):
        self.alerts = []

    def generate_alert(self, flood_level):
        if flood_level > 5:
            alert = f"Alert: Flood level is {flood_level}. Evacuate immediately!"
            self.alerts.append((datetime.datetime.now(), alert))
        elif flood_level > 3:
            alert = f"Caution: Flood level is {flood_level}. Prepare to evacuate."
            self.alerts.append((datetime.datetime.now(), alert))
        else:
            alert = "All clear: Flood levels are safe."
            self.alerts.append((datetime.datetime.now(), alert))

    def get_alerts(self):
        return self.alerts

# Example usage:
# generator = AlertGenerator()
# generator.generate_alert(6)
# print(generator.get_alerts())