# Logan Gardner
# Shoping Cart App
# Started 11/12 Added Some features
# Finsihed 11/13 Finshied Functionality


from PySide6.QtGui import QKeyEvent
from PySide6.QtWidgets import QMainWindow, QApplication, QVBoxLayout, QLabel, QWidget, QListWidget, QListWidgetItem, QHBoxLayout, QGridLayout, QLineEdit, QPushButton, QAbstractItemView, QDialog, QDialogButtonBox, QMessageBox
from PySide6.QtCore import Qt
import os, json
import backend


class ConfirmDelete(QDialog):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Wait!!!")

        QBtn = (
            QDialogButtonBox.Yes | QDialogButtonBox.Cancel
        )

        self.buttonBox = QDialogButtonBox(QBtn)
        self.buttonBox.accepted.connect(self.accept)
        self.buttonBox.rejected.connect(self.reject)

        layout = QVBoxLayout()
        message = QLabel("Are you sure you want to delete the selected items?")
        layout.addWidget(message)
        layout.addWidget(self.buttonBox)
        self.setLayout(layout)

class MyWindow(QMainWindow):
    def __init__(self):
            
        super().__init__()
        self.setWindowTitle("Shopping List")

        self.lineText = ''
        self.selectedRows = []
        
        pageLayout = QVBoxLayout()

        #Add Top add section 
        self.AddEntries = QGridLayout()
        self.AddName = QLineEdit()
        self.AddName.textChanged.connect(self.setAddName)
        self.AddDate = QLineEdit()
        self.AddDate.textChanged.connect(self.setAddDate)
        self.AddCat = QLineEdit()
        self.AddCat.textChanged.connect(self.setAddCat)
        self.AddButton = QPushButton("+")
        self.AddButton.clicked.connect(self.addItem)
        self.AddEntries.addWidget(self.AddName, 0, 0, 1, 1)
        self.AddEntries.addWidget(self.AddDate, 0, 1, 1, 1)
        self.AddEntries.addWidget(self.AddCat, 0, 2, 1, 1)
        self.AddEntries.addWidget(self.AddButton, 0, 3, 1, 1)
        self.addEntriesWidget = QWidget()
        self.addEntriesWidget.setLayout(self.AddEntries)
        pageLayout.addWidget(self.addEntriesWidget)

        #Add list section
        self.list = QListWidget()
        self.list.setSelectionMode(QAbstractItemView.ExtendedSelection)
        if os.path.exists(f'{os.path.abspath(__file__)[:-6]}storage.txt'):
            with open(f'{os.path.abspath(__file__)[:-6]}storage.json', 'r') as storage:
                storage = json.load(storage)
                items = storage["items"]
                for item in items:
                    self.list.addItem(item["name"] + "-------" + item["date"])
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
        if self.lineName != '':
            self.list.addItem(self.lineName + "-------" + self.lineDate)
            self.list.sortItems(order=Qt.AscendingOrder)
            backend.addToJSON(backend.createID(), self.AddName, self.AddDate, self.AddCat)
            self.AddName.setNext('')
            self.AddDate.setText('')
            self.AddCat.setText('')

    
    def setAddName(self, text):
        self.lineName = text
    
    def setAddDate(self, text):
        self.lineDate = text
        
    def setAddCat(self, text):
        self.lineCat = text

    def removeItem(self):
        # dlg = ConfirmDelete()
        # if dlg.exec():
        #     for item in self.list.selectedItems():
        #         self.list.takeItem(self.list.row(item))
        # else:
        #     print('idk')
        query = QMessageBox.question(self, "Wait!!!", 'Are you sure you want to delete the selected items?')
        if query == QMessageBox.Yes:
            for item in self.list.selectedItems():
                self.list.takeItem(self.list.row(item))

    def printThis(self, current, previous):
        self.selectedRows.append(self.list.row(current))

    def keyPressEvent(self, event: QKeyEvent) -> None:
        if event.key() == Qt.Key_Delete or event.key() == Qt.Key_Backspace:
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