from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton, QWidget, QLabel


class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Simple Gui")
        self.count = 0
        self.button = QPushButton(str(self.count))
        self.button.clicked.connect(self.doStuff)
        # self.setCentralWidget(self.button)
        # label = QLabel.

    def doStuff(self):
        self.count += 1
        self.button.setText(str(self.count))

    def mouseReleaseEvent(self, event):
        print("realsesd")

    def keyPressEvent(self, event):
        print(event)
        
app = QApplication()
window = MyWindow()
window.show()
app.exec()