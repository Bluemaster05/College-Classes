from PySide6.QtGui import QKeyEvent
from PySide6.QtWidgets import QMainWindow, QApplication, QVBoxLayout, QLabel, QWidget, QListWidget, QListWidgetItem, QHBoxLayout, QGridLayout, QLineEdit, QPushButton, QAbstractItemView, QDialog, QDialogButtonBox, QMessageBox
from PySide6.QtCore import Qt
import os

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()


        layout = QGridLayout()
        

        MainPage = QWidget()
        MainPage.setLayout(layout)
        self.centralWidget()