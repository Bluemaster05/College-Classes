import sys
import datetime
from PySide6.QtWidgets import QApplication, QWidget, QLabel, QMainWindow
from PySide6.QtCore import QTimer


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.time = '0'
        self.label = QLabel(self.time)

        self.setCentralWidget(self.label)

        self.timer = QTimer()
        self.timer.timeout.connect(self.updateTime)
        self.timer.start(1000)

    def updateTime(self):
        self.time = datetime.datetime.now().strftime("%I:%M:%S %p")
        self.label.setText(self.time)

        

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())