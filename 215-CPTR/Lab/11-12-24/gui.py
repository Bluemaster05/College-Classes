# Logan Gardner
# Shoping Cart App
# Started 11/12 Added Some features
# Finsihed 11/13 Finshied Functionality


from PySide6.QtGui import QKeyEvent
from PySide6.QtWidgets import QMainWindow, QApplication, QVBoxLayout, QLabel, QWidget, QListWidget, QListWidgetItem, QHBoxLayout, QGridLayout, QLineEdit, QPushButton, QAbstractItemView
from PySide6.QtCore import Qt
import os
class MyWindow(QMainWindow):
    def __init__(self):
            
        super().__init__()
        self.setWindowTitle("Shopping List")

        self.lineText = ''
        self.selectedRows = []
        
        pageLayout = QVBoxLayout()

        #Add Top add section 
        self.AddEntries = QGridLayout()
        self.AddText = QLineEdit()
        self.AddText.textChanged.connect(self.setAddLine)
        self.AddButton = QPushButton("+")
        self.AddButton.clicked.connect(self.addItem)
        self.AddEntries.addWidget(self.AddText, 0, 0, 1, 1)
        self.AddEntries.addWidget(self.AddButton, 0, 1, 1, 1)
        self.addEntriesWidget = QWidget()
        self.addEntriesWidget.setLayout(self.AddEntries)
        pageLayout.addWidget(self.addEntriesWidget)

        #Add list section
        self.list = QListWidget()
        self.list.setSelectionMode(QAbstractItemView.ExtendedSelection)
        if os.path.exists(f'{os.path.abspath(__file__)[:-6]}storage.txt'):
            with open(f'{os.path.abspath(__file__)[:-6]}storage.txt', 'r') as storage:
                items = storage.read()
                items = items.split('\n')
                for item in items:
                    if item != '':
                        self.list.addItem(item)
        self.list.currentItemChanged.connect(self.printThis)
        pageLayout.addWidget(self.list)
        
        #Add Bottom Button section
        self.DeleteButton = QPushButton('-')
        self.DeleteButton.clicked.connect(self.removeItem)
        pageLayout.addWidget(self.DeleteButton)

        MainPage = QWidget()
        MainPage.setLayout(pageLayout)
        self.setCentralWidget(MainPage)

    def addItem(self):
        if self.lineText != '':
            self.list.addItem(self.lineText)
            self.AddText.setText('')
            self.list.sortItems(order=Qt.AscendingOrder)

    
    def setAddLine(self, text):
        self.lineText = text

    def removeItem(self):
        for item in self.list.selectedItems():
            self.list.takeItem(self.list.row(item))

    def printThis(self, current, previous):
        self.selectedRows.append(self.list.row(current))

    def keyPressEvent(self, event: QKeyEvent) -> None:
        if event.key() == Qt.Key_Delete:
            self.removeItem()
        if event.key() == Qt.Key_Return:
            self.addItem()

    def closeEvent(self, event):
        with open(f'{os.path.abspath(__file__)[:-6]}storage.txt', 'w') as storage:    
            for count in range(self.list.count()):
                storage.write(self.list.item(count).text() + '\n')
                os.path.abspath(__file__)

if __name__ == '__main__':
    app = QApplication()
    w = MyWindow()
    w.show()
    app.exec()