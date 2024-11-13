from PySide6.QtGui import QKeyEvent
from PySide6.QtWidgets import QMainWindow, QApplication, QVBoxLayout, QLabel, QWidget, QListWidget, QListWidgetItem, QHBoxLayout, QGridLayout, QLineEdit, QPushButton, QAbstractItemView
from PySide6.QtCore import Qt

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
        self.list.addItems(['a', 'b', 'c', 'd', 'e', 'f','g','h']) # Gets Removed later once implemented
        self.list.currentItemChanged.connect(self.printThis)
        pageLayout.addWidget(self.list)
        # self.list.keyPressEvent()
        
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
    
    def setAddLine(self, text):
        self.lineText = text
        print(text)

    def removeItem(self):
        for item in self.list.selectedItems():
            self.list.takeItem(self.list.row(item))
        # self.selectedRows = []

    def printThis(self, current, previous):
        self.selectedRows.append(self.list.row(current))

    def keyPressEvent(self, event: QKeyEvent) -> None:
        if event.key() == Qt.Key_Delete:
            self.removeItem()

if __name__ == '__main__':
    app = QApplication()
    w = MyWindow()
    w.show()
    app.exec()