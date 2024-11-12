import sys
from PySide6.QtWidgets import (
    QMainWindow, QApplication,
    QLabel, QToolBar, QStatusBar, QGridLayout, QWidget, QPushButton
)
from PySide6.QtGui import QAction, QIcon
from PySide6.QtCore import Qt

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        
        grid = QGridLayout()
        self.label = QLabel('Press button below')
        grid.addWidget(self.label, 0, 0, 1, -1)
        
        self.button1 = QPushButton('a')
        grid.addWidget(self.button1, 1, 0)

        panel = QWidget()
        panel.setLayout(grid)
        self.setCentralWidget(panel)


# class MyWindow(QMainWindow):
#     def __init__(self):
#         super().__init__()
        
#         grid = QGridLayout()
#         self.label = QLabel("Press a button below")
#         grid.addWidget(self.label, 0, 0, 1, -1)


#         self.buttons = [ QPushButton(letter) for letter in "one two three".split() ]
#         for column, button in enumerate(self.buttons):
#             button.clicked.connect(self.buttonClicked)
#             grid.addWidget(button, 1, column)
        
#         panel = QWidget()
#         panel.setLayout(grid)
#         self.setCentralWidget(panel)
    
#     def buttonClicked(self):
#         print(dir(self))
        




app = QApplication()
window = MyWindow()
window.show()
app.exec()