from PySide6.QtWidgets import QMainWindow, QApplication, QVBoxLayout, QLabel, QWidget, QListWidget, QListWidgetItem, QHBoxLayout, QGridLayout, QLineEdit, QPushButton, QAbstractItemView

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Shopping List")

        pageLayout = QVBoxLayout()

        #Add Top add section
        self.AddEntries = QGridLayout()
        self.AddText = QLineEdit()
        self.AddButton = QPushButton("+")
        self.AddEntries.addWidget(self.AddText, 0, 0, 1, 1)
        self.AddEntries.addWidget(self.AddButton, 0, 1, 1, 1)
        self.addEntriesWidget = QWidget()
        self.addEntriesWidget.setLayout(self.AddEntries)
        pageLayout.addWidget(self.addEntriesWidget)

        #Add list section
        self.list = QListWidget()
        self.list.setSelectionMode(QAbstractItemView.ExtendedSelection)
        self.list.addItems(['a', 'b', 'c', 'd', 'e', 'f','g','h']) # Gets Removed later once implemented
        pageLayout.addWidget(self.list)
        
        #Add Bottom Button section
        self.DeleteButton = QPushButton('-')
        pageLayout.addWidget(self.DeleteButton)

        MainPage = QWidget()
        MainPage.setLayout(pageLayout)
        self.setCentralWidget(MainPage)

    def addItem(self):
        self.AddText.setText('')

if __name__ == '__main__':
    app = QApplication()
    w = MyWindow()
    w.show()
    app.exec()